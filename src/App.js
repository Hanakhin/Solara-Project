import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/Main";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image:url('./img/test.png');
  background-size: cover;
`
function App() {
  return (
    <Page>
      <Main />
    </Page>
  );
}
export default App;
