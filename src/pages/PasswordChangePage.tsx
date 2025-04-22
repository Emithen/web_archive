import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PasswordInputs from "../components/Form/PasswordInputs";
//import axios from "axios";

// 새 비밀번호: 프론트에서 실시간 에러 처리

const PasswordChange = () => {
  // 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // 에러 메시지
  const [errorMessage, setErrorMessage] = useState("");
  // 실시간 유효성 검사 변수
  const [isDisabled, setIsDisabled] = useState(true);

  // 실시간 유효성 검사 함수
  const checkPasswordValidity = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      minLength &&
      (hasUpperCase || hasLowerCase) &&
      hasDigits &&
      hasSpecialChars
    );
  };

  // 새 비밀번호가 변경될 때마다 실시간 유효성 검사
  useEffect(() => {
    setIsDisabled(!checkPasswordValidity(newPassword));
  }, [newPassword]);

  // 새 비밀번호 에러 관리 // 유효해지면 에러 없애기
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);

    // 입력하지 않은 경우는 에러 아님
    if (password.length === 0) {
      setErrorMessage("");
      return;
    }

    // 새 비밀번호 에러 메시지 띄우기 - 유효성을 검사하고, 유효해지면 에러 없애기(초기화)
    if (!checkPasswordValidity(password)) {
      setErrorMessage(
        "비밀번호는 특수문자, 영문자, 숫자를 포함한 8자 이상 문자열 입니다."
      );
    } else {
      setErrorMessage("");
    }
  };

  // 비밀번호 변경 함수 - 중요 기능
  // 현재 비밀번호와 새 비밀번호가 같은 경우, 비밀번호 변경 로직은 벡엔드에서 처리
  const handlePasswordChange = () => {
    // 기본적인 에러 검사
    if (!currentPassword || !newPassword || !passwordConfirm) {
      setErrorMessage("모든 필드를 입력해주세요");
      return;
    } else if (newPassword !== passwordConfirm) {
      setErrorMessage("새 비밀번호와 새 비밀번호 확인 값이 다릅니다.");
      return;
    }

    // 비밀번호 변경 API 호출
    // try {
    //   const response = await authApi.patch("/members/me/password", {
    //     currentPassword,
    //     newPassword,
    //   });
    // } catch {}
  };

  return (
    <>
      <Container>
        <Title>비밀번호 변경</Title>
        <PasswordInputs
          currentPassword={currentPassword}
          newPassword={newPassword}
          passwordConfirm={passwordConfirm}
          onCurrentPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentPassword(e.target.value)
          }
          onPasswordConfirmChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordConfirm(e.target.value)
          }
          handleNewPasswordChange={handleNewPasswordChange}
        />

        {errorMessage && (
          <ErrorMesDiv>
            <ErrorMes>{errorMessage}</ErrorMes>
          </ErrorMesDiv>
        )}

        <ButtonDiv>
          <Button onClick={handlePasswordChange}>변경하기</Button>
        </ButtonDiv>
      </Container>
    </>
  );
};

export default PasswordChange;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`;
const Title = styled.p`
  font-size: 30px;
`;
const ErrorMesDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const ErrorMes = styled.p`
  position: absolute;
  font-size: 13px;
  color: red;
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  color: white;
  background-color: #000;
  width: 100px;
  padding: 5px;
  margin-top: 70px;
`;
