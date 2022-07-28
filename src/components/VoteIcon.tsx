import { Checks } from "phosphor-react";

interface VoteIconProps {
  title: string;
  value: string;
  checked: boolean;
  required?: boolean;
  onChange: (value: null | "inFavor" | "against" | "noOpinion") => void;
}

export const VoteIcon = ({
  title,
  value,
  checked,
  required = false,
  onChange,
}: VoteIconProps) => {
  return (
    <div className="mx-auto w-28 h-28 md:w-40 md:h-40 block">
      <input
        type="radio"
        id={`vote-${value}`}
        value={value}
        className="hidden peer"
        checked={checked}
        required={required}
        onChange={(event) =>
          onChange(
            event.target.value as null | "inFavor" | "against" | "noOpinion"
          )
        }
      />
      <label
        htmlFor={`vote-${value}`}
        className="text-black text-xl md:text-3xl font-bold w-full h-full bg-white/70 peer-checked:bg-white peer-checked:border-8 peer-checked:border-green-700/80 hover:bg-white cursor-pointer transition-colors rounded-full flex flex-col flex-1 items-center justify-center"
      >
        {title}
      </label>
      <Checks
        size={50}
        className="relative left-12 -top-14 md:left-20 md:-top-16 text-black hidden peer-checked:block"
      />
    </div>
  );
};
