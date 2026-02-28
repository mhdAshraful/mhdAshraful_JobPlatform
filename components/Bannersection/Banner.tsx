"use client";
import Image from "next/image";
import React from "react";
import Search from "./Search";
import { useDeviceCheck } from "@/lib/deviceCheck";

function Banner() {
	const device = useDeviceCheck();
	return (
		<div className="w-screen md:h-screen flex flex-col gap-4 md:gap-10 p-4 md:p-10 lg:px-32 lg:py-18">
			{device === "desktop" && (
				<Image
					src="/bg.png"
					alt="bg image"
					loading="eager"
					width={500}
					height={500}
					// fill={true}
					style={{
						position: "absolute",
						objectFit: "cover",
						zIndex: 0,
						width: "50vw",
						height: "100vh",
						top: 0,
						right: 0,
					}}
				/>
			)}

			<h1 className="text-[48px]  md:text-[50px] lg:text-[72px] md:w-[40%]  font-semibold text-headings text-start text-base/13 md:text-base/20 font-clash">
				Discover more than <span className="text-accent">5000+ Jobs</span>
			</h1>
			<Image
				src="underline.svg"
				alt="underline"
				width={500}
				height={500}
				loading="eager"
				className="my-4"
			/>
			<p className="my-4">
				Great platform for the job seeker that searching for new career
				heights and passionate about startups.
			</p>
			<Search />
		</div>
	);
}

export default Banner;
