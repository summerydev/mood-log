import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Upload() {
  const [files, setFiles] = useState();
  const url: string = "";
  const image = useFetch(url);

  const onLoadFile = (e: any) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  const handleSubmit = (e: any) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: image.length + 1,
        image: image,
      }),
    });
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
        <input type="file" id="image" onChange={onLoadFile} />
        <div>
          <button type="submit" className="button">
            ai하두알룩에게 사진 보내기🤖
          </button>
        </div>
      </form>
    </div>
  );
}
