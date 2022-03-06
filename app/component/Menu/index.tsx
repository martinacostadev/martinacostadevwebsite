import { Link } from "remix";

export function Menu() {
    return (
        <div className="flex flex-row space-x-8 md:text-lg mt-12 md:mt-0">
            <Link to="/" className="hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white">Inicio</Link>
            <Link to="/blog" className="hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white">Blog</Link>
            <Link to="/advices" className="hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white">Consejos</Link>
            <Link to="/aboutme" className="hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white">Acerca de</Link>
        </div>
    )
}