# 📦 Accordion 컴포넌트

React + TypeScript 기반으로 만든 [[ 단일 열림 아코디언 컴포넌트 ]]입니다. UI 아카이브를 위한 독립적인 컴포넌트로, 재사용성과 확장성을 고려해 설계되었습니다.

---

## ✅ 구성 요소

### 1. `Accordion.tsx`
- 아코디언 전체를 감싸는 부모 컴포넌트
- 내부 아이템들의 열림/닫힘 상태를 중앙에서 관리

### 2. `AccordionItem.tsx`
- 각각의 아코디언 섹션을 구성하는 컴포넌트
- `title`, `children`, `isOpen`, `onToggle` props를 받음
- `children` 를 통해 원하는 컴포넌트 및 html 요소 주입 가능

---

## 🧩 사용 예시

```tsx
<Accordion>
  <AccordionItem title="섹션 1">내용 1</AccordionItem>
  <AccordionItem title="섹션 2">내용 2</AccordionItem>
  <AccordionItem title="섹션 3">내용 3</AccordionItem>
</Accordion>
```

---

## ⚙️ 주요 기능

- 한 번에 하나의 섹션만 열림 (`단일 열림 방식`)
- 상태 관리: `useState`로 열려 있는 index 추적
- `cloneElement`를 통해 자식 컴포넌트에 props 주입
- TypeScript로 props 타입 안전하게 관리

---

## 🔧 확장 아이디어

- ✅ **다중 열림 지원**  
  → 배열로 열림 상태 관리 (`openIndexes: number[]`)

- ✅ **열림/닫힘 애니메이션 추가**  
  → `height`, `opacity` transition 또는 framer-motion 활용

- ✅ **접힘 상태 저장**  
  → `localStorage` 또는 외부 상태관리(Zustand 등) 연동

- ✅ **UI 프레임워크 통합**  
  → Tailwind, MUI 등 디자인 시스템 적용 가능

---

## 🗂 폴더 구조

```
src/
  components/
    Accordion/
      Accordion.tsx
      AccordionItem.tsx
      index.ts
```

---

## 📌 관련 기술

- React 18+
- TypeScript
- Vite
