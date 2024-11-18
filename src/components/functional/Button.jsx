export default function Button({text, classes, clickEvent}) {
  return (
    <button
      className={"bg-red rounded-md p-4 max-w-[150px] h-6 text-white" +
        " text-2xl leading-3 text-center hover:bg-blue "
        + classes}
      onClick={clickEvent}>
      {text}
    </button>
  )
}