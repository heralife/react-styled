import styled from 'styled-components'
import { HiTrendingUp, HiTrendingDown, HiCash, HiCreditCard, HiSwitchHorizontal, HiDotsVertical } from 'react-icons/hi'
import { Container, GradientText, Card, fadeInUp, fadeIn } from '../styles/SharedStyles'

const DashboardWrapper = styled.div`
  padding: 40px 0 80px;
  background: #f8fafc;
  min-height: calc(100vh - 72px);
`

const DashboardHeader = styled.div`
  margin-bottom: 32px;
  animation: ${fadeInUp} 0.6s ease-out;
`

const Greeting = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
`

const DateText = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled(Card)`
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || '0s'} both;
`

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const StatIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${props => props.$bg || '#e8effc'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${props => props.$color || '#1a56db'};
`

const StatChange = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${props => props.$positive ? '#059669' : '#dc2626'};
  display: flex;
  align-items: center;
  gap: 2px;
`

const StatValue = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 4px;
`

const StatLabel = styled.p`
  font-size: 0.8125rem;
  color: #94a3b8;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TransactionCard = styled(Card)`
  animation: ${fadeIn} 0.8s ease-out 0.3s both;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
  }
`

const ViewAllBtn = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #1a56db;
  font-weight: 600;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
`

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`

const TxLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const TxIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${props => props.$bg || '#f1f5f9'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: ${props => props.$color || '#475569'};
`

const TxInfo = styled.div`
  h4 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 2px;
  }

  span {
    font-size: 0.8125rem;
    color: #94a3b8;
  }
`

const TxAmount = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${props => props.$positive ? '#059669' : '#0f172a'};
`

const QuickActions = styled(Card)`
  animation: ${fadeIn} 0.8s ease-out 0.5s both;
`

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`

const ActionBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 12px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: #1a56db;
    background: #e8effc;
  }

  svg {
    font-size: 1.5rem;
    color: #1a56db;
  }

  span {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #334155;
  }
`

export default function DashboardPage() {
  const stats = [
    { icon: <HiCash />, label: '총 자산', value: '₩12,450,000', change: '+8.5%', positive: true, bg: '#e8effc', color: '#1a56db', delay: '0.1s' },
    { icon: <HiTrendingUp />, label: '이번 달 수익', value: '₩980,000', change: '+12.3%', positive: true, bg: '#d1fae5', color: '#059669', delay: '0.2s' },
    { icon: <HiCreditCard />, label: '이번 달 지출', value: '₩2,340,000', change: '-3.2%', positive: false, bg: '#fee2e2', color: '#dc2626', delay: '0.3s' },
    { icon: <HiSwitchHorizontal />, label: '송금 횟수', value: '24건', change: '+5건', positive: true, bg: '#fef3c7', color: '#d97706', delay: '0.4s' },
  ]

  const transactions = [
    { name: '카카오페이 송금', date: '오늘 14:32', amount: '-₩50,000', icon: <HiSwitchHorizontal />, bg: '#fef3c7', color: '#d97706' },
    { name: '급여 입금', date: '오늘 09:00', amount: '+₩3,200,000', positive: true, icon: <HiCash />, bg: '#d1fae5', color: '#059669' },
    { name: '넷플릭스 결제', date: '어제 22:15', amount: '-₩17,000', icon: <HiCreditCard />, bg: '#e8effc', color: '#1a56db' },
    { name: '투자 수익금', date: '어제 18:00', amount: '+₩125,000', positive: true, icon: <HiTrendingUp />, bg: '#d1fae5', color: '#059669' },
    { name: '스타벅스 결제', date: '2일 전', amount: '-₩6,500', icon: <HiCreditCard />, bg: '#e8effc', color: '#1a56db' },
  ]

  const today = new Date()
  const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`

  return (
    <DashboardWrapper>
      <Container>
        <DashboardHeader>
          <Greeting>안녕하세요, <GradientText>홍길동</GradientText>님</Greeting>
          <DateText>{dateStr}</DateText>
        </DashboardHeader>

        <StatsGrid>
          {stats.map((s, i) => (
            <StatCard key={i} $delay={s.delay}>
              <StatHeader>
                <StatIcon $bg={s.bg} $color={s.color}>{s.icon}</StatIcon>
                <StatChange $positive={s.positive}>
                  {s.positive ? <HiTrendingUp /> : <HiTrendingDown />}
                  {s.change}
                </StatChange>
              </StatHeader>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <TransactionCard>
            <CardHeader>
              <h3>최근 거래 내역</h3>
              <ViewAllBtn>전체 보기</ViewAllBtn>
            </CardHeader>
            <TransactionList>
              {transactions.map((tx, i) => (
                <TransactionItem key={i}>
                  <TxLeft>
                    <TxIcon $bg={tx.bg} $color={tx.color}>{tx.icon}</TxIcon>
                    <TxInfo>
                      <h4>{tx.name}</h4>
                      <span>{tx.date}</span>
                    </TxInfo>
                  </TxLeft>
                  <TxAmount $positive={tx.positive}>{tx.amount}</TxAmount>
                </TransactionItem>
              ))}
            </TransactionList>
          </TransactionCard>

          <QuickActions>
            <CardHeader>
              <h3>빠른 메뉴</h3>
              <HiDotsVertical style={{ color: '#94a3b8', cursor: 'pointer' }} />
            </CardHeader>
            <ActionGrid>
              <ActionBtn>
                <HiSwitchHorizontal />
                <span>송금하기</span>
              </ActionBtn>
              <ActionBtn>
                <HiCreditCard />
                <span>카드 관리</span>
              </ActionBtn>
              <ActionBtn>
                <HiTrendingUp />
                <span>투자하기</span>
              </ActionBtn>
              <ActionBtn>
                <HiCash />
                <span>대출 조회</span>
              </ActionBtn>
            </ActionGrid>
          </QuickActions>
        </ContentGrid>
      </Container>
    </DashboardWrapper>
  )
}
