import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Social from "./Social";

export default function Output() {
  const url: string = "http://localhost:3001/data";
  const data = useFetch(url);
  return (
    <div className="output">
      <h1>결과</h1>
      {data.map((data) => (
        <div key={data.id}>
          <img className="output-img" src={data.image} />
          <p>
            {data.hip[0]}
            {data.hip[1]}%, {data.casual[0]}
            {data.casual[1]}%
          </p>
        </div>
      ))}
      <Social />
      <div className="button">
        <Link to="/" className="text-link">
          다시 테스트하기
        </Link>
      </div>
    </div>
  );
}
