import { Container } from "./components/styles/Container.styled";
import { Input } from "./components/styles/Input.styled";

function App() {
  return (
    <div>
      <Container>
        <h1>Hello World</h1>
        <Input placeholder="input" />
      </Container>
    </div>
  );
}

export default App;
