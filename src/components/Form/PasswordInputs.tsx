import styled from "@emotion/styled";

type PasswordInputsProps = {
  currentPassword: string;
  newPassword: string;
  passwordConfirm: string;
  handleNewPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrentPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordConfirmChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInputs = ({
  currentPassword,
  newPassword,
  passwordConfirm,
  handleNewPasswordChange,
  onCurrentPasswordChange,
  onPasswordConfirmChange,
}: PasswordInputsProps) => {
  return (
    <>
      <InputForms>
        <Flex>
          <Text>현재 비밀번호</Text>
          <PasswordBox
            type="password"
            value={currentPassword}
            onChange={onCurrentPasswordChange}
          />
        </Flex>
        <Flex>
          <Text>새 비밀번호</Text>
          <PasswordBox
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </Flex>
        <Flex>
          <Text>새 비밀번호 확인</Text>
          <PasswordBox
            type="password"
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
          />
        </Flex>
      </InputForms>
    </>
  );
};

export default PasswordInputs;

const Text = styled.p`
  font-size: 15px;
`;
const InputForms = styled.div`
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PasswordBox = styled.input`
  font-size: 15px;
  background-color: #e9f5ff;
  border: none;
  border-radius: 10px;
  width: 200px;
  height: 20px;
  padding: 5px;
`;
