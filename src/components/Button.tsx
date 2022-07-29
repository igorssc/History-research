import { HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export const Button = ({
  text,
  type = "button",
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`py-6 px-20 bg-black/70 rounded hover:bg-black transition-colors border-2 uppercase border-double border-green-500 text-green-400 disabled:cursor-not-allowed ${className}`}
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
};
