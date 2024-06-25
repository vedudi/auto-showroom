type Props = {
  children: string;
};

const Warnings = ({ children }: Props) => {
  return (
    <div className="warn-container">
      <h2>{children}</h2>
    </div>
  );
};

export default Warnings;
