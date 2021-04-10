import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'
import Youtube from '@material-ui/icons/YouTube'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Hanger from '@material-ui/icons/DragHandle'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show"/>
            <hr/>
            <h4>More From Youtube</h4>
            <SidebarRow Icon={Youtube} title="Youtube Premium"/>
            <SidebarRow Icon={LocalMoviesIcon} title="Movies"/>
            <SidebarRow Icon={SportsEsportsIcon} title="Gaming"/>
            <SidebarRow Icon={LiveTvIcon} title="Live"/>
            <SidebarRow Icon={Hanger} title="Fashion & Beauty "/>
            <SidebarRow Icon={EmojiObjectsIcon} title="Learning"/>
            <SidebarRow Icon={EmojiEventsIcon} title="Sports"/> 
            <hr/>
            <SidebarRow Icon={SettingsIcon} title="Setting"/>
            <SidebarRow Icon={FlagIcon} title="Report history"/>
            <SidebarRow Icon={HelpIcon} title="Help"/>
            <SidebarRow Icon={FeedbackIcon} title="Send Feedback"/>

        </div> 
    )
}

export default Sidebar
