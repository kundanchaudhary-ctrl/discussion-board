import React from 'react'
import Post from './Post'
import MessageSender from './MessageSender'

const Feed = () => {
    return (
        <div className='feed' >
            <MessageSender />

            <Post
                profilePic='https://avatars.githubusercontent.com/u/76721133?s=400&u=cb759e31ba5f08409129c710d10b87f4fe5731a7&v=4'
                message='Hello, Kundan Chaudhary'
                timestamp='time'
                imaName='imgName'
                username='Kundan Chaudhary'
            />


            {/* {
                postData.map(entry => (
                    <Post
                        ProfilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.imgName}
                        username={entry.user}
                    />
                ))
            } */}

        </div>
    )
}

export default Feed
