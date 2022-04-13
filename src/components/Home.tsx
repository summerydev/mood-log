import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="title">How Do I Look?</div>
      <div className="text">
        ai 하두알룩에게,
        <br />
        당신의 데일리룩 무드분석을 요청해보세요!
      </div>
      <img
        className="ai-img"
        src="https://cdn-icons-png.flaticon.com/512/6604/6604268.png"
        alt="ai HADOALOOK"
      />
      <div className="text">현재 -명이 참여했어요</div>
      <div className="link-icon">
        <a href="#">
          <img
            className="link-icon.instagram"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="instagram"
          />
        </a>
        <a href="#">
          <img
            className="link-icon.twitter"
            src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1649818521~hmac=ddbd8de20083f59043ac82438990bcec"
            alt="twitter"
          />
        </a>
        <a href="#">
          <img
            className="link-icon.facebook"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111398.png"
            alt="facebook"
          />
        </a>
        <a href="#">
          <img
            className="link-icon.kakao"
            src="https://cdn-icons.flaticon.com/png/512/3991/premium/3991999.png?token=exp=1649818546~hmac=b5f363bdb1207b005db3ce72f19a9e30"
            alt="kakao"
          />
        </a>
        <a href="#">
          <img
            className="link-icon.link"
            src="https://cdn-icons.flaticon.com/png/512/5873/premium/5873833.png?token=exp=1649822296~hmac=32b9c72d1f621ecd5da635607f1132e5"
            alt="share link"
          />
        </a>
      </div>

      <div className="button">
        <Link to="/upload" className="text-link">
          분석 요청하기🤖
        </Link>
      </div>
    </div>
  );
}
