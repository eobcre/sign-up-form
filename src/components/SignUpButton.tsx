import { Icon } from '@iconify/react';

const SignUpButton: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <button className='flex items-center gap-8 bg-[#5B87E8] text-white rounded pl-1.5 py-1.5 w-full'>
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
