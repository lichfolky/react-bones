import './App.css';
import Quote from './components/quote';
import FrequentlyAskedQuestion from './components/frequenty-asked-question';

function App() {
  return (
    <div className="App">
        <Quote by='Artax' source='#' children='Bable bala ble cle'></Quote>
        <FrequentlyAskedQuestion
      question="What does “CSS” stand for?"
      answer="Cool Styling Strategy"
    />
    </div>
  );
}

export default App;
