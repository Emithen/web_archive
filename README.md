# 프로젝트 구조 (목표)

src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── ui/             # 버튼, 인풋, 토글 등 atomic 레벨
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Toggle.tsx
│   └── composite/      # 조합 컴포넌트 (탭, 모달 등)
│       ├── Tabs/
│       ├── Modal/
│       └── Accordion/
├── pages/              # UI 컴포넌트 데모/사용 예시 페이지
│   ├── Home.tsx
│   ├── ButtonPage.tsx
│   └── ModalPage.tsx
├── styles/             # 전역 스타일 (CSS 또는 Tailwind 설정)
│   └── globals.css
├── lib/                # 유틸, 상태관리, 훅 등
│   ├── hooks/
│   ├── utils/
│   └── constants.ts
├── App.tsx
└── main.tsx
