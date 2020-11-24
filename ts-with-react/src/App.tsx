import React,{useState,useRef, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
// import Hello from "./components/Hello";
import LikeBtn from "./components/LikeBtn";
import Position from "./components/Position";
import usePositon from './hooks/useMousePositon'
import useLoading from './hooks/useLoading'
interface ImageDate {
  message: string,
  status: string
}
function App() {
  const [show,setShow]=useState(false)
  // const position = usePositon()
  const [data, loading] = useLoading('https://dog.ceo/api/breeds/image/random', [show])
  const focusRef=useRef<HTMLInputElement>(null)
  const dogData = data as ImageDate

  useEffect(()=>{
    focusRef.current?.focus()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" ref={focusRef}/>
        {/* <Hello message="hello world2" /> */}
        <LikeBtn />
        {/* <Position /> */}
        {/* <button onClick={()=>{setShow(!show)}}>切换图片</button>
        {loading ? '🐕加载中....' : <img width='200px' src={dogData && dogData.message} alt="" />} */}
        {/* <p>
          x:{position.x},y:{position.y}
        </p> */}
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
