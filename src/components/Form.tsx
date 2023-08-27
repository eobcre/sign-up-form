const Form: React.FC = () => {
  return (
    <div className='py-8'>
      <form>
        <p className='border-line flex justify-center items-center text-[12px] text-[#B4B4B4] uppercase pb-3'>
          Or Sign Up With Email
        </p>
        <div>
          <label htmlFor='name' className='text-sm'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Eg. Mary Olhson'
            className='text-sm border rounded mb-3 px-4 py-2 w-[225px]'
          />
        </div>
        <div>
          <label htmlFor='name' className='text-sm'>
            Email Address
          </label>
          <input
            type='text'
            id='name'
            placeholder='your@email.com'
            className='text-sm border rounded px-4 py-2 w-[225px]'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
