# nodeStudy
Node.js에 대해 공부하고 기록하는 곳

### 1. ✔️ JS 기초
- 기본 문법 01은 너무 기초라서 pass입니다.
- 기본 문법 02
  - 논리연산자
  - 반복문
  - 함수
- 기본 문법 03
  - Hoisting
  - 동기와 비동기
  - Blocking Model & Non-Blocking Model
  - Promise
  - 비동기 함수 (Async Function)
  - await 연산자
---
### 2. ✔️ Express
- 일반적인 웹 서버와 Node.js로 만들게 될 웹 서버 비교
    
    **일반적인 웹 서버와 Node.js로 만든 웹 서버는 다르지 않습니다!**
    
    - 그저 어떤 도구를 사용해서 만들었나의 차이일 뿐, 동일한 기능을 수행하는 웹 서버를 만들수 있으며, 이것은 다른 언어나 도구를 이용해 만든 웹 서버도 마찬가지 입니다.
    - 기능이 다른 웹 서버는 존재할 수 있지만 기반이 되는 개념 자체가 다른 웹 서버는 존재하지 않습니다! 우리가 배운게 전부라고 볼 수 있어요!
- Express.js란?
    - Express.js는 Node.js로 서버를 빠르고 간편하게 만들 수 있게 도와주는 웹 프레임워크 입니다.
    - Express.js 이외에 다양한 웹 프레임워크가 존재하지만 오늘날 가장 많은 Node.js 웹서버가 Express.js 프레임워크를 통해 개발되었습니다.
- 웹 서버와 Express.js의 차이점
    - **다시 한번 복습!** Express.js와 웹서버는 동일하지 않습니다!
    - Express.js는 웹서버 자체가 아닌 Node.js를 위한 웹 프레임워크로 웹 서버를 구현하기 위해 사용 되는 것이 Express.js 프레임워크 입니다.
---
### 3. ✔️ CORS
1. 교차 출처 리소스 공유 ( Cross-origin resource sharing )
    - 현재 브라우저로 접속중인 페이지에서 자바스크립트를 이용해 다른 도메인 또는 포트를 가진 주소로 요청을 하는 경우, 해당 리소스에 접근을 허용했는지 확인해 보안을 높이는 동작을 `CORS`라고 부릅니다.
2. CORS가 발생하는 이유
    - 브라우저는 주소 (도메인 or 포트)가 다른 경우 리소스의 출처가 다르다고 판단합니다.
    - 브라우저가 출처가 다르다고 판단 할때의 동작
        1. 브라우저가 요청하려고 시도했던 주소에 “OPTIONS” 메서드를 이용해 요청을 의도적으로 허용하고 있는게 맞는지 확인합니다.
        이것을 `CORS preflight` 라고 부릅니다.
        2. 요청을 받은 서버는 평소와 똑같이 응답을 합니다.
        3. 응답을 받은 브라우저는 요청에 대한 허가를 받지 못했다고 판단하고 CORS 에러를 발생시킵니다.
3. 서비스가 CORS 에러를 발생하는지 확인하는 방법
    - https://test-cors.org
4. CORS 에러가 난다면 해결하는 방법
    - 서버에 `Access-Control-Allow-Origin` 응답 헤더 추가
    - 또는 cors 모듈 설치 후 사용