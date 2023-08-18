export function Header() {
  return (
    <header className="flex items-center px-4 py-8 border-gray-100 bg-blue-200">
      <div className="relative mr-3">
        <img
          src="https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=rcqPv1QesDcDYNbE_66rv9B4P1f0KmJTxM3oMrnyBQI="
          alt=""
          className="rounded-full w-[60px] h-[60px] "
        />
        <div className="bg-green right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full"></div>
      </div>
      <div>
        <p className="text-zinc-800 font-semibold text-normal">Name User</p>
        <p className="text-neutral-400 text-sm font-light truncate">Online</p>
      </div>
    </header>
  );
}
