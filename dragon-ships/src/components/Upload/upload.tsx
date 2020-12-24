import React, { useRef } from "react";
import { Button } from '../Button/button'
interface UploadProps {
    change?: Function
}

export const Upload: React.FC<UploadProps> = (props) => {
    const { change } = props
    const inputFile = useRef<HTMLInputElement>(null)
    const getFile = () => {
        if (inputFile.current) {
            inputFile.current.click()
        }
    }
    const handChange = (e:any) => {
        console.log(e, 'xxx')
    }
    return (
        <div>
            <input onChange={handChange} ref={inputFile} type="file" className='input-file' />
            <Button onClick={getFile}>Upload</Button>
        </div>
    )
}