import Image from "next/image";
import React from "react";
import Search from "./Search";

function Banner() {
	return (
		<div className="flex flex-col p-4">
			<h1 className="text-[48px] font-semibold text-headings text-start text-base/13 font-clash">
				Discover more than <span className="text-accent">5000+ Jobs</span>
			</h1>
			<Image
				src="underline.svg"
				alt="underline"
				width={500}
				height={500}
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
