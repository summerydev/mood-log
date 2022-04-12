import { Link } from "react-router-dom";

export default function Upload() {
  const url: string = "http://localhost:3001/data";

  return (
    <div className="upload">
      <span>사진 업로드</span>
      <input type="file" />
      <div className="button">
        <Link type="submit" to="/loading" className="text-link">
          ai에게 분석맡기기
        </Link>
      </div>
    </div>
  );
}
