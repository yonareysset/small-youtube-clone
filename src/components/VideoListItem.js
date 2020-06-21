import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'
import { findByLabelText } from '@testing-library/react'

const VideoListItem = ({ video = {}, onVideoSelect }) => {
    const { snippet: { title, thumbnails: { medium: { url } } } = {} } = video
    console.log(url)
    return (
        <Grid item xs={12} onClick={console.log('prout')}>
            <Paper onClick={() => onVideoSelect(video)} elevation={6} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img src={url} style={{ marginRight: '20px', }} alt='thumbnail' />
                <Typography variant='subtitle1'>{title}</Typography>
            </Paper>
        </Grid>
    )
}

export default VideoListItem