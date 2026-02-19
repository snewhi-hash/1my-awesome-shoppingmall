"""
나라장터 API 데이터 조회 스크립트
HTML/JavaScript 방식 대신 Python으로 직접 데이터를 가져와 HTML로 표시
"""
import urllib.request
import json
import webbrowser
import os
from urllib.parse import urlencode
from datetime import datetime

def fetch_bid_results(api_key, start_date, end_date, industry_code=None, page=1, num_rows=20):
    """나라장터 개찰결과 데이터 조회"""
    
    # 기본 파라미터
    params = {
        'serviceKey': api_key,
        'numOfRows': str(num_rows),
        'pageNo': str(page),
        'type': 'json'
    }
    
    # 날짜 파라미터 추가
    if start_date and end_date:
        params['inqryBgnDt'] = start_date
        params['inqryEndDt'] = end_date
    
    # 업종코드 추가 (선택적)
    if industry_code:
        params['indsLclsCd'] = industry_code
    
    # API 엔드포인트 - 올바른 Base URL 사용
    api_url = 'https://apis.data.go.kr/1230000/as/ScsbidInfoService/getOpengResultListInfoServc'
    
    full_url = f"{api_url}?{urlencode(params)}"
    
    print(f"\n{'='*60}")
    print(f"API 호출: {api_url}")
    print(f"파라미터:")
    for key, value in params.items():
        if key == 'serviceKey':
            print(f"  {key}: {value[:20]}...")
        else:
            print(f"  {key}: {value}")
    print(f"{'='*60}\n")
    
    try:
        req = urllib.request.Request(full_url)
        with urllib.request.urlopen(req, timeout=15) as response:
            data = response.read().decode('utf-8')
            result = json.loads(data)
            
            # 응답 확인
            if 'response' in result:
                header = result['response'].get('header', {})
                result_code = header.get('resultCode', '')
                result_msg = header.get('resultMsg', '')
                
                print(f"✓ 응답 수신")
                print(f"결과 코드: {result_code}")
                print(f"결과 메시지: {result_msg}")
                
                if result_code == '00':
                    body = result['response'].get('body', {})
                    total_count = body.get('totalCount', 0)
                    print(f"총 건수: {total_count}")
                    return result
                elif result_code == '03':
                    print("⚠️  데이터 없음")
                    return result
                else:
                    print(f"✗ API 오류")
                    return result
            else:
                print("✗ 예상치 못한 응답 구조")
                return result
                
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8', errors='ignore')
        print(f"✗ HTTP Error {e.code}")
        print(f"오류 내용: {error_body[:500]}")
        return None
    except Exception as e:
        print(f"✗ 오류: {str(e)}")
        return None

def generate_html(result, api_key, start_date, end_date, industry_code):
    """결과를 HTML로 생성"""
    
    html = """<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>나라장터 개찰결과 - 조회 결과</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Malgun Gothic', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 { font-size: 28px; margin-bottom: 10px; }
        .info-box {
            background: #f8f9fa;
            padding: 20px;
            border-bottom: 1px solid #dee2e6;
        }
        .info-item {
            display: inline-block;
            margin: 5px 15px;
            font-size: 14px;
        }
        .info-item strong { color: #667eea; }
        .results { padding: 25px; }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 25px;
        }
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .stat-card .number { font-size: 32px; font-weight: bold; margin-bottom: 5px; }
        .stat-card .label { font-size: 14px; opacity: 0.9; }
        .result-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            font-size: 13px;
        }
        .result-table thead {
            background: #667eea;
            color: white;
        }
        .result-table th {
            padding: 12px 10px;
            text-align: left;
            font-weight: bold;
            font-size: 13px;
        }
        .result-table td {
            padding: 10px;
            border-bottom: 1px solid #dee2e6;
            font-size: 12px;
        }
        .result-table tbody tr:hover { background: #f8f9fa; }
        .result-table tbody tr:nth-child(even) { background: #f8f9fa; }
        .no-data {
            text-align: center;
            padding: 60px;
            color: #6c757d;
            font-size: 18px;
        }
        .error {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 20px;
            border-radius: 8px;
            margin: 20px;
        }
        .btn-reload {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            margin: 20px auto;
            display: block;
        }
        .btn-reload:hover { background: #5568d3; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏢 나라장터 개찰결과 조회</h1>
            <p>업종코드: """
    
    html += f"{industry_code if industry_code else '전체'} | 용역 계약</p>"
    html += """
        </div>
        <div class="info-box">
"""
    
    html += f"""
            <div class="info-item"><strong>조회기간:</strong> {start_date[:4]}-{start_date[4:6]}-{start_date[6:8]} ~ {end_date[:4]}-{end_date[4:6]}-{end_date[6:8]}</div>
            <div class="info-item"><strong>업종코드:</strong> {industry_code if industry_code else '전체'}</div>
            <div class="info-item"><strong>조회시간:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</div>
        </div>
        <div class="results">
"""
    
    if not result:
        html += """
            <div class="error">
                <h3>❌ API 호출 실패</h3>
                <p>API 호출 중 오류가 발생했습니다. API 키와 파라미터를 확인해주세요.</p>
            </div>
        """
    elif 'response' in result:
        header = result['response'].get('header', {})
        body = result['response'].get('body', {})
        
        if header.get('resultCode') == '00' and body:
            total_count = body.get('totalCount', 0)
            items = body.get('items', [])
            
            # 리스트가 아니면 리스트로 변환
            if isinstance(items, dict):
                items = [items]
            elif not items:
                items = []
            
            html += f"""
            <div class="stats">
                <div class="stat-card">
                    <div class="number">{total_count}</div>
                    <div class="label">총 건수</div>
                </div>
                <div class="stat-card">
                    <div class="number">{len(items)}</div>
                    <div class="label">현재 표시</div>
                </div>
            </div>
            """
            
            if items:
                html += """
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>공고명</th>
                            <th>공고기관</th>
                            <th>수요기관</th>
                            <th>개찰일시</th>
                            <th>낙찰자</th>
                            <th>낙찰금액</th>
                            <th>추정가격</th>
                            <th>낙찰률</th>
                        </tr>
                    </thead>
                    <tbody>
"""
                
                for idx, item in enumerate(items, 1):
                    bid_amt = int(item.get('bidAmt', 0) or 0)
                    presmpt_prce = int(item.get('presmptPrce', 0) or 0)
                    bid_rate = f"{(bid_amt / presmpt_prce * 100):.2f}%" if presmpt_prce > 0 else 'N/A'
                    
                    openg_dt = item.get('opengDt', '')
                    if openg_dt and len(openg_dt) >= 12:
                        openg_dt_formatted = f"{openg_dt[:4]}-{openg_dt[4:6]}-{openg_dt[6:8]} {openg_dt[8:10]}:{openg_dt[10:12]}"
                    else:
                        openg_dt_formatted = openg_dt
                    
                    html += f"""
                        <tr>
                            <td>{idx}</td>
                            <td>{item.get('bidNtceNm', 'N/A')}</td>
                            <td>{item.get('ntceInsttNm', 'N/A')}</td>
                            <td>{item.get('dminsttNm', 'N/A')}</td>
                            <td>{openg_dt_formatted}</td>
                            <td>{item.get('scsbidCorpNm', 'N/A')}</td>
                            <td>{bid_amt:,}원</td>
                            <td>{presmpt_prce:,}원</td>
                            <td>{bid_rate}</td>
                        </tr>
"""
                
                html += """
                    </tbody>
                </table>
"""
            else:
                html += '<div class="no-data">조회 결과가 없습니다.</div>'
        else:
            result_msg = header.get('resultMsg', '알 수 없는 오류')
            html += f"""
            <div class="error">
                <h3>❌ API 오류</h3>
                <p>오류 코드: {header.get('resultCode')}</p>
                <p>오류 메시지: {result_msg}</p>
            </div>
"""
    
    html += """
        </div>
    </div>
</body>
</html>
"""
    
    return html

def main():
    print("="*60)
    print("나라장터 개찰결과 조회 스크립트")
    print("="*60)
    
    # API 키 입력
    api_key = input("\nAPI 키를 입력하세요: ").strip()
    if not api_key:
        api_key = "bc134c1e68c9a1d1ed5f78b48e456f28030909af300112e2c93ca8af4fd9ca41"
        print(f"기본 API 키 사용")
    
    # 날짜 입력
    start_date = input("시작일 (YYYYMMDD, Enter=20250101): ").strip() or "20250101"
    end_date = input("종료일 (YYYYMMDD, Enter=20250131): ").strip() or "20250131"
    
    # 업종코드 입력
    industry_code = input("업종코드 (Enter=전체): ").strip()
    
    # 조회 개수
    num_rows_input = input("조회 개수 (Enter=20): ").strip()
    num_rows = int(num_rows_input) if num_rows_input else 20
    
    # API 호출
    print("\n데이터 조회 중...")
    result = fetch_bid_results(api_key, start_date, end_date, industry_code, 1, num_rows)
    
    # HTML 생성
    print("\nHTML 파일 생성 중...")
    html_content = generate_html(result, api_key, start_date, end_date, industry_code)
    
    # HTML 파일 저장
    output_file = os.path.join(os.path.dirname(__file__), 'result.html')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"✓ 결과 저장: {output_file}")
    
    # 브라우저에서 열기
    print("브라우저에서 결과 열기...")
    webbrowser.open('file://' + output_file)
    
    print("\n완료!")

if __name__ == '__main__':
    main()
