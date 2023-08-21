import { useState } from 'react';
import { IUsers } from '../../interfaces/UsersInterface';
import { api } from '../../server/api';

export function Navbar() {
  const [sugestions, setSugestions] = useState<IUsers[]>([]);
  const handleSearch = async (value: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token || token === '') {
        throw new Error('Token not found');
      }
      const response = await api.get<IUsers[]>(`/users/filter/${value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSugestions(response.data);
    } catch (error) {
      console.log('🚀 ~ file: Navbar.tsx:14 ~ handleSearch ~ error:', error);
    }
  };
  return (
    <div className="flex items-center bg-blue-50 p-4 justify-between">
      <div className="flex items-center">
        <img
          src="https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=rcqPv1QesDcDYNbE_66rv9B4P1f0KmJTxM3oMrnyBQI="
          alt=""
          className="rounded-full w-[40px] h-[40px] "
        />
        <p className="text-sm ml-2">Alexia Kattah (você)</p>
      </div>
      <div className="relative flex flex-col">
        <input
          type="email"
          placeholder="digite o email..."
          className="bg-white rounded px-3 py-1"
          value={''}
          onChange={(e) => void handleSearch(e.target.value)}
        />
        {sugestions.length > 0 && (
          <ul className="rounded bg-white shadow absolute mt-8 w-full">
            {sugestions.map((sugestion, index) => (
              <li className="p-2 cursor-pointer hover:bg-gray-100" key={index}>
                {sugestion.email}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>Sair</p>
    </div>
  );
}
