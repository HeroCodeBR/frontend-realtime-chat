export function ListContacts() {
  return (
    <div className="flex p-4 justify-between shadow-sm items-center rounded-lg">
      <div className="flex items-center">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=rcqPv1QesDcDYNbE_66rv9B4P1f0KmJTxM3oMrnyBQI="
            alt=""
            className="rounded-full w-[60px] h-[60px] "
          />
          <div className="bg-green right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full"></div>
        </div>
        <div className="ml-4">
          <p className="text-normal text-black font-semibold">Name</p>
          <p className="text-sm text-gray-200 ">message</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-sm text-gray-200">10:58 AM</span>
        <div className="w-[20px] h-[20px]  rounded-full bg-blue flex items-center">
          <span className="text-white text-center w-full text-[10px]">1</span>
        </div>
      </div>
    </div>
  );
}
