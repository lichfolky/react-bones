
import styled from 'styled-components/macro';
import Quote from './components/quote';
import FrequentlyAskedQuestion from './components/frequenty-asked-question';
import LoginForm from './components/login-form';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Quote by='Artax' source='#' children='Bable bala ble cle'></Quote>
        <FrequentlyAskedQuestion
          question="What does “CSS” stand for?"
          answer="Cool Styling Strategy"
        />
        <LoginForm
          handleSubmit={(event) => {
            event.preventDefault();
            alert('Submitted!');
          }}
        />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
    display: grid;
    gap: 1rem;
`;
export default App;
