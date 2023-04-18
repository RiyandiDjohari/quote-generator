import { useEffect, useState } from 'react';
import './style.css';
import Quote from './Components/Quote';
import Button from './Components/Button';
import Loader from './Components/Loader';

const getRandomQuote = ( quotes ) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setQuote(data[0]);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [])

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes))

  }

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
        ) : (
        <>
          <h1 className='title'>Quote Generator</h1>
          <Quote quote={quote} isLongQuote={quote?.text.length > 100}/>
          <Button text="New Quote" handleClick={getNewQuote}/>
        </>
      )}
    </div>
  );
}

export default App;
