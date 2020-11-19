//共有状态抽取：loading;对比HOC高阶函数

import { useEffect, useState } from 'react'
import axios from 'axios'

const useLoading=(url:string,deps:any[]=[])=>{
    const [data,setData]=useState<any>(null)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(url).then(res=>{
            setLoading(false)
            setData(res.data)
        })
    },deps)
    return [data,loading]
}

export default useLoading