export default function Header() {
  return (
    <header className="bg-white mb-10 shadow-xl sticky top-0 z-50">
      <div className="container m-auto flex justify-between p-4 items-center">
        <h1 className="font-bold text-purple-600 text-lg">FWR</h1>
        <div>
          <ul className="flex gap-3 items-center text-gray-600">
            <li className="cursor-pointer bg-purple-600 py-2 rounded-md px-4 text-white">
              Home
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li className="text-purple-600">
              <a href="">Login</a>
            </li>
            <a href="">
              <li className="py-2 px-4 border rounded-md border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                Signup
              </li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
