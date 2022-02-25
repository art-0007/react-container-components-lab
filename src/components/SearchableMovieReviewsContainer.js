import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
import MovieSearch from './MovieSearch';

const NYT_API_KEY = 'cNRMWxtW8GDgX0fvS5rnvkXnE3CcX0wc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + ``;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    constructor () {
        super();

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount () {
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({reviews: response.results}))
    }

    handleSubmit(e) {
        e.preventDefault();
        let val = e.target.querySelector("input").value
        // let searchVal = val ? val : 'Servants'
        console.log(val)
        
        // let myUrl = URL + `&query=${searchVal}`
        // console.log(myUrl)
        
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <MovieSearch onSubmit={this.handleSubmit}/>
                <MovieReviews className="review-list" reviews={this.state.reviews}/>   
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;