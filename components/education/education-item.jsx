import React from "react";

function EducationItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="group flex flex-row mb-6 p-5 transition-all bg-background hover:bg-surface-200 rounded-xl">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <div className='font-medium transition-all'>{props.subject} ({props.degree})</div>
                <div className='text-primary-600 mb-2'>{props.university}</div>
                <div className='text-surface-600'>
                {props.description.map(function(paragraph, index){
                    return <div>{paragraph}</div>
                })}
            </div>
            </div>
        </a>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default EducationItem