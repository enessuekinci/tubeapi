import React from 'react';


const VideoDetail = ({video}) => {
    return (
        <div>
            <div className='ui embed'>
                <iframe src={video} allowFullScreen title='video player' />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>video</h4>
            </div>
        </div>
    );
}
    


export default VideoDetail;