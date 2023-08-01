interface IInputProps {
  placeholder: string;
}

export function Input({ placeholder }: IInputProps) {
  return (
    <div className=" mb-4 ">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded border border-neutral-200"
      />
    </div>
  );
}
