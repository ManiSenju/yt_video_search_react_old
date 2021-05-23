import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList =(props)=>{
    const videosList = props.videos.map((video)=>{
                return <VideoListItem selectedVideo ={props.selectedVideo} key={video.etag} video ={video} />
            })
    
    return (
        <ul className="col-md-4 list-group">
            {videosList}
        </ul>
    )
}

export default VideoList;