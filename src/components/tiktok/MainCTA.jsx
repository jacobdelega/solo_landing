import Link from 'next/link';

export default function MainCTA() {
    return (
        <div className=''>
            <div className=''>
                <h3 className='text-xl font-bold text-center text-slate-700 mt-8'>Imagine a stronger, more confident you. Are you ready to make it happen?</h3>
                <div className='flex justify-center mt-4'>
                    <Link href='#program'>
                        <button className='hover:bg-orange-800 bg-orange-500 text-white px-4 py-2 rounded-lg'>View Programs</button>
                    </Link>
                </div>
                 
                <p className='text-center font-medium -mt-6 text-slate-800/40'>
                    <span className='underline decoration-red-500 decoration-2'>ALL</span> 20% off
                </p>
            </div>
        </div>
    );
}
