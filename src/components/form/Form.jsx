export default function Form() {
  return (
    <form
      action=""
      className="flex flex-col max-w-sm m-auto shadow-xl mb-10 p-10 items-center space-y-10 bg-white rounded-xl"
    >
      <h4 className="text-xl font-semibold text-purple-600 mb-1">Registro</h4>
      <input
        type="text"
        placeholder="Usuario"
        className="w-full p-2 border-b text-sm border-purple-400 focus:outline-purple-600"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border-b text-sm border-purple-400 focus:outline-purple-600"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="border-b w-full p-2 text-sm border-purple-400 focus:outline-purple-600"
      />
      <button className="bg-gradient-to-r from-purple-700 to-pink-600 py-2 px-4 text-white hover:from-purple-600 hover:to-pink-700 transition-colors duration-300 rounded-sm">
        Suscribirte
      </button>
    </form>
  );
}
