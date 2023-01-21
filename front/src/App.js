import './App.css';
import io from 'socket.io-client';
import React,{useState, useEffect} from 'react'

const socket = io('http://localhost:3001');


function App() {
  const [message, setMessage] = useState('')
  const [log,setLog]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    socket.emit('message',message);

  }

  useEffect(()=>{
    const receiveMessage =(message)=>{
      setLog([...log,{body:message}]);
    }
    socket.on('message',receiveMessage)

    return()=>{
      socket.off('message', receiveMessage)
    }
  });




  return (
    <div className="App">
      <p>hello world</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="mensaje" onChange={event=>setMessage(event.target.value)} value={message}></input>
        <button>send</button>
        <br></br>
        {log.map((mg,index)=>(
          <p key={index}>{mg.body}</p>
        )
        )}
      </form>
    </div>
  );
}

export default App;
