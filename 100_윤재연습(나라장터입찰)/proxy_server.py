from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs, urlencode
import urllib.request
import json

class ProxyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # CORS 헤더 추가
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        # URL 파싱
        parsed_path = urlparse(self.path)
        
        # /api 경로로 요청이 오면 프록시
        if parsed_path.path == '/api':
            params = parse_qs(parsed_path.query)
            
            # 파라미터를 단일 값으로 변환
            api_params = {}
            for key, value in params.items():
                api_params[key] = value[0] if isinstance(value, list) else value
            
            # API 엔드포인트
            api_url = 'https://apis.data.go.kr/1230000/ScsbidInfoService/getOpengResultListInfoServc'
            
            try:
                full_url = f"{api_url}?{urlencode(api_params)}"
                print(f"\n{'='*60}")
                print(f"API 호출: {api_url}")
                print(f"파라미터: {json.dumps(api_params, ensure_ascii=False, indent=2)}")
                print(f"{'='*60}")
                
                req = urllib.request.Request(full_url)
                with urllib.request.urlopen(req, timeout=15) as response:
                    data = response.read()
                    result = json.loads(data.decode('utf-8'))
                    
                    print(f"✓ 응답 수신 성공")
                    
                    # 응답 확인
                    if 'response' in result:
                        header = result['response'].get('header', {})
                        print(f"결과 코드: {header.get('resultCode')}")
                        print(f"결과 메시지: {header.get('resultMsg')}")
                        
                        body = result['response'].get('body', {})
                        if body:
                            print(f"총 건수: {body.get('totalCount', 0)}")
                    
                    self.wfile.write(json.dumps(result, ensure_ascii=False).encode('utf-8'))
                    
            except urllib.error.HTTPError as e:
                error_body = e.read().decode('utf-8', errors='ignore')
                print(f"✗ HTTP Error {e.code}")
                print(f"오류 내용: {error_body[:500]}")
                
                error_response = {
                    'response': {
                        'header': {
                            'resultCode': str(e.code),
                            'resultMsg': f'HTTP Error {e.code}: {error_body[:200]}'
                        },
                        'body': None
                    }
                }
                self.wfile.write(json.dumps(error_response, ensure_ascii=False).encode('utf-8'))
                
            except Exception as e:
                print(f"✗ 오류: {str(e)}")
                error_response = {
                    'response': {
                        'header': {
                            'resultCode': '99',
                            'resultMsg': f'API 호출 실패: {str(e)}'
                        },
                        'body': None
                    }
                }
                self.wfile.write(json.dumps(error_response, ensure_ascii=False).encode('utf-8'))
            
        else:
            # 404 응답
            self.wfile.write(json.dumps({'error': 'Not Found'}).encode('utf-8'))
    
    def do_OPTIONS(self):
        # CORS preflight 요청 처리
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def log_message(self, format, *args):
        # 로그 메시지 출력
        print(f"{self.address_string()} - {format % args}")

def run_server(port=8080):
    server_address = ('', port)
    httpd = HTTPServer(server_address, ProxyHandler)
    print(f'🚀 프록시 서버 시작: http://localhost:{port}')
    print(f'📡 API 프록시 경로: http://localhost:{port}/api')
    print('⏹️  서버 중지: Ctrl+C')
    print('-' * 50)
    httpd.serve_forever()

if __name__ == '__main__':
    run_server(8080)
