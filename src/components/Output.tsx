import { Link } from "react-router-dom";

export default function Output() {
  return (
    <div className="output">
      <h1>결과</h1>
      <img
        className="img chart"
        src="/images/pie-chart.png"
        alt="output chart image"
      />

      <span>카톡으로 공유하기</span>
      <span>인스타로 공유하기</span>
      <span>트위터로 공유하기</span>
      <Link to="/" className="button text-link">
        다시 테스트하기
      </Link>
    </div>
  );
}
