"use client";
import React from "react";
import { companies } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDeviceCheck } from "@/lib/deviceCheck";
function CompanySection() {
	const device = useDeviceCheck();
	return (
		<div className="flex flex-col md:items-center p-4 md:p-10 lg:px-32 lg:py-18 gap-4 w-full">
			<h2 className="text-md font-medium text-muted-foreground  text-start text-base/13 font-clash">
				Companies we helped grow
			</h2>
			<div className="flex flex-wrap items-center justify-center ">
				{companies.map((company) => (
					<div key={company.name} className="p-4">
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={100}
							height={36}
							className={cn(
								device === "desktop" && "md:w-50 md:h-12",
								device === "tablet" && "md:w-40 md:h-10",
							)}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default CompanySection;
