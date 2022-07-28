import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="bg-home bg-cover bg-center min-h-screen">
      <div className="min-h-screen bg-black/75">
        <div className="max-w-[1280px] mx-auto px-3 md:px-5 xl:px-0 pb-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl py-14 lg:py-20 text-center">
            Você é a favor da Intervenção Militar no País?
          </h1>
          <p className="py-0 lg:py-14 text-base lg:text-xl text-justify lg:text-center">
            Esta enquete foi criada em função de um trabalho de história, com
            intuito de saber o que as pessoas pensam sobre a ditadura militar. A
            partir do atual contexto político, muitas pessoas cogitam a ideia da
            volta do regime militar. Esperamos que você contribua com essa
            enquete e deixe aqui sua opinião e comentário. Se você não tem
            conhecimento sobre o assunto,{" "}
            <Link href="/details">
              <span className="underline underline-offset-4 hover:text-gray-300 cursor-pointer">
                Clique aqui
              </span>
            </Link>{" "}
            para saber sobre o período em que os militares tomaram conta do
            país.
          </p>
          <div className="flex mt-10 flex-col md:flex-row w-full justify-around gap-10">
            <Link href="/vote">
              <span className="mx-auto">
                <Button
                  text="Participe da enquete"
                  className="w-96 max-w-full"
                />
              </span>
            </Link>
            <Link href="/result">
              <span className="mx-auto">
                <Button
                  text="Resultado da enquete"
                  className="w-96 max-w-full"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
