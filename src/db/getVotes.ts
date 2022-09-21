import { gql } from "@apollo/client";

const isDevelopment = process.env.NODE_ENV === "development";

export const GET_VOTES = gql`
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

export interface getVotesQueryResponseDev {
  allVotes: {
    id: string;
    name: string;
    vote: "inFavor" | "against" | "noOpinion";
    description: string;
    createdAt: string;
  }[];
  votes: never;
  votesInFavor: never;
  votesAgainst: never;
  votesNoOpinion: never;
  totalVotes: never;
  inFavor: {
    id: string;
  }[];
  against: {
    id: string;
  }[];
  noOpinion: {
    id: string;
  }[];
}

export interface getVotesQueryResponseProd {
  allVotes: {
    id: string;
    name: string;
    vote: "inFavor" | "against" | "noOpinion";
    description: string;
    createdAt: string;
  }[];
  votes: never;
  inFavor: never;
  against: never;
  noOpinion: never;
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
