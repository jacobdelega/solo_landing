// Nextjs Imports
import Image from "next/image";
import Link from "next/link";


export default function MainHero() {
    return (
        <div id='hero' className='max-w-4xl mx-auto max-h-screen'>
            <h1 className='text-center text-4xl font-bold text-slate-700 md:text-5xl'>
                Unlock Your Hidden Fitness <span className='underline underline-offset-4 decoration-4 decoration-orange-500'>Potential.</span>
            </h1>
            <div className='flex flex-col md:flex-row'>
                <Image className='w-[350px] h-[350px] md:w-[500px] md:h-[500px] mx-auto mt-4 rounded-lg' src='/tiktok/hero_circle.png' width={500} height={500} />
                <div className='flex items-center'>
                    <p className='mx-auto text-center font-semibold text-md md:text-xl md:max-w-xl -mt-8'>
                        Build Strength & Confidence<br></br>{" "}
                        <span className='font-normal mt-2'>Transform your physique and unlock your fitness goals with our personalized Excel workout programs. Build strength, confidence, and a healthier you. </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
