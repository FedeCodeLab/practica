export function Card2() {
  return (
    <div className="my-6 flex gap-6 bg-white shadow-xl max-w-sm mx-auto p-6 rounded-xl">
      <img
        src="https://tailwindcss.com/img/erin-lindford.jpg"
        alt="image"
        className="w-auto h-24 rounded-full"
      />

      <div className="">
        <h4 className="text-lg font-bold">Erin Lindford</h4>
        <p className="text-gray-600">Product Engineer</p>
        <button className="border px-3 py-1 rounded-full text-purple-700 font-semibold border-purple-200 hover:bg-purple-500 hover:text-white transition">
          Message
        </button>
      </div>
    </div>
  );
}
