import React, { useState,useEffect } from "react";

// react中改变状态值是直接替换，所以要整个重新赋值
/*
eg:const [like,setLike]=useState({val:2,on:true})
 当需要去改变val值时候
    不能这样=>  setLike({val:3})
    应该这样=>  setLike({val:3,on:like.on})
**/
const LikeBtn:React.FC=()=>{
    const [like,setLike]=useState(0)
    const [on,setOn]=useState(true)
    useEffect(()=>{
      document.title=`点击了${like}次`
    })
    return(
    <>
      <button onClick={()=>{setLike(like+1)}}>{like}☝</button>
      <button onClick={()=>{setOn(!on)}}>{on?'true':'false'}</button>
    </>
    )
}

export default LikeBtn