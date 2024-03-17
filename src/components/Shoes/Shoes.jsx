import Info from "../icons/Info";

export default function Shoes() {
  return (
    <div className="my-10 mx-auto bg-white shadow-xl max-w-xs rounded-xl hover:scale-105 transition cursor-pointer">
      <img
        src="https://img.freepik.com/fotos-premium/vista-superior-dos-nuevas-zapatillas-blancas-ninos-velcro-calzado-facil-sobre-fondo-rojo-zapatilla_248570-1829.jpg"
        alt="Shoes"
        className="w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="p-10 space-y-3">
        <div className="flex gap-1">
          <h4 className="text-xl font-semibold">Card Component</h4>
          <Info />
        </div>
        <p className="text-sm text-gray-600">May 14th</p>
        <p className="text-gray-600">
          Use card component to easly show blog posts, products, features, items
          and more.
        </p>
      </div>
    </div>
  );
}
