const Form: React.FC = () => {
  return (
    <div>
      <form>
        <p className='border-line flex justify-center items-center text-[12px] text-[#B4B4B4] uppercase py-8'>
          Or Sign Up With Email
        </p>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' placeholder='Eg. Mary Olhson' />

        <label htmlFor='name'>Email Address</label>
        <input type='text' id='name' placeholder='your@email.com' />
      </form>
    </div>
  );
};

export default Form;
