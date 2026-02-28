import React from "react";
import { featJobs } from "@/lib/data";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

function FeaturedJobs() {
	return (
		<div className="w-screen flex flex-col gap-2 p-4 md:p-10 lg:px-32 lg:py-18">
			<h2 className="text-[32px] font-semibold text-headings text-start text-base/13 font-clash">
				Featured <span className="text-accent">Jobs</span>
			</h2>
			<div className="relative">
				<ScrollArea className="h-65 w-full ">
					<div className="flex w-max space-x-4">
						{featJobs.map((job) => (
							<div key={job.id} className="w-74 h-65 border p-4">
								<div className="flex justify-between items-center">
									<Image
										src={job.logo}
										alt={job.title}
										width={48}
										height={48}
									/>
									<p className="rounded p-1 text-sm bg-[#d8ffd8] text-[#2f6b2f]">
										{job.type}
									</p>
								</div>
								<h3 className="text-lg font-semibold">{job.title}</h3>
								<p className="text-sm text-muted-foreground">
									{job.company}. {job.location}
								</p>
								<p className="my-4 text-wrap">{job.description}</p>
								<div>
									{job.categories.map((category, index) => (
										<span
											key={category}
											className={cn(
												"text-xs border rounded mr-2 px-2 py-1",
												index === 0 &&
													"bg-[#ffe0cc] text-[#8a2e00] border-[#F2D675]",
												index === 1 &&
													"bg-[#e8f8e8] text-[#2f6b2f] border-[#bfe7bf]",
												index > 1 && "text-muted-foreground",
											)}
										>
											{category}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
			<div className="flex flex-row items-center justify-start">
				<p className="font-bold text-brand">Show all jobs</p>
				<Image
					src="/arrow-right.svg"
					alt="category illustration"
					width={16}
					height={16}
					className="mx-2"
				/>
			</div>
		</div>
	);
}

export default FeaturedJobs;
