import Title from './components/Title';
import SignUpButton from './components/SignUpButton';
import Form from './components/Form';
import GetStarted from './components/GetStarted';
import Sub from './components/Sub';

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center bg-[#B8B6CD] h-screen'>
      <div className='flex flex-col items-center bg-white rounded w-[320px] h-[480px]'>
        <Title />
        <div className='px-12'>
          <SignUpButton />
          <Form />
          <GetStarted name='Get Started' />
        </div>
        <Sub />
      </div>
    </div>
  );
};

export default App;
