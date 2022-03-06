import { Link } from "remix"

export default function AboutMe() {
    return (
      <div className="flex flex-col md:flex-row w-full pt-6 md:pl-6 gap-8 md:gap-14 lg:w-3/4">
        <div className="md:w-1/2">
          <h3 className="mb-4 leading-tight text-2xl md:text-4xl font-semibold">
            FrontEnd Developer React
          </h3>
          <div className="w-80 text-xl md:text-2xl tracking-wide text-gray-400">
            <p className="mb-6">
                Trabajo en una empresa realizando productos webs y aplicaciones móviles.
            </p>
            <p className="mb-6">
                Mis hobbies son hacer side projects para practicar nuevas tecnologías y además para abrir la mente. 
            </p>
            <p className="mb-6">
                Me gusta ayudar a la comunidad así aprendemos y crecemos juntos y juntas; también pasear en moto, salir a caminar y hacer crossfit.
            </p>
          </div>
        </div>
        <div className="flex md:flex-col md:w-1/2 gap-8">
          <a href="https://www.twitter.com/martinacostadev">
          <img src={"./img/twitter.svg"} className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/martinacostadev/">
          <img src={"./img/linkedin.svg"} className="w-8 h-8" />
          </a>
          <a href="https://github.com/martinacostadev">
          <img src={"./img/github.svg"} className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/martinacostadev">
          <img src={"./img/instagram.svg"} className="w-8 h-8" />
          </a>
        </div>
      </div>
    );
  }
  