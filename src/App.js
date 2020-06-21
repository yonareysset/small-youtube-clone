import React, { Component } from 'react'
import { Grid, AppBar, Toolbar } from '@material-ui/core'
import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'


class App extends Component {

    state = {
        videos: [],
        selectedVideo: ''
    }

    componentDidMount() {
        this.handleSubmit('hire me')
    }

    handleSubmit = async (searchTerm) => {
        const { data: { items: videos } } = await youtube.get('search',
            {
                params: {
                    q: searchTerm,
                    part: ' snippet',
                    type: 'video',
                    maxResults: 5,
                    key: ''
                }
            })

        this.setState({
            videos,
            selectedVideo: videos[0]
        })
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    }

    render() {
        const { videos, selectedVideo } = this.state
        return (
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={12} xl={8} >
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            <VideoList list={videos.slice(1)} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App
