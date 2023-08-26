const Form: React.FC = () => {
  return (
    <div>
      <form>
        <p className='form-title'>Or Sign Up With Email</p>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' placeholder='Eg. Mary Olhson' />

        <label htmlFor='name'>Email Address</label>
        <input type='text' id='name' placeholder='your@email.com' />
      </form>
    </div>
  );
};

export default Form;
