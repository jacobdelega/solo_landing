// Next.js imports
import Image from "next/image";

// React imports
import React from "react";

// Shadcn imports
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// MUI imports
import Rating from "@mui/material/Rating";

// Client Data
const clientData = [
    {
        name: "Melissa Bercun, USA",
        image: "/tiktok/clients/client_01.png",
        testimonial: "I've been using these programs for a year and I've seen great results! I've been able to hit 135lb on bench, 275lb squat, and more. I highly recommend this program!",
        rating: 5,
    },
    {
        name: "Sarah Lee, Canada",
        image: "/tiktok/clients/client_02.png",
        testimonial: "... (Another testimonial text)",
        rating: 4.5,
    },
    // ... Add objects for 3 more clients
];

export default function MainReview() {
    const [rating, setRating] = React.useState(4);
    return (
        <div>
            <div>
                <h3 className='font-bricolage-800 text-lg font-normal text-center text-slate-700 mt-8'>Client Review</h3>{" "}
                <div className='flex justify-center'>
                    <Carousel className='w-full max-w-xs'>
                        <CarouselContent>
                            {clientData.map((client, index) => (
                                <CarouselItem key={index}>
                                    <div className='md:p-1'>
                                        <Card>
                                            <CardHeader>
                                                <Image className='rounded-lg w-[200px] h-[220px] mx-auto' src={client.image} width={300} height={300} />
                                                <CardTitle className='text-sm text-center'>{client.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className=''>
                                                <p className='text-center text-sm'>{client.testimonial}</p>
                                                <div className='flex justify-center md:mt-2'>
                                                    <Rating name='read-only' value={client.rating} readOnly />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
