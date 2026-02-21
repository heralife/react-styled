import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiArrowRight, HiShieldCheck, HiLightningBolt, HiCurrencyDollar, HiChartBar } from 'react-icons/hi'
import { Container, SectionTitle, SectionSubtitle, GradientText, Card, Button, fadeInUp, fadeIn } from '../styles/SharedStyles'

const HeroSection = styled.section`
  padding: 100px 0 80px;
  background: linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(26, 86, 219, 0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`

const HeroText = styled.div`
  flex: 1;
  animation: ${fadeInUp} 0.8s ease-out;
`

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #e8effc;
  color: #1a56db;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
`

const HeroTitle = styled.h1`
  font-size: 3.25rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`

const HeroDesc = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0 auto 40px;
  }
`

const HeroActions = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const HeroVisual = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`

const MockCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`

const MockBalance = styled.div`
  margin-bottom: 32px;

  span {
    font-size: 0.875rem;
    color: #94a3b8;
    display: block;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
  }
`

const MockGraph = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 120px;
  margin-bottom: 24px;
`

const MockBar = styled.div`
  flex: 1;
  background: ${props => props.$active
    ? 'linear-gradient(180deg, #1a56db, #0ea5e9)'
    : '#e2e8f0'};
  border-radius: 6px;
  height: ${props => props.$height}%;
  transition: all 0.3s ease;
`

const MockStats = styled.div`
  display: flex;
  gap: 16px;
`

const MockStat = styled.div`
  flex: 1;
  padding: 12px;
  background: #f8fafc;
  border-radius: 12px;
  text-align: center;

  span {
    font-size: 0.75rem;
    color: #94a3b8;
    display: block;
    margin-bottom: 4px;
  }

  strong {
    font-size: 1rem;
    color: ${props => props.$color || '#0f172a'};
  }
`

const FeaturesSection = styled.section`
  padding: 100px 0;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled(Card)`
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || '0s'} both;
`

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${props => props.$bg || '#e8effc'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.5rem;
  color: ${props => props.$color || '#1a56db'};
`

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
`

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.6;
`

const CTASection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
  text-align: center;
`

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

const CTADesc = styled.p`
  font-size: 1.125rem;
  color: #94a3b8;
  max-width: 500px;
  margin: 0 auto 40px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
`

export default function HomePage() {
  const features = [
    {
      icon: <HiLightningBolt />,
      title: '즉시 송금',
      desc: '실시간으로 누구에게나 빠르고 안전하게 송금할 수 있습니다.',
      bg: '#e8effc',
      color: '#1a56db',
      delay: '0.1s',
    },
    {
      icon: <HiShieldCheck />,
      title: '보안 인증',
      desc: '다중 인증과 암호화 기술로 자산을 안전하게 보호합니다.',
      bg: '#d1fae5',
      color: '#059669',
      delay: '0.2s',
    },
    {
      icon: <HiChartBar />,
      title: '투자 분석',
      desc: 'AI 기반 분석으로 최적의 투자 전략을 제안합니다.',
      bg: '#fef3c7',
      color: '#d97706',
      delay: '0.3s',
    },
    {
      icon: <HiCurrencyDollar />,
      title: '자산 관리',
      desc: '모든 자산을 한눈에 관리하고 목표를 달성하세요.',
      bg: '#ede9fe',
      color: '#7c3aed',
      delay: '0.4s',
    },
  ]

  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <HeroBadge>새로운 금융의 시작</HeroBadge>
              <HeroTitle>
                더 쉽고 안전한<br />
                <GradientText>스마트 금융</GradientText> 플랫폼
              </HeroTitle>
              <HeroDesc>
                한패스와 함께 간편한 송금, 스마트한 투자, 안전한 자산 관리를
                하나의 플랫폼에서 경험하세요.
              </HeroDesc>
              <HeroActions>
                <Link to="/login">
                  <Button $variant="primary" $size="lg">
                    무료로 시작하기 <HiArrowRight />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button $variant="outline" $size="lg">
                    서비스 둘러보기
                  </Button>
                </Link>
              </HeroActions>
            </HeroText>

            <HeroVisual>
              <MockCard>
                <MockBalance>
                  <span>총 자산</span>
                  <h3>₩12,450,000</h3>
                </MockBalance>
                <MockGraph>
                  {[45, 65, 40, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                    <MockBar key={i} $height={h} $active={i >= 7} />
                  ))}
                </MockGraph>
                <MockStats>
                  <MockStat $color="#059669">
                    <span>이번 달 수익</span>
                    <strong>+8.5%</strong>
                  </MockStat>
                  <MockStat $color="#1a56db">
                    <span>투자 자산</span>
                    <strong>₩5.2M</strong>
                  </MockStat>
                </MockStats>
              </MockCard>
            </HeroVisual>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>왜 <GradientText>한패스</GradientText>인가요?</SectionTitle>
          <SectionSubtitle>
            혁신적인 기술과 사용자 중심 설계로 최고의 금융 경험을 제공합니다.
          </SectionSubtitle>
          <FeaturesGrid>
            {features.map((f, i) => (
              <FeatureCard key={i} $delay={f.delay}>
                <FeatureIcon $bg={f.bg} $color={f.color}>
                  {f.icon}
                </FeatureIcon>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <CTASection>
        <Container>
          <CTATitle>지금 바로 시작하세요</CTATitle>
          <CTADesc>
            3분 안에 계정을 만들고 한패스의 모든 금융 서비스를 무료로 이용해보세요.
          </CTADesc>
          <Link to="/login">
            <Button $variant="primary" $size="lg">
              무료 계정 만들기 <HiArrowRight />
            </Button>
          </Link>
        </Container>
      </CTASection>
    </>
  )
}
