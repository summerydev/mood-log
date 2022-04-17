import { Link } from "react-router-dom";
import Social from "../components/Social";

export default function Home() {
  return (
    <div className="home">
      <Link to="/" className="header text-link">
        MOOD LOG✨
      </Link>
      <h3>
        ai에게,
        <br />
        당신의 데일리룩 무드분석을 요청해보세요!
      </h3>
      <img
        className="ai-img"
        src="https://cdn-icons-png.flaticon.com/512/6604/6604268.png"
        alt="ai"
      />
      <div className="text">현재 -명이 참여했어요</div>
      <Social />

      <div className="button">
        <Link to="/upload" className="text-link">
          분석 요청하기🤖
        </Link>
      </div>
    </div>
  );
}
