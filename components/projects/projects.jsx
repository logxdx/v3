import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16 md:mb-24 lg:mb-40'>
            <h2 className='mb-8 visible lg:invisible font-xl tracking-widest uppercase'>Projects</h2>
            <div className='grid grid-cols-1 gap-4'>
                {props.data.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        stars={object.stars}
                        lib={object.framework}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects