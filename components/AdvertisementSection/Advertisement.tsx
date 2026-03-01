import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Advertisement() {
	return (
		<div className="w-full h-auto flex flex-col items-start justify-between md:flex-row gap-10 p-4 md:p-10 lg:px-32 lg:py-18">
			<div
				className="w-full flex flex-col items-start justify-between md:flex-row gap-10 bg-brand p-6 md:p-8 lg:px-32 lg:py-20
        [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)]
        md:[clip-path:polygon(60px_0,100%_0,100%_calc(100%-60px),calc(100%-60px)_100%,0_100%,0_60px)]
      "
			>
				<div className="flex flex-col gap-4 text-white items-center text-center">
					<p className="text-2xl  font-clash font-black">
						Start posting jobs today
					</p>
					<p>Start posting jobs for only $10.</p>
					<Button variant="default" size="lg">
						Sign up for free
					</Button>
				</div>
				<div>
					<Image
						src="/bgdash.png"
						alt="bg image"
						loading="eager"
						width={450}
						height={350}
						// fill={true}
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Advertisement;
