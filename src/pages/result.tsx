import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useEffect } from "react";
import { ResultCard } from "../components/ResultCard";
import { VoteDescriptionCard } from "../components/VoteDescriptionCard";
import {
  getVotesQueryResponseDev,
  getVotesQueryResponseProd,
  GET_VOTES,
} from "../db/getVotes";

type getVotesQueryResponse<T> = T extends true
  ? getVotesQueryResponseDev
  : getVotesQueryResponseProd;

const isDevelopment = process.env.NODE_ENV === "development" ? true : undefined;

const calcPercent = (value: number, total: number) => {
  return +((value * 100) / total).toFixed(2);
};

const Result: NextPage = () => {
  const { data, refetch } =
    useQuery<getVotesQueryResponse<typeof isDevelopment>>(GET_VOTES);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data)
    return (
      <div className="bg-cavalry bg-cover bg-fixed bg-center min-h-screen">
        <div className="min-h-screen bg-black/75"></div>
      </div>
    );

  return (
    <div className="bg-cavalry bg-cover bg-fixed bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-3 md:px-5 xl:px-0 pb-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl py-14 lg:py-20 text-center">
            Resultado da enquete
          </h1>
          <div className="grid grid-cols-3 gap-3 lg:gap-10 text-center py-0 lg:py-14">
            <ResultCard
              title="Favoráveis"
              quantity={
                isDevelopment
                  ? data.inFavor.length
                  : data.votesInFavor.aggregate.count
              }
              percentage={
                calcPercent(
                  isDevelopment
                    ? data.inFavor.length
                    : data.votesInFavor.aggregate.count,
                  isDevelopment
                    ? data.allVotes.length
                    : data.totalVotes.aggregate.count
                ) || 0
              }
            />
            <ResultCard
              title="Contras"
              quantity={
                isDevelopment
                  ? data.against.length
                  : data.votesAgainst.aggregate.count
              }
              percentage={
                calcPercent(
                  isDevelopment
                    ? data.against.length
                    : data.votesAgainst.aggregate.count,
                  isDevelopment
                    ? data.allVotes.length
                    : data.totalVotes.aggregate.count
                ) || 0
              }
            />
            <ResultCard
              title="Não souberam"
              quantity={
                isDevelopment
                  ? data.noOpinion.length
                  : data.votesNoOpinion.aggregate.count
              }
              percentage={
                calcPercent(
                  isDevelopment
                    ? data.noOpinion.length
                    : data.votesNoOpinion.aggregate.count,
                  isDevelopment
                    ? data.allVotes.length
                    : data.totalVotes.aggregate.count
                ) || 0
              }
            />
          </div>
          <div className="mt-20 flex flex-col gap-8">
            {data[isDevelopment ? "allVotes" : "votes"].map((vote) => (
              <VoteDescriptionCard
                key={vote.id}
                name={vote.name}
                date={new Date(vote.createdAt)}
                vote={vote.vote}
                description={vote.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
