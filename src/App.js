import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      
      <District name="Noakhali" spacil="vibag"></District>
      <District name="Bramonbariya" spacil="judda Akbor"></District>
      <District name="Mymensingh" spacil="Nothing"></District>
      <LoadPost></LoadPost>
      
    </div>
  );
}

function LoadPost(){
  const [posts,setPost] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    //.then(data =>console.log(data));
    .then(data =>setPost(data));
  },[])
  return(
    <div>
      <h1>Posts:{posts.length}</h1>
      {
        posts.map(post => <Post title ={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post (props){
  return (
    <div className='para'>
      <h2>Title:{props.title}</h2>
      <p>Body:{props.body}</p>
    </div>
  )

}
const districtStyle = {
  backgroundColor:'yellow',
  margin:'20px',
  borderRadius: '20px',
  padding: '5px'
  

}
function District(props){
  const [power,setPower]= useState(1);
  const boostPower = () =>{
    const newPower = power*2;
    setPower(newPower);

   

  }

 
  
  return(
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.spacil}</p>
      <h4>power:{power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
