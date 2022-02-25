import React, { Component } from 'react';

class MovieSearch extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.onSubmit(e)}>
                <input type='text' placeholder='SEARCH'/>
                <button>Find Review</button>  
            </form>
        );
    }
}

export default MovieSearch;

