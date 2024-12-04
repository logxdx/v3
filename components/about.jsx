import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 md:mb-24 lg:mb-40 group'>
            <h2 className='mb-8 visible lg:invisible font-xl tracking-widest'>About</h2>
            <div className='text-base lg:text-lg lg:font-medium brightness-75'>
                {props.data.about.map(function(paragraph, index){
                    return <div className='mb-4 brightness-75 md:max-w-md lg:max-w-md text-justify'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About