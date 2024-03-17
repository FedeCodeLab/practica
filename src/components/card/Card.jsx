export function Card() {
  return (
    <div className="flex bg-white shadow-lg rounded-xl max-h-44 p-4 gap-5 max-w-sm py-4 px-8 mx-auto">
      <img
        src="https://tailwindcss.com/img/erin-lindford.jpg"
        alt="image"
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      />

      <div className="space-y-1">
        <h4 className="text-lg font-bold">Erin Lindford</h4>
        <p className="text-md font-medium text-slate-500 -mb-8">
          Product Engineer
        </p>
        <button className="text-sm text-purple-500 font-bold border-purple-200 border rounded-full px-3 py-1 hover:bg-purple-500 hover:text-white">
          Message
        </button>
      </div>
    </div>
  );
}
