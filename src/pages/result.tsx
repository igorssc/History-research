import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { ResultCard } from "../components/ResultCard";
import { VoteDescriptionCard } from "../components/VoteDescriptionCard";

const GET_VOTES = gql`
  {
    votes(orderBy: createdAt_DESC) {
      id
      name
      vote
      description
      createdAt
    }
  }
`;

interface getVotesQueryResponse {
  votes: {
    id: string;
    name: string;
    vote: string;
    description: string;
    createdAt: string;
  }[];
}

const Result: NextPage = () => {
  const { data } = useQuery<getVotesQueryResponse>(GET_VOTES);

  console.log(data);

  return (
    <div className="bg-cavalry bg-cover bg-fixed bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-5 xl:px-0 pb-20">
          <h1 className="text-2xl lg:text-3xl py-20 text-center">
            Resultado parcial da enquete
          </h1>
          <div className="grid grid-cols-3 gap-3 lg:gap-10 text-center py-0 lg:py-14">
            <ResultCard title="Favoráveis" quantity={31} percentage={38} />
            <ResultCard title="Contras" quantity={31} percentage={38} />
            <ResultCard title="Não souberam" quantity={31} percentage={38} />
          </div>
          <div className="mt-20 flex flex-col gap-8">
            <VoteDescriptionCard
              name="Igor Santos"
              date={new Date("07/06/2017")}
              vote="Contra"
              description="Porque é arbitrário, elimina a participação da sociedade, o que significa um empobrecimento cultural. O que deve prevalecer não é a força das armas, mas das ideias, das propostas dos diálogos com as divergências. Sem liberdade de expressão e de poder de decisão, não pode existir justiça. O poder deve ser alcançado por métodos democráticos. e, uma vez assumido, tem a obrigação de prestar contas à sociedade. No militarismo não tem conversa, as decisões são impostas pela opressão e pelas armas. A prova maior é que foi uma experiência, sob o ponto de vista da humanização, do estabelecimento da justiça, do crescimento econômico, cultural e humano, extremamente negativa."
            />
            <VoteDescriptionCard
              name="Igor Santos"
              date={new Date("07/06/2017")}
              vote="Contra"
              description="Porque é arbitrário, elimina a participação da sociedade, o que significa um empobrecimento cultural. O que deve prevalecer não é a força das armas, mas das ideias, das propostas dos diálogos com as divergências. Sem liberdade de expressão e de poder de decisão, não pode existir justiça. O poder deve ser alcançado por métodos democráticos. e, uma vez assumido, tem a obrigação de prestar contas à sociedade. No militarismo não tem conversa, as decisões são impostas pela opressão e pelas armas. A prova maior é que foi uma experiência, sob o ponto de vista da humanização, do estabelecimento da justiça, do crescimento econômico, cultural e humano, extremamente negativa."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
