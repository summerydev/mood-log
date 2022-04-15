import { useState } from "react";
import { Link } from "react-router-dom";

export default function Upload() {
  const [files, setFiles] = useState();
  const [text, setText] = useState("");

  const url: string = "http://16a1-121-66-139-243.ngrok.io/motd/hello5";

  const onLoadFile = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    setFiles(file);
  };

  const handleSubmit = (e: any) => {
    console.log(e.target);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: files,
        image: files,
        text: text,
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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input id="image" type="file" name="image" onChange={onLoadFile} />
        <div>
          <button type="submit" className="button">
            <Link to="/output" className="text-link">ai하두알룩에게 사진 보내기🤖</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
