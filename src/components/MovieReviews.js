// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({reviews}) => 
    <div className="review-list">
        {reviews.map(Review)}
    </div>

    const Review = ({byline, display_title, summary_short, headline}) => {
        return (
        
            <div className='review' key={headline} >
                <h3>{byline}</h3>
                <h3>{display_title}</h3>
                <h3>{summary_short}</h3>
                <hr />
            </div>
        );
    }

MovieReviews.defaultProps = {
    review: []
}
export default MovieReviews;