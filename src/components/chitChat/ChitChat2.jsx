import Bubble from "../icons/Bubble";

export default function ChitChat2() {
  return (
    <div className="mx-auto max-w-sm bg-white flex p-6 gap-6 my-6 shadow-xl rounded-xl">
      <div className="">
        <picture className="">
          <Bubble />
        </picture>
      </div>
      <div className="">
        <h4 className="text-xl">ChitChat</h4>
        <p className="text-gray-600">You have a new message!</p>
      </div>
    </div>
  );
}
