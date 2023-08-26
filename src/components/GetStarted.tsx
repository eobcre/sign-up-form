type ButtonProps = {
  name: string;
};

const GetStarted: React.FC<ButtonProps> = ({ name }) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};

export default GetStarted;
