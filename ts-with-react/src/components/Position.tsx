import React, { useEffect, useState } from 'react'


const Position = () => {
    const [position, setPotion] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse: (e: MouseEvent) => void = (e) => {
            console.log('innner')
            setPotion({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)
        return () => {
            document.removeEventListener('click', updateMouse)
        }
    })
    return (
        <p>x:{position.x},y:{position.y}</p>
    )
}

export default Position