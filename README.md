# 포트폴리오(양영호)

모던한 분위기의 개인 포트폴리오 웹사이트입니다.  
HTML, CSS, JavaScript로 구성되어 있으며 반응형 디자인을 지원합니다.

## 주요 구성

- 로고와 네비게이션
- 히어로 섹션(웹사이트 느낌의 대표 이미지)
- 프로젝트 카드 3개
- 연락처 폼(기본 유효성 검사 포함)

## 파일 구조

- `index.html` : 페이지 마크업
- `css/styles.css` : 스타일 및 반응형 레이아웃
- `js/main.js` : 인터랙션(모바일 메뉴, 스크롤, 폼 검증)

## 실행 방법

별도의 빌드 과정이나 패키지 설치 없이 실행할 수 있는 정적 웹사이트입니다.

### 1. 브라우저에서 바로 열기

1. 프로젝트 폴더를 엽니다.
2. `index.html` 파일을 더블클릭하거나 브라우저로 드래그해 실행합니다.

### 2. 로컬 서버로 실행하기 (권장)

브라우저 보안 정책에 따른 경로·리소스 문제를 피하려면 로컬 서버로 실행하는 것을 권장합니다.
프로젝트 루트(`index.html`이 있는 폴더)에서 아래 방법 중 하나를 사용하세요.

**Python**

```bash
python -m http.server 8000
```

**Node.js**

```bash
npx serve .
```

실행 후 터미널에 표시된 주소(예: `http://localhost:8000`)로 접속합니다.

**VS Code**

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 확장을 설치한 뒤, `index.html`에서 마우스 오른쪽 버튼 → **Open with Live Server**를 선택합니다.

### 3. 배포 (Vercel)

이 프로젝트는 Vercel에 연결되어 있습니다. [Vercel CLI](https://vercel.com/docs/cli)로 배포할 수 있습니다.

```bash
npm i -g vercel   # 최초 1회 설치
vercel            # 미리보기(Preview) 배포
vercel --prod     # 프로덕션 배포
```

## 커스터마이징

- 이름/소개 문구: `index.html`
- 프로젝트 내용 및 링크: `index.html`
- 색상/간격/폰트 스타일: `css/styles.css`
- 폼 동작 및 검증: `js/main.js`

## 참고

- 현재 연락처 폼은 데모용으로, 실제 메일 전송 기능은 포함되어 있지 않습니다.
- 필요 시 Formspree, EmailJS 등 외부 서비스와 연동해 확장할 수 있습니다.
