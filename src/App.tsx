import Title from './components/Title';
import SignUpButton from './components/SignUpButton';
import Form from './components/Form';
import GetStarted from './components/GetStarted';
import Sub from './components/Sub';

const App: React.FC = () => {
  return (
    <div>
      <Title />
      <SignUpButton />
      <Form />
      <GetStarted name='Get Started' />
      <Sub />
    </div>
  );
};

export default App;
