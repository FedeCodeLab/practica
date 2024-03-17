import ArrowDown from "../icons/ArrowDown";

export default function Question() {
  return (
    <div
      tabIndex="0"
      className="hover:scale-105 transition-all bg-white shadow-xl border border-transparent p-8 max-w-full mx-auto flex flex-col gap-4 rounded-xl cursor-pointer focus:border focus:border-purple-800"
    >
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">Do you provide any free plan?</h4>
        <ArrowDown />
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        blanditiis qui, animi ratione quam fugit sint quod deserunt tempore?
      </p>
    </div>
  );
}
