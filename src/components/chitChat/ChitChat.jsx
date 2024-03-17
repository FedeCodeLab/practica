import Bubble from "../icons/Bubble";

export default function ChitChat() {
  return (
    <div className="flex max-w-sm my-0 mx-auto shadow-xl p-6 rounded-lg bg-white">
      <div className="flex-shrink-0">
        <picture className="h-12 w-12">
          <Bubble />
        </picture>
      </div>
      <div className="ml-6">
        <h4 className="text-xl text-gray-700">ChitChat</h4>
        <p className="text-base text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}
