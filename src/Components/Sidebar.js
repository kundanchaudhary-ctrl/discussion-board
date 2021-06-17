import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://avatars.githubusercontent.com/u/76721133?s=400&u=cb759e31ba5f08409129c710d10b87f4fe5731a7&v=4' title='Kundan Chaudhary' />

            <SidebarRow Icon={LocalHospitalIcon}
                title='COVID-19 Information Center' />

            <SidebarRow Icon={EmojiFlagIcon}
                title='Pages' />
            <SidebarRow Icon={PeopleIcon}
                title='Friends' />
            <SidebarRow Icon={ChatIcon}
                title='Messenger' />
            <SidebarRow Icon={StorefrontIcon}
                title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon}
                title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined}
                title='More' />
        </div>
    )
}

export default Sidebar