import React from 'react'
import Body from './Body'
import Footer from './Footer'
import "./player.css"
import Sidebar from './Sidebar'

function Player( {spotify} ) {
    return (
        <div className="player">
        <div className="player_body">

            {/* Side Bar  */}
            <Sidebar />
            {/* Body  */}
            <Body spotify={spotify}/>
        </div>
        <Footer />
        </div>
    )
}

export default Player
