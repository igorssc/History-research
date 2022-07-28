interface VoteDescriptionCardProps {
  name: string;
  date: Date;
  vote: "Contra" | "A Favor" | "Não sei";
  description: string;
}

export const VoteDescriptionCard = ({
  name,
  date,
  vote,
  description,
}: VoteDescriptionCardProps) => {
  return (
    <div className="bg-black/70 hover:bg-black transition-colors flex flex-col rounded-xl p-7">
      <div className="flex flex-row justify-between">
        <strong className="text-lg">{name}</strong>
        <span className="text-sm">{date.toISOString()}</span>
      </div>
      <span className="text-base my-2">{vote}</span>
      <p className="mt-5 text-justify">{description}</p>
    </div>
  );
};
