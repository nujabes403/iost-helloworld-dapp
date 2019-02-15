import React, { Component, Fragment } from 'react'

import './HelloWorld.scss'

type Props = {

}

class HelloWorld extends Component<Props> {
  state = {
    someone: '',
    txHash: '',
    result: '',
    isLoading: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  hello = () => {
    const contractAddress = 'ContractEf4ztxHFP4iUs6Xpomgb2nqfJN3D9K7dfp5H7pV7BVy4'
    const { someone } = this.state
    window.iost.callABI(
      contractAddress,
      'hello',
      [someone]
    )
      .onPending((pending) => {
        console.log(pending, 'pending')
        this.setState({
          isLoading: true,
          txHash: pending.hash,
          result: ''
        })
      })
      .onSuccess((result) => {
        this.setState({
          isLoading: false,
          result: result.returns[0]
        })
      })
      .onFailed((failed) => {
        this.setState({
          isLoading: false,
        })
      })
  }

  render() {
    const { txHash, result, isLoading } = this.state
    return (
      <div className="HelloWorld">
        <header className="HelloWorld__title">IOST DAPP: Hello World</header>
        <input
          className="HelloWorld__input"
          name="someone"
          onChange={this.handleChange}
        />
        <div>
        code:
        {`class HelloWorld {
              init() {}

              hello(someone) {
                return "hello, " + someone
              }
            }

            module.exports = HelloWorld
        `}
        </div>
        <button
          className="HelloWorld__helloButton"
          onClick={this.hello}
        >
          Hello!
        </button>
        {isLoading && (
          <Fragment>
            <p className="HelloWorld__tx">Transaction: {txHash} processing...</p>
            <img className="HelloWorld__loading" src="/static/images/loading.gif" />
          </Fragment>
        )}
        {result && (
          <p className="HelloWorld__success">RESULT: {result}</p>
        )}
      </div>
    )
  }
}

export default HelloWorld
