import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
    return (
        <div data-section id='education' className='mb-16 md:mb-24 lg:mb-40'>
            <h2 className='mb-8 visible lg:invisible font-xl tracking-widest'>Education</h2>
            {props.data.map(function(object, index){
                return <EducationItem
                    key={`${object.subject}+${object.startDate}`}  
                    subject={object.subject}
                    degree={object.degree}
                    university={object.university}
                    href={object.href}
                    startDate={object.startDate} 
                    endDate={object.endDate ? object.endDate : ''} 
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Education