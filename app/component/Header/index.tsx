import { Link } from "remix";

export default function Posts({ title }: any) {
    return (
        <div className="flex flex-row gap-2 text-2xl">
            <Link to="/">{"<"}</Link>
            <h2 className="mb-8">{title}</h2>
        </div>
    );
  }