import { ToastContainer } from "../components/Toast";
import { toast } from "../components/Toast/ToastManager"; 


const ToastPage: React.FC = () => {
  const TOAST_TEXT: string = "이것은 토스트입니다!🎉";

  return (
    <>
      <button
        onClick={() => toast(TOAST_TEXT)}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          borderRadius: "8px",
          border: "none",
          marginTop: "40px",
          marginLeft: "40px",
          cursor: "pointer",
        }}
      >
        토스트 띄우는 용도 버튼
      </button>

      <ToastContainer />
    </>
  );
};

export default ToastPage;
