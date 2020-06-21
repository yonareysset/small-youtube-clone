import React from 'react'

import { Grid } from '@material-ui/core'

import VideoListItem from './VideoListItem'

const VideoList = ({ list = [], onVideoSelect }) => {
    return (
        <Grid container spacing={2}>
            {list.length ? list.map((video) => <VideoListItem key={video.id} video={video} onVideoSelect={onVideoSelect} />) : 'Loading...'}
        </Grid>
    )
}

export default VideoList