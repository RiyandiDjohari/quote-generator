import React from 'react'

const Quote = ({quote, isLongQuote}) => {
  console.log('isLong Quote', isLongQuote)
  return (
    <section className='quote-container'>
      <h3 className={`quote-text ${isLongQuote ? "long-quote" : ""}`}>
        <span>"</span>
          {quote?.text}
        <span>"</span><i class="fas fa-pencil-alt"></i>
      </h3>
      
      <i className='quote-author'>- {quote?.author}</i>
    </section>
  )
}

export default Quote