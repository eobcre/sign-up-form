type ButtonProps = {
  name: string;
};

const GetStarted: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className='flex justify-center items-center mb-8 w-full'>
      <button className='bg-[#E85C7D] text-white text-sm rounded py-2.5'>
        {name}
      </button>
    </div>
  );
};

export default GetStarted;
