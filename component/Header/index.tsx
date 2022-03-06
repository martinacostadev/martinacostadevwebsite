import { Link } from "remix";

export default function Posts({ title }: any) {
    return (
        <div>
            <Link to="/">Volver</Link>
            <h3 className="mb-8">{title}</h3>
        </div>
    );
  }