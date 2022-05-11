import React from 'react'
import './portfolio.css';
import { useState } from 'react'
import Intro from './Components/Intro'
import KnowMore from './Components/KnowMore';

export default function Portfolio() {
    const [isKnowMore, setIsKnowMore] = useState(false)
    const [portfolioData, setPortfolioData] = useState({})
    let isFetched = false
    // const BASE_URL = "https://aharnish-api.herokuapp.com"
    const BASE_URL = "https://localhost:8094"
    const FETCH_URL = BASE_URL + "/portfolio/getPortfolioData"
    const URL = FETCH_URL
    const OPTIONS = {
        method: "GET"
    }
    console.log("isFetched : ", isFetched)
    fetch(URL, OPTIONS)
        .then(res => res.json())
        .then(res => {
            console.log("fetched request")
            setPortfolioData(res)
            console.log(res)
            isFetched = true
        })
        .catch(err => {
            console.log("error occured", err);
        })


    const switchToKnowMore = (e) => {
        e.preventDefault()
        setIsKnowMore(true)
    }
    return (
        <div className="App">
            {
                isKnowMore ? <KnowMore /> : <Intro switchToKnowMore={switchToKnowMore} />
            }
        </div>
    )
}
