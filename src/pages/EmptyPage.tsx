import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <div>
      <h1>π§μλͺ»λ μ κ·Όμλλ€.π§</h1>
      <Link to="/" className="button text-link">
        νμΌλ‘ λμκ°κΈ°
      </Link>
    </div>
  );
}
