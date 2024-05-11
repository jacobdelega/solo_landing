"use client";

// Next.js imports
import Image from "next/image";
import Link from "next/link";
// React imports
import React from "react";

// Local imports
import Navbar from "@/components/Navbar";
import Hero from "@/components/tiktok/MainHero";
import Review from "@/components/tiktok/MainReview";
import Proof from "@/components/tiktok/MainProof";
import MainCTA from "@/components/tiktok/MainCTA";
import MainBreakdown from "@/components/tiktok/MainBreakdown";
import SquatDiff from "@/components/tiktok/SquatDiff";
import BenchDiff from "@/components/tiktok/BenchDiff";
import DeadliftDiff from "@/components/tiktok/DeadliftDiff";

// Lottie imports
import dynamic from "next/dynamic"; // This is for SSR(Server sided rendering) compatibility
const ArrowLottie = dynamic(() => import("../components/lotties/ArrowLottie"), { ssr: false }); // CLIENT ONLY

export default function page() {
    return (
        <>
            <div className='mx-2'>
                {/* Nav bar section */}
                <Navbar />

                {/* Main hero section */}
                <Hero />

                {/* Review section */}
                <Review />

                {/* Call to action section */}
                <MainCTA />

                {/* Proof section */}
                <Proof />

                {/* Mobile card */}

                <h3 className='mt-4 font-bricolage-800 text-xl font-normal text-center text-slate-700 md:-mt-16'>Strength training</h3>
                <p className='text-center font-bold'> This was my priorty when training and its showed the most results.</p>

                <div className='mt-4 max-w-2xl flex flex-col mx-auto md:flex-row md:gap-8 md:items-center'>
                    <div className='flex justify-center mt-4 md:justify-start'>
                        <Image className='w-[250px] h-[300px] md:w aspect-auto mt-2 rounded-lg ' src='/tiktok/comp_after.png' width={250} height={300} />
                    </div>
                    {/* <h1 className='font-bricolage-800 text-center text-xl font-normal text-slate-700'>Difference</h1> */}
                    <div className='md:w-4/6 mt-8'>
                        {/* Squat portion */}
                        <SquatDiff />
                        {/* bench portion */}
                        <BenchDiff />
                        {/* deadlift portion */}
                        <DeadliftDiff />
                    </div>
                </div>

                {/* Program breakdown */}
                <MainBreakdown />

                {/* Program section */}
                <section id='program' className=''>
                    <h1 className='font-bricolage-800 text-center text-xl font-normal text-slate-700'>Program Section</h1>
                    <p className='text-center font-light text-slate-700/40'>Choose one of the following</p>
                    <div className='flex flex-col justify-center mx-2 lg:mx-32 xl:mx-40 mt-2 md:grid md:grid-cols-2  md:justify-center md:items-center lg:grid-cols-3 lg:gap-8'>
                        <Link href='https://buy.stripe.com/test_fZe2aBaFX7ChdS8eUU'>
                            <Image className='mt-4 w-[250px] sm:w-[350px]  rounded-3xl mx-auto' src='/tiktok/thumbnail/musclebuild.png' width={300} height={300} alt='Program' />
                        </Link>
                        <Link href='https://buy.stripe.com/test_28og1rcO5cWB5lCbIJ'>
                            <Image className='w-[250px] sm:w-[350px]  rounded-3xl mt-4 mx-auto' src='/tiktok/thumbnail/powerbuild.png' width={300} height={300} alt='Program' />
                        </Link>
                        <Link href='https://buy.stripe.com/test_aEUg1r01j1dT5lCaEG'>
                            <Image className='w-[250px] sm:w-[350px]  rounded-3xl mt-4 mx-auto' src='/tiktok/thumbnail/str_block.png' width={300} height={300} alt='Program' />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className=''>
                    {/* Logo */}
                    <div className='flex justify-center'>
                        <Image className='w-[150px]' src='/tiktok/tiktok_logo.png' width={100} height={100} alt='TikTok logo' />
                    </div>
                    {/* Scroll up button */}
                    <div className='flex flex-col justify-center'>
                        <hr className='text-center mx-auto bg-slate-700/40 w-2/3'></hr>

                        <Link className='flex justify-center' href='#nav'>
                            <button className='text-slate-700 font-bold text-center p-2 underline decoration-red-500 decoration-2 '>Back to top</button>
                        </Link>
                    </div>
                    <p className='text-slate-700 font-bold text-center text-xl my-2'> Follow my socials</p>
                    <div className='flex justify-center'>
                        <div className='flex gap-4'>
                            <a href='https://www.instagram.com/jacobdelega/?hl=en' target='_blank' rel='noreferrer'>
                                <Image className='w-[30px]' src='/tiktok/icons/social.png' width={35} height={35} alt='Instagram logo' />
                            </a>
                            <a href='https://www.tiktok.com/@jacob.delega' target='_blank' rel='noreferrer'>
                                <Image className='w-[30px]' src='/tiktok/icons/tik-tok.png' width={25} height={25} alt='Tiktok logo' />
                            </a>
                            <a href='https://www.linkedin.com/in/jacob-delega-56b506247/' target='_blank' rel='noreferrer'>
                                <Image className='w-[30px]' src='/tiktok/icons/linkedin.png' width={25} height={25} alt='LinkedIn logo' />
                            </a>
                        </div>
                        <div className='flex justify-center'>
                            <hr className='bg-slate-700/40 w-2/3'></hr>
                        </div>
                    </div>

                    <p className='text-sm text-center text-gray-400 mt-8'>
                        Built by <span>Jacob Delega</span>
                    </p>
                </footer>
            </div>
        </>
    );
}
