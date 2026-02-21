import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { HiMenu, HiX } from 'react-icons/hi'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;

  span {
    background: linear-gradient(135deg, #1a56db, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1rem;
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: ${props => props.$open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    padding: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e2e8f0;
  }
`

const NavLink = styled(Link)`
  padding: 8px 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${props => props.$active ? '#1a56db' : '#475569'};
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #1a56db;
    background: #e8effc;
  }

  ${props => props.$active && `
    background: #e8effc;
  `}
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`

const LoginBtn = styled(Link)`
  padding: 8px 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #1a56db;
    background: #f1f5f9;
  }
`

const SignUpBtn = styled(Link)`
  padding: 10px 24px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(26, 86, 219, 0.3);
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #334155;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: block;
  }
`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/services', label: '서비스' },
    { path: '/dashboard', label: '대시보드' },
  ]

  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">
          <LogoIcon>H</LogoIcon>
          <span>한패스</span>
        </Logo>

        <NavLinks $open={menuOpen}>
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                $active={location.pathname === item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>

        <NavActions>
          <LoginBtn to="/login">로그인</LoginBtn>
          <SignUpBtn to="/login">시작하기</SignUpBtn>
        </NavActions>

        <MobileMenuBtn onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </MobileMenuBtn>
      </Nav>
    </HeaderWrapper>
  )
}
