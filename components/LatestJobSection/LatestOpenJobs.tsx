import React from "react";
import { latestOpenJobs } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
function LatestOpenJobs() {
	return (
		<div className="w-full flex flex-col gap-4 p-4">
			<h2 className="text-[32px] font-semibold text-headings text-start text-base/13 font-clash">
				Latest <span className="text-accent">Jobs open</span>
			</h2>
			<div>
				{latestOpenJobs.map((job) => (
					<div
						key={job.id}
						className=" flex flex-col items-start gap-2 bg-white   mb-4 p-4"
					>
						<Image
							src={job.logo}
							alt={job.title}
							width={48}
							height={48}
						/>
						<div>
							<h3 className="text-lg font-semibold">{job.title}</h3>
							<p className="text-sm text-muted-foreground">
								{job.company}. {job.location}
							</p>

							<div className="flex flex-row items-center gap-2 mt-2">
								<p className="rounded p-1 text-sm bg-[#d8ffd8] text-[#2f6b2f]">
									{job.type}
								</p>
								{"|"}
								{job.categories.map((category, index) => (
									<span
										key={category}
										className={cn(
											"text-xs  rounded mr-2 p-1",
											index === 0 &&
												"bg-muted text-[#8a2e00] border-[#F2D675]",
											index === 1 &&
												"bg-muted text-[#2f6b2f] border-[#bfe7bf]",
											index > 1 && "text-muted-foreground",
										)}
									>
										{category}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-row items-center justify-start">
				<p className="font-bold text-brand">Show all jobs</p>
				<Image
					src="/arrow-right.svg"
					alt="category illustration"
					width={16}
					height={16}
				/>
			</div>
		</div>
	);
}

export default LatestOpenJobs;
