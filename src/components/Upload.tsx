import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <div className="upload">
      <span>사진 업로드</span>
      <input placeholder="url"></input>
      <div className="button">
        <Link to="/loading" className="text-link">
          ai에게 분석맡기기
        </Link>
      </div>
    </div>
  );
}
