import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav id='nav' className='relative w-full p-4'>
            <div className='mx-auto'>
                <div className='flex justify-between items-center mb-4 ${stickyClass}'>
                    <Image className='w-[100px] h-[100px]' src='/tiktok/tiktok_logo.png' width={100} height={100} />
                    <div>
                        <Link href='#program'>
                            <Button className='bg-orange-500 hover:bg-orange-800'>Get started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
