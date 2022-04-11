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
      
      <div className="button">
        <Link to="/" className="text-link">
          다시 테스트하기
        </Link>
      </div>
    </div>
  );
}
