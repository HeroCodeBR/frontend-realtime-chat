import { Link } from 'react-router-dom';

interface ITextProps {
  text: string;
  link: string;
  textRedirect: string;
}
export function TextRedirect({ text, link, textRedirect }: ITextProps) {
  return (
    <p className="text-base font-semibold text-black">
      {text}{' '}
      <span className="text-blue">
        <Link to={link}>{textRedirect}</Link>
      </span>
    </p>
  );
}
