import React from 'react'
import ParallaxJSXWrapper from './ParallaxJSXWrapper'
import "../App.css"
import MananFormal from "../images/MananFormal.png"

const Landing = () => {
    const WrappedGreeting = ParallaxJSXWrapper(<div className="greeting">
        Hi,
        <br />
        I'm
        <br />
        <div className='name'>
            Manan.
        </div>
    </div>, 0.05)


    const WrappedMananFormal = ParallaxJSXWrapper(<img className="MananFormal" src={MananFormal} alt="MananFormal" />, .04)
    return (
        <div className='landing font-link'>
            <WrappedGreeting />
            <WrappedMananFormal/>
        </div>
    )
}

export default Landing
