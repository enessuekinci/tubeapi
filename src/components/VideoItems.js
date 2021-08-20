import React from 'react';

const VideoItems = ({video}) => {
    
    return (
        <div onClick= {() => video} className ='video-item'>
            <img className ='ui image' src = {video} alt={video} />
        </div>
    );
}

export default VideoItems;