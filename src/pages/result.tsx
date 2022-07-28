import { gql } from "@apollo/client";
import { NextPage } from "next";
import { ResultCard } from "../components/ResultCard";
import { VoteDescriptionCard } from "../components/VoteDescriptionCard";
import { client } from "../lib/apollo";

const GET_VOTES = gql`
  query votes {
    votes(orderBy: createdAt_DESC) {
      id
      name
      vote
      description
      createdAt
    }

    votesInFavor: votesConnection(where: { vote: "A favor" }) {
      aggregate {
        count
      }
    }

    votesAgainst: votesConnection(where: { vote: "Contra" }) {
      aggregate {
        count
      }
    }

    votesNoOpinion: votesConnection(where: { vote: "Não sei" }) {
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
    vote: "Contra" | "A favor" | "Não sei";
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

const Result: NextPage<getVotesQueryResponse> = ({
  votes,
  votesInFavor,
  votesAgainst,
  votesNoOpinion,
  totalVotes,
}) => {
  console.log(votes);

  return (
    <div className="bg-cavalry bg-cover bg-fixed bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-5 xl:px-0 pb-20">
          <h1 className="text-2xl lg:text-3xl py-20 text-center">
            Resultado parcial da enquete
          </h1>
          <div className="grid grid-cols-3 gap-3 lg:gap-10 text-center py-0 lg:py-14">
            <ResultCard
              title="Favoráveis"
              quantity={votesInFavor.aggregate.count}
              percentage={calcPercent(
                votesInFavor.aggregate.count,
                totalVotes.aggregate.count
              )}
            />
            <ResultCard
              title="Contras"
              quantity={votesAgainst.aggregate.count}
              percentage={calcPercent(
                votesAgainst.aggregate.count,
                totalVotes.aggregate.count
              )}
            />
            <ResultCard
              title="Não souberam"
              quantity={votesNoOpinion.aggregate.count}
              percentage={calcPercent(
                votesNoOpinion.aggregate.count,
                totalVotes.aggregate.count
              )}
            />
          </div>
          <div className="mt-20 flex flex-col gap-8">
            {votes.map((vote) => (
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

export async function getServerSideProps() {
  const { data } = await client.query<getVotesQueryResponse>({
    query: GET_VOTES,
  });

  return {
    props: {
      votes: data.votes,
      votesInFavor: data.votesInFavor,
      votesAgainst: data.votesAgainst,
      votesNoOpinion: data.votesNoOpinion,
      totalVotes: data.totalVotes,
    },
  };
}

export default Result;
