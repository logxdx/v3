import React from "react";

function NavItem(props) {
    return (
        <a href={props.href} className='flex flex-row py-3 items-center group max-w-max'>
            <div className={props.active ? 'mr-4 text-on-background transition-all group-hover:text-primary-300' : 'mr-4 text-surface-600 transition-all group-hover:text-primary-300'}>{props.num}</div>
            <div className={props.active ? 'w-8 h-0.5 bg-on-background mr-4 transition-all group-hover:w-8 group-hover:bg-primary-300' : 'w-0 h-0.5 bg-surface-600 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-300'}/>
            <div className={props.active ? 'transition-all text-on-background group-hover:text-primary-300' : 'transition-all text-surface-600 group-hover:text-primary-300'}>{props.name}</div>
        </a>
    )
}

export default NavItem