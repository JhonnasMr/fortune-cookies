import React, {useState} from 'react'
import data from '../data/phrases.json';
import '../components/phraseCard.css';
import ButtonChangePhrase from './buttonChangePhrase';

function PhraseCard( {setBgImage} ) {

    const [phrase] = useState(data);
    const [currentPhrase, setCurrentPhrase] = useState(false);

    const changePhrase = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentPhrase({phrase : phrase[randomIndex].phrase, author : phrase[randomIndex].author});
        setTimeout(() => {
            setCurrentPhrase(false);
            setBgImage(Math.floor(Math.random()*5))
        },5000);
    }
  return (
    <>
        <div className='container__breake-cookies'>
            <svg className={`cookie-right ${currentPhrase && 'breake-right'}`} viewBox="0 0 169 199"  xmlns="http://www.w3.org/2000/svg">
            <g id="cookie_2">
                <path id="Vector 1" d="M147.097 197.886C-10.1032 197.086 -9.73652 66.2192 10.0968 0.885901C106.897 -4.3141 133.763 46.0526 135.097 71.8859L166.5 95.5L128.5 110L156 123.5L128.5 135.5L147.097 154.5L107 169.5L147.097 197.886Z" fill="#FFC965" stroke="#FFC965"/>
                <path id="Vector 3" d="M132.836 186.45C13.6362 173.65 9.16949 68.4496 21.8362 17.4496C69.8362 0.649556 115.836 35.4496 132.836 54.9496L137.336 71.9496L167.836 94.9496L129.836 109.95L157.336 122.95L129.836 135.95L148.336 154.95L109.836 169.95L132.836 186.45Z" fill="#E1CDA0" stroke="#E1CDA0"/>
            </g>
            </svg>
            <div className={`paper-animation ${currentPhrase ? 'container__phrase' : 'd-none'}`}>
                <p className='phrase'>{currentPhrase.phrase}</p>
                <p className='author'>{currentPhrase.author}</p>
            </div>
            <svg className={`cookie-left ${currentPhrase && 'breake-left'}`} viewBox="0 0 158 199"  xmlns="http://www.w3.org/2000/svg">
                <g id="cookie_1">
                    <path id="Vector 2" d="M40.1538 198C165.92 198 164.036 61.509 151.318 1.37264C60.1257 -3.82702 31.0472 46.6767 29.7911 72.5083L58.9953 96.0068L21.7835 109.506L47.6904 123.491L21.7835 135.004L40.1539 155.003L2 169.502L40.1538 198Z" fill="#FFC965" stroke="#FFC965"/>
                    <path id="Vector 4" d="M26.5 187.5C143.7 177.1 147 70.8333 134 19C87.2 6.2 45.1667 41.3333 30 60.5L26.5 73.5L58 96L19.5 109.5L46.5 123.5L19.5 135.5L38 154.5L0 169.5L26.5 187.5Z" fill="#E1CDA0"/>
                </g>
            </svg>
        </div>
        <ButtonChangePhrase changePhrase={changePhrase}/>
    </>
  )
}

export default PhraseCard