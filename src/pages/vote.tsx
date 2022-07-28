import { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button";
import { VoteIcon } from "../components/VoteIcon";

const Vote: NextPage = () => {
  const [vote, setVote] = useState<null | "inFavor" | "against" | "noOpinion">(
    null
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

              fetch("./api/votes/", {
                method: "GET",
              }).then((response) => {
                console.log(response);
              });
            }}
            className="flex flex-col gap-20"
          >
            <div className="grid grid-cols-3">
              <VoteIcon
                nameInput="vote"
                title="A favor"
                value="inFavor"
                checked={vote === "inFavor"}
                onChange={setVote}
              />
              <VoteIcon
                nameInput="vote"
                title="Contra"
                value="against"
                checked={vote === "against"}
                onChange={setVote}
              />
              <VoteIcon
                nameInput="vote"
                title="Não sei"
                value="noOpinion"
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
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              text="Confirmar voto"
              className="w-96 max-w-full mx-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vote;
