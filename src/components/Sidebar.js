import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../util/StateProvider';


function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img 
            src="https://cdn4.iconfinder.com/data/icons/media-player-icons/80/Media_player_icons-12-512.png"
            alt="sidbarlogo"
            />
            <SidebarOptions title="Home" Icon={HomeIcon}/>
            <SidebarOptions title="Search" Icon={SearchIcon}/>
            <SidebarOptions title="Home" Icon={LibraryMusicIcon}/>

            <br/>
            <strong className="playlist">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <SidebarOptions title={playlist.name} />
            ))}
            
        </div>
    )
}

export default Sidebar
