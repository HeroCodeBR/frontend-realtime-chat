import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { placeholder, error, ...rest },
  ref,
) => {
  return (
    <div className=" mb-4 ">
      <input
        ref={ref}
        {...rest}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded border border-neutral-200"
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
