import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <div className="upload">
      <span>사진 업로드</span>
      <input placeholder="url"></input>
      <Link to="/loading" className="button text-link">
        ai에게 분석맡기기
      </Link>
    </div>
  );
}
