import Link from "next/link";

interface ItemMenuProps {
  title: string;
  to: string;
  active?: boolean;
}

export const ItemMenu = ({ title, to, active = false }: ItemMenuProps) => {
  if (active) {
    return (
      <Link href={to} className="py-4 px-2">
        <span className="text-green-500 cursor-pointer">{title}</span>
      </Link>
    );
  }

  return (
    <Link href={to} className="py-4 px-2">
      <span className="text-gray-100 cursor-pointer">{title}</span>
    </Link>
  );
};
