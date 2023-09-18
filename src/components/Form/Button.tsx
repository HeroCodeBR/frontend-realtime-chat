interface IButtonProps {
  title: string;
}

export function Button({ title }: IButtonProps) {
  return (
    <button className="border-none py-3 px-4 bg-blue text-white w-full rounded mb-3">
      {title}
    </button>
  );
}
