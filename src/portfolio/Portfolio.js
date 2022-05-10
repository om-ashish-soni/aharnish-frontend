import React from 'react'
import './portfolio.css';
import { useState } from 'react'
import Intro from './Components/Intro'
import KnowMore from './Components/KnowMore';

export default function Portfolio() {
    const [isKnowMore, setIsKnowMore] = useState(false)
    const switchToKnowMore = (e) => {
        e.preventDefault()
        setIsKnowMore(true)
    }
    return (
        <div className="App">
            {
                isKnowMore ?<KnowMore /> :<Intro switchToKnowMore={switchToKnowMore} />
            }
        </div>
    )
}
