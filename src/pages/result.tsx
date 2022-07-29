import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useEffect } from "react";
import { ResultCard } from "../components/ResultCard";
import { VoteDescriptionCard } from "../components/VoteDescriptionCard";

const GET_VOTES = gql`
  query votes {
    votes(orderBy: createdAt_DESC, first: 5000) {
      id
      name
      vote
      description
      createdAt
    }

    votesInFavor: votesConnection(where: { vote: "inFavor" }) {
      aggregate {
        count
      }
    }

    votesAgainst: votesConnection(where: { vote: "against" }) {
      aggregate {
        count
      }
    }

    votesNoOpinion: votesConnection(where: { vote: "noOpinion" }) {
      aggregate {
        count
      }
    }

    totalVotes: votesConnection {
      aggregate {
        count
      }
    }
  }
`;

interface getVotesQueryResponse {
  votes: {
    id: string;
    name: string;
    vote: "inFavor" | "against" | "noOpinion";
    description: string;
    createdAt: string;
  }[];
  votesInFavor: {
    aggregate: {
      count: number;
    };
  };
  votesAgainst: {
    aggregate: {
      count: number;
    };
  };
  votesNoOpinion: {
    aggregate: {
      count: number;
    };
  };
  totalVotes: {
    aggregate: {
      count: number;
    };
  };
}

const calcPercent = (value: number, total: number) => {
  return +((value * 100) / total).toFixed(2);
};

const Result: NextPage = () => {
  const { data, refetch } = useQuery<getVotesQueryResponse>(GET_VOTES);

  useEffect(() => {
    refetch();
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
              quantity={data.votesInFavor.aggregate.count}
              percentage={
                calcPercent(
                  data.votesInFavor.aggregate.count,
                  data.totalVotes.aggregate.count
                ) || 0
              }
            />
            <ResultCard
              title="Contras"
              quantity={data.votesAgainst.aggregate.count}
              percentage={
                calcPercent(
                  data.votesAgainst.aggregate.count,
                  data.totalVotes.aggregate.count
                ) || 0
              }
            />
            <ResultCard
              title="Não souberam"
              quantity={data.votesNoOpinion.aggregate.count}
              percentage={
                calcPercent(
                  data.votesNoOpinion.aggregate.count,
                  data.totalVotes.aggregate.count
                ) || 0
              }
            />
          </div>
          <div className="mt-20 flex flex-col gap-8">
            {data.votes.map((vote) => (
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
