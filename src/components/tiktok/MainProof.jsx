// Lottie imports
import dynamic from "next/dynamic"; // This is for SSR compatibility
const ArrowLottie = dynamic(() => import("../lotties/ArrowLottie"), { ssr: false });
const SwipeLottie = dynamic(() => import("../lotties/SwipeLottie"), { ssr: false });

// Next.js imports
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

//Slider import
import ReactCompareImage from "react-compare-image";

export default function MainProof() {
    return (
        <>
            <Script src='https://unpkg.com/@cloudfour/image-compare/dist/index.min.js' />

            <h3 className='font-bricolage-800  text-xl font-normal text-center text-slate-700 my-8'>Proven Results</h3>
            <div className='flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-2 max-w-3xl md:mx-auto md:gap-4'>
                <p className='text-center font-bold md:mt-4 '> These programs are the result of years of research and refinement, designed to help you achieve your fitness goals and build lasting confidence.</p>
                <div className='flex justify-center mt-2'>
                    <image-compare className='' label-text='Screen Reader Label Text'>
                        <img className='w-[200px] h-[200px] rounded-xl md:w-[300px] md:h-[300px]' slot='image-1' alt='Alt Text' src='/tiktok/beach_before.PNG' />
                        <img className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-xl' slot='image-2' alt='Alt text' src='/tiktok/after.JPG' />
                    </image-compare>
                </div>
                <div>
                    <p className='text-center font-bold mt-2 md:-mt-48  md:font-normal '>My progress blew up once I consistently tracked each workout</p>
                    <ArrowLottie src='/lotties/trans_arrow.json' width={100} height={100} />
                </div>
                <div className='mx-auto mt-4'>
                    <Link href='#program'>
                        <button className='bg-orange-500 hover:bg-orange-800 text-white px-4 py-2 rounded-lg'>Get Your Own Program Now!</button>
                    </Link>
                    <p className='text-center font-medium text-slate-800/40'>
                        <span className='underline mt-2 decoration-red-500 decoration-2'>Limited</span> spots available
                    </p>
                </div>
            </div>
        </>
    );
}
