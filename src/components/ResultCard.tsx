interface ResultCard {
  title: string;
  quantity: number;
  percentage: number;
}

export const ResultCard = ({ title, quantity, percentage }: ResultCard) => {
  return (
    <div className="bg-black/70 hover:bg-black transition-colors flex flex-col rounded-xl py-8">
      <span className="text-3xl lg:text-4xl text-green-500">{quantity}</span>
      <span className="py-4 text-xs md:text-sm lg:text-base">
        {percentage}%
      </span>
      <span className="text-xs sm:text-sm md:text-base uppercase">{title}</span>
    </div>
  );
};
