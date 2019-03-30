import React, { Component } from 'react'
import Head from 'next/head'

class index extends Component {
  render() {
    return (
      <div className='container'>
          <Head>
              <title>Next Portfolio</title>
          </Head>
        
        <div className='welcome-msg'>Welcome!</div>

        <nav>
            <ul>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

        <style jsx>{`
            .welcome-msg {
                width: 90%;
                margin: auto;
                text-align: center;
                padding: 10px;
                background: black;
                color: white;
            }
            ul {
                margin: auto;
                padding: 0;
                text-align: center;
                display: flex;
                justify-content: center;
            }
            li {
                float: left;
                list-style: none;
                margin: 0 20px;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
            }
        `}</style>
      </div>
    )
  }
}

export default index
