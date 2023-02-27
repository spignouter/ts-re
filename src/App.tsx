import { Apartments } from 'components/Apartments'
import { Company } from 'components/Company'
import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { Wrapper } from 'components/Wrapper'
import { Location } from 'components/Location'

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Company />
        <Wrapper>
          <Location />
          <Apartments />
        </Wrapper>
      </Main>
    </Container>
  )
}

export default App
