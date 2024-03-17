export default function Video() {
  return (
    <div className="flex max-w-sm m-auto my-10 gap-5 bg-white shadow-xl rounded-xl cursor-pointer">
      <div className="max-w-44">
        <img
          src="https://img.freepik.com/fotos-premium/vista-superior-dos-nuevas-zapatillas-blancas-ninos-velcro-calzado-facil-sobre-fondo-rojo-zapatilla_248570-1829.jpg"
          alt=""
          className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
        />
      </div>
      <div className="flex-2 p-2">
        <h4 className="text-ls font-bold mb-2">
          Pacific Drive - Open world Gameplay
        </h4>
        <p className="text-gray-600 text-sm">Chango Fett</p>
        <p className="text-gray-600 text-sm">12 vistas - hace 13 horas</p>
        <p className="text-gray-600 text-sm">Nuevo</p>
      </div>
    </div>
  );
}
