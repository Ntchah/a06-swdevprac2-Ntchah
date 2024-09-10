'use client'


import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState,useEffect } from "react";

export default function Card({ imgSrc, hospitalName, onRating }: { imgSrc: string, hospitalName: string, onRating: Function }) {
    const [value, setValue] = useState<number | null>(0);

    return (
        <div>
            <InteractiveCard>
                <div className="w-full h-[70%] relative rounded-t-lg">
                    <Image src={imgSrc}
                        alt='Product Pic'
                        fill={true}
                        className="object-cover rounded-t-lg" />
                </div>
                <div className="w-full h-[10%] p-[10px]">{hospitalName}</div>
                <Rating
                    data-testid={`${hospitalName} Rating`}
                    id={`${hospitalName} Rating`}
                    name={`${hospitalName} Rating`}
                    value={value}
                    className="p-[10px]"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        onRating(hospitalName,newValue);
                        event.stopPropagation();
                    }}
                />
            </InteractiveCard>

        </div>
    );
}

