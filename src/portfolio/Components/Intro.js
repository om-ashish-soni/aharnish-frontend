import React from 'react'
import './intro.css'
import { Container ,Button} from 'react-bootstrap'
export default function Intro({ switchToKnowMore }) {
    return (
        <div className='intro'>
            <Container>
                <div >
                    <div >
                        <div className="typewriter">
                            Hi 👋, I'm <span>Om Ashish Soni</span>  
                        </div>
                        <br/>
                        <li className='lifront'>Competitive Programmer</li>
                        <br/>
                        <li className='lifront'>Software Developer 😀</li>
                        <br/>
                        
                    </div>
                    <Button variant="primary" className="m-3" onClick={switchToKnowMore}>know more</Button>
                </div>
            </Container >
        </div >
    )
}
