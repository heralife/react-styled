import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const FooterWrapper = styled.footer`
  background: #0f172a;
  color: #94a3b8;
  padding: 80px 0 32px;
`

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FooterBrand = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #1a56db, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 24px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 1.125rem;
    transition: all 0.3s ease;

    &:hover {
      background: #1a56db;
      color: white;
      transform: translateY(-2px);
    }
  }
`

const FooterColumn = styled.div`
  h4 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  a {
    font-size: 0.875rem;
    color: #94a3b8;
    transition: color 0.2s ease;

    &:hover {
      color: #0ea5e9;
    }
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  margin-bottom: 12px;

  svg {
    color: #0ea5e9;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #1e293b;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: #94a3b8;
    transition: color 0.2s ease;
    &:hover { color: #0ea5e9; }
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <FooterBrand>
            <h3>한패스</h3>
            <p>
              한패스는 혁신적인 핀테크 기술로 개인과 기업의 금융 생활을
              더 간편하고 안전하게 만들어갑니다.
            </p>
            <SocialLinks>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </SocialLinks>
          </FooterBrand>

          <FooterColumn>
            <h4>서비스</h4>
            <ul>
              <li><Link to="/services">간편 송금</Link></li>
              <li><Link to="/services">자산 관리</Link></li>
              <li><Link to="/services">투자</Link></li>
              <li><Link to="/services">대출</Link></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>회사</h4>
            <ul>
              <li><a href="#">소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">블로그</a></li>
              <li><a href="#">보도자료</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>고객 지원</h4>
            <ContactItem>
              <HiPhone />
              <span>1588-0000</span>
            </ContactItem>
            <ContactItem>
              <HiMail />
              <span>support@hanpass.co.kr</span>
            </ContactItem>
            <p style={{ fontSize: '0.8125rem', marginTop: '8px' }}>
              평일 09:00 - 18:00
            </p>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <span>&copy; 2026 한패스(HanPass). All rights reserved.</span>
          <BottomLinks>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">보안정책</a>
          </BottomLinks>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  )
}
