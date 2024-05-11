// Nextjs imports
import Image from 'next/image';

export default function Page() {
    return (
        <div className='flex justify-between items-center bg-slate-100 mx-2 rounded-xl mt-2'>
            <div className='left flex items-center bg-inherit rounded-xl'>
                <Image className='m-2 w-[40px] bg-inherit' src='/tiktok/icons/squat.png' width={25} height={25} alt='Transformation proof' />
                <div className='flex flex-col bg-inherit'>
                    <p className='bg-inherit font-semibold'>Squat</p>
                    <p className='bg-inherit font-light -mt-1 text-slate-700/40'>175lbs</p>
                </div>
            </div>
            <div className='bg-inherit mr-2'>
                <p className='bg-inherit font-semibold text-green-400'>+230%</p>
                <p className='bg-inherit font-light -mt-1 text-slate-700/40'>530lbs</p>
            </div>
        </div>
    );
}
