import React from 'react'
import './sidebarOption.css'

function SidebarOption({ title = "test", Icon }) {
    return (
        <div className="sidebarOption">
            {/* <p>{ Icon }</p> */}
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ? <h4>{ title }</h4> : <p>{ title }</p>}
        </div>
    )
}

export default SidebarOption;
