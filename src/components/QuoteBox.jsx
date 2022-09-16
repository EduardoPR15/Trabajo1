import React, { useState } from 'react'
import quotes from './json/quotes.json';
export default function randomQuote() {
console.log(quotes.length);
const rQuote = arr => Math.floor(Math.random() * arr.length);
const firstPhrase = quotes[rQuote(quotes)]
const [RandomQuote, setRandomQuote] = useState(firstPhrase)
const getRandom= () =>{
    setRandomQuote(quotes[rQuote(quotes)])
}
return (
    <div>
        <h1>""{RandomQuote.quote}""</h1>
        <h3>--{RandomQuote.author}</h3>
        <button onClick={getRandom}> > </button>
    </div>
)
}
