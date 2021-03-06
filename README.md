# MOOD LOG✨

ai가 알려주는 데일리룩 무드. 매일 달라지는 아웃핏에 따른 무드를 분석할 수 있는 웹사이트를 구현.  
mbti, 심리테스트 등 공유 놀이 문화를 반영, 1회성 테스트 특성을 개선한 데일리 무드 분석 서비스.    

1. 배포 페이지(AWS ai 모델 지원이 종료되어 결과는 작동하지 않습니다.)
   - https://mood-ootd.netlify.app/
   - http://www.motd.r-e.kr/
2. 설치 및 실행
   - git clone https://github.com/summerydev/mood-log/
   - npm install
   - npm start

# 목차

- [설계](#설계)
- [기능](#기능)
- [구현](#구현)
- [트러블슈팅](#트러블슈팅)

---

# 설계

## 목표

- react와 typescript를 사용한 분석 및 테스트형 웹사이트 제작
- 반응형 구현
- 이미지 업로드 및 처리 구현
- 사용자별 결과페이지 구현
- 메인페이지 및 결과페이지 공유(카카오톡 api활용)

## 사용

- CRA
- React
- Typescript
- TSX
- CSS

---

# 기능

## 소셜미디어 공유

- 트위터, 페이스북, 인스타그램 공유
- 카카오톡 api 활용한 공유
- 링크 복사

## 사진 미리보기

- 사용자가 사진 등록 시 미리보기 제공
- 로딩 중, 결과페이지에도 사용자가 업로드한 사진 확인 가능


## 결과페이지

### 사용자별 다른 결과페이지 제공

1. id값 설정 후 `/output/${data.id}`로 결과페이지 전송
2. 결과 컴포넌트만 호출

### 결과값 시각화

- 🌱


---

# 구현

## 레이아웃
- 구성 : 홈 - 업로드 - 로딩 - 결과
<img src="./docs/layout.gif" height="300">
   


## 파일별 역할

📁 src/pages

- `Home` : 메인페이지
- `Upload` : 사진 업로드 페이지
  - 응답 상태에 따라 업로드, 로딩, 결과이동으로 구성
  - `onLoadFile()` : input 이미지 상태 관리, 사진 미리보기
  - `onInputChange()` : 사용자의 성별, 나이대 입력받음
  - `handleSubmit()` : axios로 서버에 formData 전송
    - `setLoading()` : react-loading으로 서버 응답에 대한 로딩 구현
    - `setIsShow` : 컴포넌트 hidden, shown 관리
    - 에러 핸들링
- `Output` : 분석 결과 페이지

📁 src/components

- `Header` : 언제든 홈으로 이동 가능한 헤더
- `Social` : 소셜 미디어 공유 기능
  - `KaKaoShareButton`: 카카오톡 공유 api
  - `LinkShare` : 배포 페이지 링크

---


# 트러블슈팅

## json, form데이터 전송 오류

### 문제

- `input` 태그에 입력된 이미지 파일을 전송하는데 문제를 겪음.
- "Content-Type": "application/json"
- 폼태그에 encType="multipart/form-data”
- State 사용해 파일 받음
- FormData() 객체 생성 없이 JSON.stringify에 body 담음

### 수정

```js
// /src/components/Upload.tsx
//...
const formData = new FormData();
formData.append("images", file);
formData.append("fileName", fileName);
formData.append("data", JSON.stringify(data));
//...
axios.post(url, formData);
//...
```

- State로 파일을 담은 뒤 formData()의 객체에 append하는 방식으로 변경 및 전송 헤더 수정

## 결과페이지 렌더링 오류

### 문제

- 접속 사용자별 다른 url로 결과페이지가 렌더링 되어야 함
- 렌더링 이후 데이터 서버에서 재요청 시 시간 문제

### 수정

- url에 id값을 담는 방식으로 해결
- `Upload`페이지에서 `Output`페이지로 이동 시 데이터 주입
- 사용자가 전송한 이미지는 서버에서 `axios.get`로 재요청

```js
<Link
  to={{
    pathname: `/output/${data.id}`,
    state: [
      {
        id: data.id,
        data: aiData,
      },
    ],
  }}
></Link>
```

### 재수정

- AWS 서버 및 크롬의 http, https 문제로 `axios.get`요청을 받을 수 없는 문제 발생
- 결과페이지 렌더링 대신 비동기 처리로 결과 컴포넌트 호출하는 방식으로 변경

```js
axios.post(url, formData)
      .then((res) => {
      //...
      setAiData([...aiData]);
      setIsShow(true); // 폼데이터 양식 false
      setResData(true); // 결과 true
      //...
      if (resData) {
        return (
          <div>
            <h1>🤖무드 분석 결과</h1>
            {imageSrc && (
              <img className="preview" src={imageSrc} alt="preview-img" />
            )}
          <div>
        ...
```

## 에러 핸들링

### 문제

- CORS 문제, 응답 오류, 요청 오류 등 에러 발생 시 콘솔이 아닌 사용자에게 에러 상황 전달해야함
- 에러 발생 시 에러 메시지와 함께 페이지 렌더링 되어야함

### 수정 중

- `alert`으로 에러 발생을 알리는 방식 사용
- 에러메시지 출력 후 페이지 렌더링 되는 방법 학습 중

## 수정할 사항

- 결과 페이지 재구성
- AWS(flask, ai모델) 서버와 통신 및 매칭 오류로 결과 페이지에서 `map()`으로 data 받아올 수 없음.
- 통신오류 해결과 함께 결과페이지 수정 예정
