import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

function Footer() {
    return (
        <div className= "footer">
        <div className="footer_left">
            <img src="https://i1.sndcdn.com/artworks-000296804070-shhxuu-t500x500.jpg"
             alt="poster" className="footer_albumLogo" />
            <div className="footer_songInfo">
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
        </div>
        <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousIcon className="footer_icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
            <SkipNextIcon className="footer_icon" />
            <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
        <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
        </div>
        </div>
    )
}

export default Footer
