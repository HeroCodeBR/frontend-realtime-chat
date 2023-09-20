import { useState } from 'react';
import { useMessage } from '../../hooks/message.hooks';

export function Header() {
  const { destinatary } = useMessage();
  const [imageUrl, setImageUrl] = useState<string>(() => {
    if (destinatary?.avatar_url) {
      const urlAvatar = `http://localhost:3333/uploads/${destinatary.avatar_url}`;
      return urlAvatar;
    }
    return 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=rcqPv1QesDcDYNbE_66rv9B4P1f0KmJTxM3oMrnyBQI=';
  });
  console.log('🚀 ~ file: Header.tsx:13 ~ Header ~ imageUrl:', imageUrl);

  return (
    <header className="flex items-center px-4 py-8 border-gray-100 bg-blue-200">
      <div className="relative mr-3">
        <div
          className="rounded-full w-[60px] h-[60px]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="bg-green right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full"></div>
      </div>
      <div>
        <p className="text-zinc-800 font-semibold text-normal">
          {destinatary?.name} - {destinatary?.email}
        </p>
        <p className="text-neutral-400 text-sm font-light truncate">Online</p>
      </div>
    </header>
  );
}
