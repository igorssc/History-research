import { gql, useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { VoteIcon } from "../components/VoteIcon";

const isDevelopment = process.env.NODE_ENV === "development";

const CREATE_VOTE = isDevelopment
  ? gql`
      mutation CreateVote(
        $name: String!
        $vote: String!
        $description: String!
        $createdAt: String!
      ) {
        createVote(
          name: $name
          vote: $vote
          description: $description
          createdAt: $createdAt
        ) {
          id
        }
      }
    `
  : gql`
      mutation CreateVote(
        $name: String!
        $vote: String!
        $description: String!
      ) {
        createVote(
          data: { name: $name, vote: $vote, description: $description }
        ) {
          id
        }
      }
    `;

const PUBLISH_VOTE = gql`
  mutation PublishVote($id: ID!) {
    publishVote(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

interface publishVoteMutationResponse {
  publishVote: { id: string };
}

interface createVoteMutationResponse {
  createVote: { id: string };
}

const Vote: NextPage = () => {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [vote, setVote] = useState<null | "inFavor" | "against" | "noOpinion">(
    null
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [IsButtonDisabled, setIsButtonDisabled] = useState(false);

  const [createVoteMutateFunction] =
    useMutation<createVoteMutationResponse>(CREATE_VOTE);

  const [publishVoteMutateFunction] =
    useMutation<publishVoteMutationResponse>(PUBLISH_VOTE);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsButtonDisabled(true);

    if (!vote) {
      enqueueSnackbar("Por favor, escolha seu voto", { variant: "warning" });
      setIsButtonDisabled(false);
      return;
    }
    if (!name) {
      enqueueSnackbar("Por favor, insira seu nome", { variant: "warning" });
      setIsButtonDisabled(false);
      return;
    }
    if (!description) {
      enqueueSnackbar("Por favor, nos dia o motivo de sua opinião", {
        variant: "warning",
      });
      setIsButtonDisabled(false);
      return;
    }

    try {
      await createVoteMutateFunction({
        variables: { name, vote, description, createdAt: new Date() },
      }).then(async ({ data }) => {
        !isDevelopment &&
          (await publishVoteMutateFunction({
            variables: {
              id: (data as createVoteMutationResponse).createVote.id,
            },
          }));

        setVote(null);
        setName("");
        setDescription("");

        enqueueSnackbar("Voto registrado com sucesso", {
          variant: "success",
        });

        setIsButtonDisabled(false);

        push("/result");
      });
    } catch {
      enqueueSnackbar("Ocorreu um erro! Tente novamente mais tarde.", {
        variant: "error",
      });

      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="bg-dictatorship bg-cover bg-fixed bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-3 md:px-5 xl:px-0 pb-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl py-14 lg:py-20 text-center">
            Qual a sua opinião sobre a intervenção dos militares?
          </h1>
          <form onSubmit={submitForm} className="flex flex-col gap-20">
            <div className="grid grid-cols-3">
              <VoteIcon
                title="A favor"
                value="inFavor"
                required
                checked={vote === "inFavor"}
                onChange={setVote}
              />
              <VoteIcon
                title="Contra"
                value="against"
                required
                checked={vote === "against"}
                onChange={setVote}
              />
              <VoteIcon
                title="Não sei"
                value="noOpinion"
                required
                checked={vote === "noOpinion"}
                onChange={setVote}
              />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  className="p-3 rounded text-black"
                  value={name}
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  placeholder="Nos diga o motivo da sua opinião"
                  className="p-3 rounded text-black"
                  rows={10}
                  value={description}
                  required
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              text="Confirmar voto"
              className="w-96 max-w-full mx-auto"
              disabled={IsButtonDisabled}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vote;
