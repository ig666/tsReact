import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemesColor } from "../App";

// react中改变状态值是直接替换，所以要整个重新赋值
/*
eg:const [like,setLike]=useState({val:2,on:true})
 当需要去改变val值时候
    不能这样=>  setLike({val:3})
    应该这样=>  setLike({val:3,on:like.on})
**/
interface LikeBtnProps{
  setcheckTheme:Function,
  checkTheme:Boolean
}
const LikeBtn: React.FC<LikeBtnProps> = (props) => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const themes = useContext(ThemesColor);
  useEffect(() => {
    console.log("join");
    document.title = `点击了${like}次`;
  }, [like]); //每次修改State都会触发useEffect,但是可以通过第二个参数控制useEffect

  // function showLike(){
  //   setTimeout(() => {
  //     alert(`You click ${like}`)
  //   }, 3000);
  // }

  //react每次渲染里面的状态值都是互相隔离,所以造成了定时器里面的like值不会跟随每次渲染like 值，是因为react hook对值引用问题，所有通过useref处理
  function showLike() {
    setTimeout(() => {
      alert(`You click ${likeRef.current}`);
    }, 3000);
  }

  // 因为hook淡化了生命周期概念，所以要实现componentDidMount和componentDidUpdate通过useEffect,useRef实现
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      console.log("componentDidUpdate");
    } else {
      didMountRef.current = true;
    }
  });

  return (
    <>
      <button
        style={themes}
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
          props.setcheckTheme(!props.checkTheme)
        }}
      >
        {like}☝
      </button>
      <button
        onClick={() => {
          showLike();
        }}
      >
        Showlike
      </button>
    </>
  );
};

export default LikeBtn;
