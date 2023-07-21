// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeProfileIndex: 0,
  }

  onLeftArrow = () => {
    const {activeProfileIndex} = this.state

    if (activeProfileIndex > 0) {
      this.setState(prevState => ({
        activeProfileIndex: prevState.activeProfileIndex - 1,
      }))
    }
  }

  onRightArrow = () => {
    const {activeProfileIndex} = this.state
    const {reviewsList} = this.props

    if (activeProfileIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeProfileIndex: prevState.activeProfileIndex + 1,
      }))
    }
  }

  render() {
    const {activeProfileIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeProfileIndex
    ]

    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div className="employees-container">
            <button
              className="button"
              type="button"
              data-testid="leftArrow"
              onClick={this.onLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-btn"
                alt="left arrow"
              />
            </button>
            <div className="profiles-container">
              <img src={imgUrl} className="profile-img" alt={username} />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="company-name">{description}</p>
            </div>
            <button
              className="button"
              type="button"
              data-testid="rightArrow"
              onClick={this.onRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-btn"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
