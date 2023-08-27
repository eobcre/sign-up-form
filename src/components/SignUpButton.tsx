import { Icon } from '@iconify/react';

const SignUpButton: React.FC = () => {
  return (
    <div>
      <button className='flex items-center gap-8 bg-[#5B87E8] text-white rounded pl-1.5 pr-7 py-1.5'>
        <Icon
          icon='flat-color-icons:google'
          className='bg-white rounded p-1 w-[30px] h-[30px]'
        />
        <p className='text-sm'>Sign up with Google</p>
      </button>
    </div>
  );
};

export default SignUpButton;
