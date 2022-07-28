interface ResultCard {
  title: string;
  quantity: number;
  percentage: number;
}

export const ResultCard = ({ title, quantity, percentage }: ResultCard) => {
  return (
    <div className="bg-black/70 hover:bg-black transition-colors flex flex-col rounded-xl py-8">
      <span className="text-3xl lg:text-4xl">{quantity}</span>
      <span className="py-4">{percentage}</span>
      <span>{title}</span>
    </div>
  );
};