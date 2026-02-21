import styled, { keyframes } from 'styled-components'

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
`

export const GradientText = styled.span`
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #1a56db;
  }
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${props => props.$size === 'lg' ? '16px 32px' : '12px 24px'};
  font-size: ${props => props.$size === 'lg' ? '1.125rem' : '0.9375rem'};
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  ${props => props.$variant === 'primary' && `
    background: linear-gradient(135deg, #1a56db, #0ea5e9);
    color: white;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(26, 86, 219, 0.35);
    }
  `}

  ${props => props.$variant === 'outline' && `
    background: transparent;
    color: #1a56db;
    border: 2px solid #1a56db;
    &:hover {
      background: #1a56db;
      color: white;
      transform: translateY(-2px);
    }
  `}

  ${props => props.$variant === 'ghost' && `
    background: transparent;
    color: #64748b;
    &:hover {
      background: #f1f5f9;
      color: #1a56db;
    }
  `}
`
