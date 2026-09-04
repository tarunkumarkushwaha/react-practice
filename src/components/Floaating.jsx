
export default function FloatingButton({
  onClick,
  position = "bottom-right",
}) {
  const positions = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <button
      onClick={onClick}
      className={`
        fixed
        ${positions[position]}
        z-50
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-blue-600
        text-white
        shadow-xl
        hover:bg-blue-700
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
      `}
    >
      +
    </button>
  );
}