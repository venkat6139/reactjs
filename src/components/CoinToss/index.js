import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let resultToss = ''
    let updateHeadCount = headsCount
    let updateTailsCount = tailsCount

    if (tossResult === 0) {
      resultToss = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      updateHeadCount += 1
    } else {
      resultToss = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      updateTailsCount += 1
    }
    this.setState({
      tossImage: resultToss,
      headsCount: updateHeadCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="mid-container">
            <img src={tossImage} alt="toss result" className="image" />
            <button type="button" className="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="bottom-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
