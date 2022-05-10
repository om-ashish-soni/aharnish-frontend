import React from 'react'
import { Container } from 'react-bootstrap'
export default function Intro({switchToKnowMore}) {
    return (
        <div>
            <Container>
                <div >
                    <div>
                        <div >Hi 👋, I'm <span>Om Ashish Soni</span></div>
                        <div > Competitive Programmer & Software Developer 😀</div>
                        <div><button onClick={switchToKnowMore}>know more</button></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
