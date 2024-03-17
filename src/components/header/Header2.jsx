export default function Header2() {
  return (
    <header className="w-full bg-purple-100 py-6">
      <div className="container flex justify-between">
        <h4>header</h4>
        <div className="flex gap-6 items-center">
          <a
            href=""
            className="bg-contessa-500 text-white px-3 py-2 rounded-md hover:text-red-400"
          >
            Home
          </a>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
          <a href="">Login</a>
          <a
            href=""
            className="border border-contessa-400 px-3 py-2 rounded-md text-contessa-600 hover:bg-contessa-600 hover:text-white"
          >
            Signup
          </a>
        </div>
      </div>
    </header>
  );
}
