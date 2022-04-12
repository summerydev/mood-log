import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      
      <div className="title">
        MOOD LOG
      </div>
      <div className="text">ai 하두알룩에게 데일리룩 무드분석을 요청해보세요!</div>
      <div className="button">
          <Link to="/upload" className="text-link">
            하두알룩에게 분석 요청하기🤖
          </Link>
      </div>
    </div>
  );
}
