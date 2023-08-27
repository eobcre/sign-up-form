import { Icon } from '@iconify/react';

const SignUpButton: React.FC = () => {
  return (
    <div>
      <button className='flex items-center gap-8 bg-[#5B87E8] text-white font-arial rounded pl-1 pr-7 py-2'>
        <Icon
          icon='flat-color-icons:google'
          className='bg-white rounded p-2 w-[38px] h-[38px]'
        />
        Sign up with Google
      </button>
    </div>
  );
};

export default SignUpButton;
