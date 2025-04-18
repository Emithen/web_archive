import React from "react";
import Modal from "../components/Modal/Modal";
import { useModal } from "../lib/hooks/useModal";

const ModalPage: React.FC = () => {
  const { isOpen, open, close } = useModal();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧪 Modal 테스트</h1>
      <button onClick={open}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={close} title="Modal 타이틀">
        <p>이건 모달 본문입니다.</p>
      </Modal>
    </div>
  );
};

export default ModalPage;
