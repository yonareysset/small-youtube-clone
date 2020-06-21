import React, { Component } from 'react'

import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {

    state = {
        SearchTerm: ''
    }

    handleChange = (e) => {
        this.setState({ SearchTerm: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { SearchTerm } = this.state
        const { onFormSubmit } = this.props
        onFormSubmit(SearchTerm)
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        onChange={this.handleChange}
                        label='Search...'
                    />
                </form>
            </Paper>
        )
    }
}

export default SearchBar