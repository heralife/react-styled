import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiArrowRight, HiSwitchHorizontal, HiChartBar, HiCreditCard, HiShieldCheck, HiCash, HiGlobe } from 'react-icons/hi'
import { Container, SectionTitle, SectionSubtitle, GradientText, Card, Button, fadeInUp } from '../styles/SharedStyles'

const ServicesHero = styled.section`
  padding: 80px 0 60px;
  background: linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%);
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroDesc = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
`

const ServicesSection = styled.section`
  padding: 80px 0;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled(Card)`
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || '0s'} both;
  display: flex;
  flex-direction: column;
`

const ServiceIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: ${props => props.$bg || '#e8effc'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.$color || '#1a56db'};
  margin-bottom: 20px;
`

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
`

const ServiceDesc = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
`

const ServiceFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`

const ServiceFeature = styled.li`
  font-size: 0.875rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    color: #059669;
    font-weight: 700;
    font-size: 0.75rem;
  }
`

const ServiceLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #1a56db;
    transition: gap 0.2s ease;

    &:hover {
      gap: 10px;
    }
  }
`

const PricingSection = styled.section`
  padding: 80px 0;
  background: #f8fafc;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`

const PricingCard = styled(Card)`
  text-align: center;
  position: relative;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || '0s'} both;

  ${props => props.$featured && `
    border: 2px solid #1a56db;
    transform: scale(1.05);

    &:hover {
      transform: scale(1.05) translateY(-4px);
    }
  `}
`

const PricingBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 16px;
  background: linear-gradient(135deg, #1a56db, #0ea5e9);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 100px;
`

const PlanName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 8px;
`

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 4px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #94a3b8;
  }
`

const PlanDesc = styled.p`
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 24px;
`

const PlanFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  text-align: left;
`

const PlanFeature = styled.li`
  font-size: 0.875rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '✓';
    color: #059669;
    font-weight: 700;
  }
`

export default function ServicesPage() {
  const services = [
    {
      icon: <HiSwitchHorizontal />,
      title: '간편 송금',
      desc: '계좌번호 없이 전화번호만으로 실시간 송금. 수수료 걱정 없는 무료 송금 서비스.',
      features: ['실시간 즉시 이체', '월 100회 무료 송금', '자동 송금 예약'],
      bg: '#e8effc', color: '#1a56db', delay: '0.1s',
    },
    {
      icon: <HiChartBar />,
      title: '자산 관리',
      desc: '흩어진 자산을 한눈에. AI가 분석하는 맞춤형 자산 관리 리포트를 받아보세요.',
      features: ['전 금융사 자산 연동', 'AI 맞춤 리포트', '목표 기반 관리'],
      bg: '#fef3c7', color: '#d97706', delay: '0.2s',
    },
    {
      icon: <HiCreditCard />,
      title: '스마트 카드',
      desc: '소비 패턴을 분석하여 최적의 혜택을 자동으로 적용하는 스마트 카드.',
      features: ['자동 최적 혜택 적용', '실시간 소비 알림', '카드별 실적 관리'],
      bg: '#ede9fe', color: '#7c3aed', delay: '0.3s',
    },
    {
      icon: <HiShieldCheck />,
      title: '보험 서비스',
      desc: '내게 딱 맞는 보험을 AI가 추천. 간편한 보험 가입과 관리를 경험하세요.',
      features: ['AI 맞춤 보험 추천', '간편 보험금 청구', '보장 분석 리포트'],
      bg: '#d1fae5', color: '#059669', delay: '0.4s',
    },
    {
      icon: <HiCash />,
      title: '대출 비교',
      desc: '모든 금융사의 대출 상품을 한번에 비교하고 최저 금리를 찾아드립니다.',
      features: ['실시간 금리 비교', '맞춤 대출 추천', '간편 대출 신청'],
      bg: '#fee2e2', color: '#dc2626', delay: '0.5s',
    },
    {
      icon: <HiGlobe />,
      title: '해외 송금',
      desc: '은행보다 저렴한 수수료, 빠른 해외 송금 서비스를 이용하세요.',
      features: ['최저 환율 수수료', '24시간 실시간 송금', '20개국 지원'],
      bg: '#e0f2fe', color: '#0284c7', delay: '0.6s',
    },
  ]

  const plans = [
    {
      name: 'Basic',
      price: '무료',
      priceUnit: '',
      desc: '개인 사용자를 위한 기본 플랜',
      features: ['월 30회 무료 송금', '기본 자산 리포트', '1개 계좌 연동', '이메일 고객 지원'],
      delay: '0.1s',
    },
    {
      name: 'Pro',
      price: '₩9,900',
      priceUnit: '/월',
      desc: '더 많은 혜택이 필요한 분을 위한',
      features: ['무제한 무료 송금', 'AI 맞춤 리포트', '전 금융사 연동', '우선 고객 지원', '스마트 카드 발급'],
      featured: true,
      delay: '0.2s',
    },
    {
      name: 'Business',
      price: '₩29,900',
      priceUnit: '/월',
      desc: '기업 고객을 위한 프리미엄',
      features: ['Pro 기능 전체 포함', '팀 계정 관리', '전용 API 제공', '전담 매니저 배정', '맞춤 보고서'],
      delay: '0.3s',
    },
  ]

  return (
    <>
      <ServicesHero>
        <Container>
          <HeroTitle>
            <GradientText>한패스</GradientText>의 서비스
          </HeroTitle>
          <HeroDesc>
            금융의 모든 것을 하나의 플랫폼에서. 간편하고 안전한 서비스를 만나보세요.
          </HeroDesc>
        </Container>
      </ServicesHero>

      <ServicesSection>
        <Container>
          <SectionTitle>주요 서비스</SectionTitle>
          <SectionSubtitle>
            한패스가 제공하는 다양한 금융 서비스를 확인하세요.
          </SectionSubtitle>
          <ServicesGrid>
            {services.map((s, i) => (
              <ServiceCard key={i} $delay={s.delay}>
                <ServiceIcon $bg={s.bg} $color={s.color}>{s.icon}</ServiceIcon>
                <ServiceTitle>{s.title}</ServiceTitle>
                <ServiceDesc>{s.desc}</ServiceDesc>
                <ServiceFeatures>
                  {s.features.map((f, j) => (
                    <ServiceFeature key={j}>{f}</ServiceFeature>
                  ))}
                </ServiceFeatures>
                <ServiceLink>
                  <Link to="/login">자세히 보기 <HiArrowRight /></Link>
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <PricingSection>
        <Container>
          <SectionTitle>합리적인 요금제</SectionTitle>
          <SectionSubtitle>
            나에게 맞는 플랜을 선택하고 한패스의 모든 서비스를 이용하세요.
          </SectionSubtitle>
          <PricingGrid>
            {plans.map((p, i) => (
              <PricingCard key={i} $featured={p.featured} $delay={p.delay}>
                {p.featured && <PricingBadge>인기</PricingBadge>}
                <PlanName>{p.name}</PlanName>
                <PlanPrice>
                  {p.price}<span>{p.priceUnit}</span>
                </PlanPrice>
                <PlanDesc>{p.desc}</PlanDesc>
                <PlanFeatures>
                  {p.features.map((f, j) => (
                    <PlanFeature key={j}>{f}</PlanFeature>
                  ))}
                </PlanFeatures>
                <Link to="/login">
                  <Button
                    $variant={p.featured ? 'primary' : 'outline'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {p.featured ? '시작하기' : '선택하기'}
                  </Button>
                </Link>
              </PricingCard>
            ))}
          </PricingGrid>
        </Container>
      </PricingSection>
    </>
  )
}
