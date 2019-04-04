import React, { Component } from 'react'
import Head from 'next/head'

class index extends Component {
  render() {
    return (
      <div className='container'>
          <Head>
            <link href="https://fonts.googleapis.com/css?family=Karla:400" rel="stylesheet"/>
            <title>Next Portfolio</title>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
          </Head>
        
        <div className='welcome-msg'>Hi!</div>
        <div className='projects-container'>
            <h4>Recent Works</h4>
        </div>

        <style global jsx>{`
            body {
                font-family: 'Karla', sans-serif;
                font-size: 12px;
            }
        `}
        </style>

        <style jsx>{`
            .container, nav {
                width: 90%;
                margin: auto;
            }   
            .welcome-msg {
                text-align: center;
                padding: 10px;
                background: black;
                color: white;
            }
            .projects-container {
                
            }
            ul {
                padding: 0;
                text-align: center;
                display: flex;
                justify-content: flex-end;
                letter-spacing: 0.04em;
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
