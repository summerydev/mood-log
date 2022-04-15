import React, { useEffect } from 'react'

export default function Social() {
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
    </div>
  );
}
