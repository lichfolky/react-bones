
import styled from 'styled-components/macro';
import GlobalStyles from './global-styles';

import cat from './img/cat-300.jpg';
import art from './img/wall-art.jpg';

import BasicButton from './components/buttons/basic-button';
import Quote from './components/quote';
import FrequentlyAskedQuestion from './components/frequenty-asked-question';
import LoginForm from './components/login-form';
import ContactCard from './components/contact-card';
import WallArt from './components/wall-art';
import ButtonTable from './components/button-table';
import ButtonGroup from './components/buttons/button-group';
import { Breadcrumbs, Crumb } from './components/breadcrumbs';


function App() {
  return (
    <div className="App">
      <Wrapper>
        <BasicButton color='slateblue' onClick={(event) => {
          event.preventDefault();
          alert('click!');
        }} >Click me</BasicButton>
        <Quote by='Artax' source='#' children='Bable bala ble cle' />
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
        <WallArtWrapper>
          <WallArt
            src={art}
            alt="A hallway with rainbow-colored lights"
            caption="Photo by Efe Kurnaz"
            width={250}
          />
        </WallArtWrapper>
        <ButtonGroup />
        <Breadcrumbs>
          <Crumb href="/">Home</Crumb>
          <Crumb href="/living">Living Room</Crumb>
          <Crumb href="/living/couch">Couches</Crumb>
          <Crumb href="/living/couch/sectional" isCurrentPage>
            Sectionals
          </Crumb>
        </Breadcrumbs>
        <ButtonTable />
      </Wrapper>
      <GlobalStyles />
    </div>
  );
}

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 3rem;
 `;

const ContactCardWrapper = styled.main`
    display: grid;
    grid-template-columns: auto;
    justify-content:center;
    padding: 5rem 0;
    width: 100%;
    background: slateblue;
`;

const WallArtWrapper = styled.main`
    display: grid;
    grid-template-columns: auto;
    justify-content:center;
    padding: 5rem 0;
    width: 100%;
    background: pink;
`;


export default App;
