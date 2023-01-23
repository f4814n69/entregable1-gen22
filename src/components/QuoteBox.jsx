import React from 'react';
import ButtonBox from './ButtonBox';

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {


  return (
    <article style={{ color: colorRandom }} className='box'>
      <i className='bx bxs-quote-alt-left' box_icon ></i>
      <p className='box_quote'>{quoteRandom.quote}</p>
      <h1 className='box_author'>{quoteRandom.author}</h1>
      <ButtonBox
        colorRandom={colorRandom}
        handleClick={handleClick}
      />
    </article>
  );
};

export default QuoteBox;