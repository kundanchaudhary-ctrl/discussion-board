import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Header.css'


export const Header = () => {
    return (
        <div className='header'>
            <div div className="header__left">
                <img src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.18169-9/11214065_463855417098648_8263109675874583302_n.png?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gaPU1KIAw-EAX_jiARQ&_nc_ht=scontent.fktm1-2.fna&oh=a35ea1fa438c3253ff6469148f1b78bb&oe=60CDFB8B" alt="ZipBoard logo" />
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search all topics' type="text" />
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontsize='large' />
                </div>

                <div className="header__option">
                    <FlagIcon fontsize='large' />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>

            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar />
                    <h4>Kundan Chaudhary</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>


        </div>



    )
}

export default Header
