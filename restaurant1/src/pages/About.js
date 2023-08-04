import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a eum dignissimos dolor blanditiis distinctio eaque sint commodi, animi, omnis error repellendus eos tempore consequatur magnam consequuntur tenetur nostrum praesentium?</p>
            
        </div>
    </div>
  )
}

export default About