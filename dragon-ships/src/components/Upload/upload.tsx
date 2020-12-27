import React, { ChangeEvent, useRef } from "react";
import { Button } from "../Button/button";
import axios from "axios";
interface UploadProps {
  handlChange?: (file: File) => void;
  multiple?: boolean;
  action: string;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const { handlChange, action } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const getFile = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.click();
    }
  };
  const handChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (handlChange) {
        handlChange(e.target.files[0]);
      }
      const formData = new FormData();
      formData.append(e.target.files[0].name, e.target.files[0]);
      let res = await axios.post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          console.log(percentage, "百分比");
        },
      });
      console.log(res, "上传返回值");
    }
  };
  return (
    <div>
      <input
        onChange={handChange}
        ref={inputFile}
        type="file"
        className="input-file"
        multiple
      />
      <Button onClick={getFile}>Upload</Button>
    </div>
  );
};
