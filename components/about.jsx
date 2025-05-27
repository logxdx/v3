import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-48 md:mb-48 lg:mb-80 group lg:mt-12'>
            <h2 className='mb-8 visible lg:invisible font-xl tracking-widest uppercase'>About</h2>
            <div className='text-base lg:font-medium'>
                {props.data.about.map(function(paragraph, index){
                    return <div key={"paragraph_" + String(index)} className='mb-4 md:max-w-md lg:max-w-xl'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About