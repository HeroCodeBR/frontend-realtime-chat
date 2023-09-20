import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/auth.hooks';
import { useMessage } from '../../hooks/message.hooks';
import { IUsers } from '../../interfaces/users.interface';
import { searchSuggestions, uploadImage } from '../../services/user.service';

export function Navbar() {
  const [sugestions, setSugestions] = useState<IUsers[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { user, singOut } = useAuth();
  const { setDestinatary } = useMessage();
  const [fileUpload, setFileUpload] = useState<string>(() => {
    if (user?.avatar_url) {
      const urlAvatar = 'http://localhost:3333/uploads/' + user.avatar_url;
      return urlAvatar;
    }
    return 'https://www.inteligenciadevida.com.br/site23/wp-content/uploads/2022/12/d1f3e0055b9ae5f012cd4441d077b9e9.png';
  });

  const handleSearch = async (value: string) => {
    setInputValue(value);
    try {
      const response = await searchSuggestions(value);

      setSugestions(response);
    } catch (error) {
      console.log('🚀 ~ file: Navbar.tsx:14 ~ handleSearch ~ error:', error);
    }
  };

  const { mutate: mutateAvatar } = useMutation(uploadImage, {
    onSuccess: (data) => {
      toast.success('Avatar atualizado com sucesso!');
    },
  });
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const image = files[0];
    const imageUrl = URL.createObjectURL(image);
    setFileUpload(imageUrl);
    const formData = new FormData();
    formData.append('image', image);
    mutateAvatar(formData);
  };
  const handleSelect = (suggestion: IUsers) => {
    setSugestions([]);
    setInputValue(suggestion.email);
    setDestinatary(suggestion);
  };
  return (
    <div className="flex items-center bg-blue-50 p-4 justify-between">
      <div className="flex items-center">
        {fileUpload && (
          <div className="relative">
            <input
              type="file"
              className="absolute opacity-0 cursor-pointer w-full h-full"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleImage(e)}
            />
            <div
              className="rounded-full w-[40px] h-[40px] cursor-pointer"
              style={{
                backgroundImage: `url(${fileUpload})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        )}
        <p className="text-sm ml-2">{user?.name} (você)</p>
      </div>
      <div className="relative flex flex-col">
        <input
          type="email"
          placeholder="digite o email..."
          className="bg-white rounded px-3 py-1"
          value={inputValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {sugestions.length > 0 && (
          <ul className="rounded bg-white shadow absolute mt-8 w-full">
            {sugestions.map((sugestion, index) => (
              <li
                className="p-2 cursor-pointer hover:bg-gray-100"
                key={index}
                onClick={() => handleSelect(sugestion)}
              >
                {sugestion.email}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="cursor-pointer" onClick={singOut}>
        Sair
      </p>
    </div>
  );
}
