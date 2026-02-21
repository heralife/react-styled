import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi'
import { GradientText, fadeInUp } from '../styles/SharedStyles'

const LoginWrapper = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%);
  padding: 40px 24px;
`

const LoginCard = styled.div`
  width: 100%;
  max-width: 440px;
  background: white;
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 32px 24px;
  }
`

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 36px;
`

const LoginLogo = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.25rem;
  margin: 0 auto 20px;
`

const LoginTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
`

const LoginSubtitle = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InputGroup = styled.div`
  position: relative;
`

const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 8px;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputIcon = styled.span`
  position: absolute;
  left: 16px;
  color: #94a3b8;
  font-size: 1.125rem;
  display: flex;
`

const Input = styled.input`
  width: 100%;
  padding: 14px 16px 14px 48px;
  font-size: 0.9375rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  background: #f8fafc;

  &:focus {
    border-color: #1a56db;
    background: white;
    box-shadow: 0 0 0 4px rgba(26, 86, 219, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`

const TogglePassword = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 1.125rem;
  display: flex;
  padding: 0;

  &:hover {
    color: #64748b;
  }
`

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #475569;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    accent-color: #1a56db;
    cursor: pointer;
  }
`

const ForgotLink = styled.a`
  font-size: 0.875rem;
  color: #1a56db;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const SubmitBtn = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(26, 86, 219, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 4px 0;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }

  span {
    font-size: 0.8125rem;
    color: #94a3b8;
  }
`

const SocialLogin = styled.div`
  display: flex;
  gap: 12px;
`

const SocialBtn = styled.button`
  flex: 1;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: #1a56db;
    background: #f8fafc;
  }
`

const SignupText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 8px;

  a {
    color: #1a56db;
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <LoginWrapper>
      <LoginCard>
        <LoginHeader>
          <LoginLogo>H</LoginLogo>
          <LoginTitle><GradientText>한패스</GradientText> 로그인</LoginTitle>
          <LoginSubtitle>계정에 로그인하여 서비스를 이용하세요</LoginSubtitle>
        </LoginHeader>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel>이메일</InputLabel>
            <InputWrapper>
              <InputIcon><HiMail /></InputIcon>
              <Input type="email" placeholder="name@example.com" />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel>비밀번호</InputLabel>
            <InputWrapper>
              <InputIcon><HiLockClosed /></InputIcon>
              <Input
                type={showPw ? 'text' : 'password'}
                placeholder="비밀번호를 입력하세요"
              />
              <TogglePassword type="button" onClick={() => setShowPw(!showPw)}>
                {showPw ? <HiEyeOff /> : <HiEye />}
              </TogglePassword>
            </InputWrapper>
          </InputGroup>

          <FormOptions>
            <RememberMe>
              <input type="checkbox" />
              로그인 유지
            </RememberMe>
            <ForgotLink href="#">비밀번호 찾기</ForgotLink>
          </FormOptions>

          <SubmitBtn type="submit">로그인</SubmitBtn>

          <Divider><span>또는</span></Divider>

          <SocialLogin>
            <SocialBtn type="button">카카오</SocialBtn>
            <SocialBtn type="button">네이버</SocialBtn>
            <SocialBtn type="button">Google</SocialBtn>
          </SocialLogin>

          <SignupText>
            아직 계정이 없으신가요? <Link to="/">회원가입</Link>
          </SignupText>
        </Form>
      </LoginCard>
    </LoginWrapper>
  )
}
