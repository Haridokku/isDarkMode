// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}
  backgroundChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }
  buttonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }
  render() {
    const {isDarkMode} = this.state
    const buttonText = this.buttonText()
    const backgroundChanges = isDarkMode ? 'DarkBackground' : 'LightBackground'
    const heading = isDarkMode ? 'DarkHeading' : 'LightHeading'
    const cardContainer = isDarkMode ? 'Dark' : 'Light'
    return (
      <div className="container">
        <div className={cardContainer}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button
            type="button"
            className={backgroundChanges}
            onClick={this.backgroundChange}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
