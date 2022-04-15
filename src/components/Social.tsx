import React, { useEffect } from "react";
import KakaoShareButton from "./KakaoShareButton";

export default function Social() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
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
          src="images/twitter.png"
          alt="twitter"
        />
      </a>
      <a href="#">
        <img
          className="link-icon.facebook"
          src="images/facebook.png"
          alt="facebook"
        />
      </a>
      <a href="#">
        <img
          className="link-icon.kakao"
          src="images/kakao-talk.png"
          alt="kakao"
        />
      </a>
      <a href="#">
        <img
          className="link-icon.link"
          src="images/external-link.png"
          alt="share link"
        />
      </a>
      <div className="layout">
        <KakaoShareButton />
      </div>
    </div>
  );
}
