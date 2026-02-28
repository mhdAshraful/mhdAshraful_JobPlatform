import React from "react";
import { featJobs } from "@/lib/data";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

function FeaturedJobs() {
	return (
		<div className="my-8">
			<h2 className="text-[32px] font-semibold text-headings text-start text-base/13 font-clash">
				Featured <span className="text-accent">Jobs</span>
			</h2>
			<ScrollArea className="h-65 w-75 whitespace-nowrap">
				<div className="flex w-max space-x-8">
					{featJobs.map((job) => (
						<div key={job.id} className="w-74 h-65 border p-4">
							<div className="flex justify-between items-center">
								<Image
									src={job.logo}
									alt={job.title}
									width={48}
									height={48}
								/>
								<p className="border px-1 py-1">{job.type}</p>
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
	);
}

export default FeaturedJobs;
