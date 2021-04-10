import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow.js'

import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon/>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniY2yypXAJqqG-Pf7z2RBdrVC-9aZFeGh-Duum1OQ=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel="Super Super"
                verified
                subs="1.42M"
                noOfVideos={446}
                description="Avengers, X-men, Justice League... Comic Readouts, Trailer Breakdowns, Origin Stories, Top Facts... Marvel, DC... Everything is Served here!"
            />
            <hr/>

            <VideoRow 
                views="212K"
                subs="1.42M"
                description="About: The Falcon and the Winter Soldier Episode 3: Marvel and MCU Easter Eggs Guide · World is Watching · Dora Milaje ..."
                timestamp="1 Day Ago"
                channel="Super Super"
                title="The Falcon and The Winter Soldier Episode 4 Breakdown | SuperSuper"
                image="https://images.hindustantimes.com/img/2021/04/10/550x309/Cap_1618041636408_1618041645415.PNG"
            />
        </div>
    )
}

export default SearchPage
