interface Props {
  label: string;
  selected: boolean;
}

export const Item = ({ label, selected }: Props) => {
  return selected ? (
    <div className=" bg-primary cursor-pointer pt-1 pb-1 rounded-r-full">
      <div className="ml-6 flex items-center gap-1">
        <div className="bg-groupWhiteIcon w-10 h-10" />
        <p className="font-bold text-white">{label}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-1 ml-6 cursor-pointer">
      <div className="bg-groupIcon w-8 h-8" />
      <p className="font-bold">{label}</p>
    </div>
  );
};
