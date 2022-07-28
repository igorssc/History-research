import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface VoteDescriptionCardProps {
  name: string;
  date: Date;
  vote: "Contra" | "A favor" | "Não sei";
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
      <div className="flex flex-row justify-between items-center">
        <strong className="text-lg">{name}</strong>
        <span className="text-sm capitalize hidden md:block">
          {format(date, "E' • 'd' de 'MMMM' • 'k'h'mm", {
            locale: ptBR,
          })}
        </span>
        <span className="text-sm capitalize block md:hidden">
          {format(date, "d'/'MM'/'yyyy", {
            locale: ptBR,
          })}
        </span>
      </div>
      <span className="text-base my-2">{vote}</span>
      <p className="mt-5 text-justify">{description}</p>
    </div>
  );
};
