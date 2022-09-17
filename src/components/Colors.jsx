import React from 'react'


export default function Colors() {
    
  return (
    <div>Colors</div>
  )
}
import React, { useState } from 'react'
import quotes from './json/quotes.json';

export default function randomQuote() {
const rQuote = arr => Math.floor(Math.random() * arr.length);
const firstPhrase = quotes[rQuote(quotes)]
const [RandomQuote, setRandomQuote] = useState(firstPhrase)
console.log(RandomColors);
const getRandom= () =>{
    setRandomQuote(quotes[rQuote(quotes)])
}

return (
    <div className='caja1 ' style={{borderColor:'#31E1F7', color: '#31E1F7'}}>
        <h1>""{RandomQuote.quote}""</h1>
        <h3>--{RandomQuote.author}</h3>
            <div className="button1"> 
                <button onClick={getRandom}> > </button>
            </div>
            <Button RandomColors={RandomColors}/>
    </div>
)
}