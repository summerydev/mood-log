import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Social from "./Social";

export default function Output() {
  const url: string = "http://16a1-121-66-139-243.ngrok.io/api/users";
  const data = useFetch(url);
  const test = useFetch(url);
  return (
    <div className="output">
      {test.map((test) => (
        <div key={test.id}>{test.name}</div>
      ))}

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
