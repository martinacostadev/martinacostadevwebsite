export default function Index() {
  return (
    <div className="flex flex-col md:flex-row w-full pt-6 md:pl-6 gap-16 lg:w-3/4">
      <div className="md:w-1/2">
        <h3 className="mb-4 leading-tight text-2xl md:text-4xl font-semibold">
          FrontEnd Developer React
        </h3>
        <div className="w-80 text-xl md:text-2xl tracking-wide text-gray-400">
          <p className="mb-6">
            Trabajo en una empresa realizando productos webs y aplicaciones móviles.
          </p>
          <p>
            Me gusta ayudar a la comunidad así aprendemos y crecemos juntos y juntas.
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2 lg:place-content-center" >
        <img src={"./img/home.png"} />
      </div>
    </div>
  );
}
