import { useSearchParams } from "react-router-dom";
import ReactSelect, { SingleValue } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
  name: string;
};

const Filter = ({ options, name }: Props) => {
  const [params, setParams] = useSearchParams();
  const handleChange = (e: SingleValue<OptionType>) => {
    params.set(name, e?.value as string);
    setParams(params);
  };
  const selectedOpt = {
    label: params.get(name) || options[0].label,
    value: params.get(name) || options[0].value,
  };
  return (
    <div className="w-fit">
      <ReactSelect
        defaultValue={selectedOpt}
        onChange={handleChange}
        options={options}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default Filter;
