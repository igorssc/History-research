import { gql, useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useSnackbar } from "notistack";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { VoteIcon } from "../components/VoteIcon";

const CREATE_VOTE = gql`
  mutation CreateVote($name: String!, $vote: String!, $description: String!) {
    createVote(data: { name: $name, vote: $vote, description: $description }) {
      id
    }
  }
`;

interface createVoteMutationResponse {
  id: string;
}

const Vote: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [vote, setVote] = useState<null | "inFavor" | "against" | "noOpinion">(
    null
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [mutateFunction, { data, loading, error }] =
    useMutation<createVoteMutationResponse>(CREATE_VOTE);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!vote) {
      enqueueSnackbar("Por favor, escolha seu voto", { variant: "warning" });
      return;
    }
    if (!name) {
      enqueueSnackbar("Por favor, insira seu nome", { variant: "warning" });
      return;
    }
    if (!description) {
      enqueueSnackbar("Por favor, nos dia o motivo de sua opinião", {
        variant: "warning",
      });
      return;
    }

    mutateFunction({ variables: { name, vote, description } });
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="bg-dictatorship bg-cover bg-fixed bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-5 xl:px-0 pb-20">
          <h1 className="text-2xl lg:text-3xl py-20 text-center">
            Qual a sua opinião sobre a intervenção dos militares?
          </h1>
          <form
            action="#"
            onSubmit={(event) => {
              event.preventDefault();

              console.log({
                name,
                vote,
                description,
              });

              submitForm(event);
            }}
            className="flex flex-col gap-20"
          >
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
              disabled={!loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vote;
