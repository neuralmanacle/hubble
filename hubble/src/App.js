import { ThemeProvider } from "styled-components";
import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import GlobalStyle from './components/styles/Global';
import content from './content'
import Footer from './components/Footer'

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: '768px',
}
function App() {
  return (
    <ThemeProvider theme = { theme }>
      <>
      <GlobalStyle />
      <Header />
        <Container>
          {
            content.map((item,index) => (
              <Card key={index} item={item} />
            ))
          }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
