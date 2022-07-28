import { Checks } from "phosphor-react";

interface VoteIconProps {
  title: string;
  value: string;
  nameInput: string;
  checked: boolean;
  onChange: (value: null | "inFavor" | "against" | "noOpinion") => void;
}

export const VoteIcon = ({
  title,
  value,
  nameInput,
  checked,
  onChange,
}: VoteIconProps) => {
  return (
    <div className="mx-auto w-40 h-40 block">
      <input
        type="radio"
        id={`vote-${value}`}
        name={nameInput}
        value={value}
        className="hidden peer"
        checked={checked}
        onChange={(event) =>
          onChange(
            event.target.value as null | "inFavor" | "against" | "noOpinion"
          )
        }
      />
      <label
        htmlFor={`vote-${value}`}
        className="text-black text-3xl font-bold w-40 h-40 bg-white/70 peer-checked:bg-white peer-checked:border-8 peer-checked:border-green-700/80 hover:bg-white cursor-pointer transition-colors rounded-full flex flex-col items-center justify-center"
      >
        {title}
      </label>
      <Checks
        size={50}
        className="relative left-20 -top-16 text-black hidden peer-checked:block"
      />
    </div>
  );
};
