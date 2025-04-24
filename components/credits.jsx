import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-40 ml-4 lg:max-w-md'>
            <div className='text-surface-500'>
                <div className='mb-4'>
                    This website was built using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-300 brightness-75 hover:brightness-100">Next.js</a> and 
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-300 brightness-75 hover:brightness-100"> Tailwind CSS</a>.
                    
                </div>
                <div className='flex flex-row justify-between'>
                    <span>{props.data.name} | {new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
    )
}

export default Credits