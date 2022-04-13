import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="title">How Do I Look?</div>
      <div className="text">
        ai 하두알룩에게 <br></br>
        당신의 데일리룩 무드분석을 요청해보세요!
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/6604/6604268.png"></img>
      <div className="text">현재 -명이 참여했어요</div>
      <div className="social"></div>
      <div className="button">
        <Link to="/upload" className="text-link">
          분석 요청하기🤖
        </Link>
      </div>
    </div>
  );
}
