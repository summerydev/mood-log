import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Upload() {
  const url: string = "http://localhost:3001/data";
  const data = useFetch(url);

  const [image, setImage] = useState([]);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(image);
    //handleAddItem({ image });

    return (
      <div className="upload">
        <span>사진 업로드</span>
        <form onSubmit={handleSubmit}>
          <input
            id=""
            type="text"
            required
            value={image}
            //onChange={(e) => setImage(e.target.value)}
            placeholder="url"
          />
          <div className="button">
            <Link type="submit" to="/loading" className="text-link">
              ai에게 분석맡기기
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
