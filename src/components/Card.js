import React from 'react'
// import PropTypes from 'prop-types'
import "./Card.css"

function Card (props) {
    return (
    <div className="card">
        <h3 className="card-message">
            Message: {props.message}
        </h3>
        <section>
            Likes: {props.likeCount}
        </section>
        <button className="card-button">+1</button>
        <button className="card-button"> Delete </button>
    </div>
    )
}

// Card.PropTypes = {
//     //fill in proptypes
//     //cardData
// }

// Card.propTypes = {
//     cardData: ropTypes.object.isRequired(
//         PropTypes.shape({
//             message: PropTypes.string.isRequired,
//             likeCount: PropTypes.number.isRequired
//         }))
//     };

export default Card;