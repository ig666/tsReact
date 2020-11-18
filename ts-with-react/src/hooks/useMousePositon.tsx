import { useEffect,useState } from "react";
//自定义hook，达到公共逻辑分离，方便复用逻辑,不受组件影响，更纯粹
//多个地方可以同时引用，useState&&useEffect是隔离运行的
//自定义hook必须以use开头（标准）
const usePositon=()=>{
    const [position, setPotion] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse= (e:MouseEvent) => {
            setPotion({ x: e.clientX, y: e.clientY })
        }
        console.log('add effct')
        document.addEventListener('mousemove', updateMouse)
        return () => {
            console.log('move effct')
            document.removeEventListener('mousemove', updateMouse)
        }
    },[])  //useEffect返回一个函数，会在下次useEffect之前调用这个函数
    return position
}

export default usePositon