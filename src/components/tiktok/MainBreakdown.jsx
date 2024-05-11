//MUI imports
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MainBreakDown from "@/components/tiktok/MainBreakdown";

// NextJS
import Image from "next/image";

//Lottie imports
import dynamic from "next/dynamic";
const ProgramLottie = dynamic(() => import("../lotties/ProgramLottie"), { ssr: false });

export default function MainBreakdown() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bricolage-800 text-center text-xl font-normal text-slate-700 mt-8 lg:mt-10'>What You Get In My Programs</h1>
            <div className='flex mt-4 md:max-w-3xl md:mx-auto '>
                <Timeline
                    className="max-w-xl"
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}>
                    <TimelineItem className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='text-slate-500 font-normal'>Customizable Program</TimelineContent>
                    </TimelineItem>
                    <TimelineItem className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='text-slate-500 font-normal'>Smart Block Structure</TimelineContent>
                    </TimelineItem>
                    <TimelineItem className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='text-slate-500 font-normal'>Program Tracker</TimelineContent>
                    </TimelineItem>
                    <TimelineItem className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent className='text-slate-500 font-normal text-clip'>Personal Guidance</TimelineContent>
                    </TimelineItem>
                </Timeline>
                <ProgramLottie src='/lotties/ProgramLottie.json' style={{ height: "50px", width: "50px" }}></ProgramLottie>

            </div>
        </div>
    );
}
