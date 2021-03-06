import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './Post.css'

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post' >
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar' />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(Number(timestamp)).toUTCString()}</p>

                </div>

                <div className="post_bottom">
                    <p>{message}</p>

                </div>
                <div className="post__options">
                    <div className="post__option">
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    <div className="post__option">
                        <ChatBubbleOutlineIcon />
                        <p>Comment</p>
                    </div>
                    <div className="post__option">
                        <AccountCircleIcon />
                        <ExpandMoreOutlined />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post
