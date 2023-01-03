
import styled from 'styled-components/macro';
import Quote from './components/quote';
import FrequentlyAskedQuestion from './components/frequenty-asked-question';
import LoginForm from './components/login-form';
import ContactCard from './components/contact-card';
import cat from './img/cat-300.jpg';

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
        <ContactCardWrapper>
          <ContactCard
            avatarSrc={cat}
            name="Mittens"
            email="meow@gmail.com"
          />
        </ContactCardWrapper>
      </Wrapper>

    </div>
  );
}

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
`;

const ContactCardWrapper = styled.main`
    display: flex;
    padding: 5rem 0;
    width: 100%;
    background: slateblue;
    align-items: center;
`;

export default App;
