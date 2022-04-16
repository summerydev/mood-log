import { useState } from "react";
import { Link } from "react-router-dom";
import { forEachChild } from "typescript";
//import { useNavigate } from "react-router-dom"; //err

export default function Upload() {
  const [files, setFiles] = useState();
  //const navigate = useNavigate();
  const url: string = "http://75da-121-66-139-243.ngrok.io/upload_page";
  const now = Date.now();

  // const onLoadFile = (e: any) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setFiles(file);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(files);
    const file = e.target.file.file;
    let formData = new FormData();
    formData.append("files", file);
    const dataSet = {
      id: now,
    };

    formData.append("data", JSON.stringify(dataSet));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    //navigate(`/output`);
    // submit 시 /output으로 넘어가야함
  };

  return (
    <div className="upload">
      <h1>사진 업로드</h1>
      <h3>
        데일리룩 사진을 첨부하면, <br />
        ai 하두알룩이 오늘의 무드를 분석해줘요!
        <br />
        전신사진일 수록 정확도가 높아진답니다.
      </h3>
      <form onSubmit={handleSubmit}>
        <input id="file" type="file" name="file" />
        <div>
          <button type="submit" className="button">
            ai하두알룩에게 사진 보내기🤖
          </button>
        </div>
      </form>
    </div>
  );
}
//<Link to="/output" className="text-link"></Link>
