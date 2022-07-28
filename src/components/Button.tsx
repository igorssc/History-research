interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export const Button = ({ text, type = "button", className }: ButtonProps) => {
  return (
    <button
      className={`py-6 px-20 bg-black/70 rounded hover:bg-black transition-colors border-2 uppercase border-double border-gray-300 ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};
