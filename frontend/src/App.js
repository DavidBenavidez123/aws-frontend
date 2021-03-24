import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client'
import { useRef, useState, useEffect } from 'react'

function App() {
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient('http://node-env.eba-jmjebwef.us-east-2.elasticbeanstalk.com/')

    socketRef.current.on('connection', data => {
      console.log(data)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
