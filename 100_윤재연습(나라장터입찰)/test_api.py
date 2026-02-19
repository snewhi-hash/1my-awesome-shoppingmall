"""
나라장터 API 테스트 스크립트
API 키와 파라미터를 테스트하여 올바른 엔드포인트를 찾습니다.
"""
import urllib.request
import json
from urllib.parse import urlencode

def test_api_endpoint(api_url, params):
    """API 엔드포인트를 테스트합니다."""
    try:
        full_url = f"{api_url}?{urlencode(params)}"
        print(f"\n{'='*60}")
        print(f"테스트 중: {api_url}")
        print(f"파라미터: {params}")
        print(f"{'='*60}")
        
        req = urllib.request.Request(full_url)
        with urllib.request.urlopen(req, timeout=10) as response:
            data = response.read().decode('utf-8')
            result = json.loads(data)
            
            print("✓ 응답 수신 성공")
            print(json.dumps(result, ensure_ascii=False, indent=2)[:500])
            
            if 'response' in result:
                header = result['response'].get('header', {})
                print(f"\n결과 코드: {header.get('resultCode')}")
                print(f"결과 메시지: {header.get('resultMsg')}")
                
                if header.get('resultCode') == '00':
                    print("✓ API 호출 성공!")
                    return True, result
                else:
                    print("✗ API 오류")
                    return False, result
            else:
                print("✗ 예상치 못한 응답 구조")
                return False, result
                
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8', errors='ignore')
        print(f"✗ HTTP Error {e.code}")
        print(f"오류 내용: {error_body[:300]}")
        return False, None
    except Exception as e:
        print(f"✗ 오류: {str(e)}")
        return False, None

if __name__ == '__main__':
    print("나라장터 API 테스트 도구")
    print("="*60)
    
    # API 키 입력
    api_key = input("\nAPI 키를 입력하세요 (Enter를 누르면 테스트 키 사용): ").strip()
    if not api_key:
        api_key = "YOUR_SERVICE_KEY_HERE"
        print("⚠️  테스트 키를 사용합니다. 실제 키를 입력하세요.")
    
    # 테스트할 파라미터
    test_params = {
        'serviceKey': api_key,
        'numOfRows': '10',
        'pageNo': '1',
        'type': 'json'
    }
    
    # 테스트할 API 엔드포인트 목록
    endpoints = [
        # 낙찰정보 서비스
        ('https://apis.data.go.kr/1230000/ScsbidInfoService/getOpengResultListInfoServc', 
         '개찰결과 용역 목록조회'),
        
        ('https://apis.data.go.kr/1230000/ScsbidInfoService/getOpengResultListInfoServcPPSSrch',
         '검색조건에 의한 개찰결과 용역 목록조회'),
        
        # 입찰공고 서비스
        ('https://apis.data.go.kr/1230000/BidPublicInfoService/getBidPblancListInfoServc',
         '입찰공고 용역 목록조회'),
        
        ('https://apis.data.go.kr/1230000/BidPublicInfoService/getOpengResultListInfoServc',
         '개찰결과 용역 목록조회 (BidPublicInfo)'),
    ]
    
    print("\n\n🔍 API 엔드포인트 테스트 시작...\n")
    
    successful_endpoints = []
    
    for api_url, description in endpoints:
        print(f"\n📡 {description}")
        success, result = test_api_endpoint(api_url, test_params)
        
        if success:
            successful_endpoints.append((api_url, description))
            
            # 데이터 샘플 출력
            if result and 'response' in result:
                body = result['response'].get('body')
                if body:
                    print(f"\n총 건수: {body.get('totalCount', 'N/A')}")
                    if 'items' in body:
                        print("✓ 데이터 있음")
    
    # 결과 요약
    print("\n\n" + "="*60)
    print("테스트 결과 요약")
    print("="*60)
    
    if successful_endpoints:
        print(f"\n✓ 성공한 엔드포인트: {len(successful_endpoints)}개")
        for url, desc in successful_endpoints:
            print(f"  - {desc}")
            print(f"    {url}")
    else:
        print("\n✗ 성공한 엔드포인트가 없습니다.")
        print("\n문제 해결 방법:")
        print("1. API 키가 올바른지 확인")
        print("2. 공공데이터포털에서 API 사용 승인 상태 확인")
        print("3. API 서비스명이 정확한지 확인")
        print("4. 일일 트래픽 제한을 초과하지 않았는지 확인")
    
    print("\n")
