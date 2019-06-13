import React from 'react'

const Feedback = props =>{
    return(
        <div className='Bid'>
            <p>Reviewer: {props.review.reviewer_name}</p>
            <p>Title: {props.review.title}</p>
            <p>Description: {props.review.description}</p>
            <p>Rating: {props.review.rating}</p>
            <p>Would recommend: {props.review.recommend}</p>
        </div>
    )
}

export default Feedback