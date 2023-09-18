import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { placeholder, ...rest },
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
    </div>
  );
};

export const Input = forwardRef(InputBase);
