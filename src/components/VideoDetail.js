import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {
    const { id: { videoId } = {}, snippet: { title, description, channelTitle } = {} } = video
    const videoSrc = `https://www.youtube.com/embed/${videoId}`
    return (
        videoId ?
            <>
                <Paper elevation={6} style={{ height: '60vh' }}>
                    <iframe
                        frameBorder='0'
                        height='100%'
                        width='100%'
                        title='Video Player'
                        src={videoSrc}
                    />
                </Paper>
                <Paper elevation={6} style={{ padding: '15px' }}>
                    <Typography variant='h4'>{title} - {channelTitle}</Typography>
                    <Typography variant='subtitle2'>{channelTitle}</Typography>
                    <Typography variant='subtitle2'>{description}</Typography>
                </Paper>
            </>
            :
            <div>Loading...</div>
    )
}

export default VideoDetail 