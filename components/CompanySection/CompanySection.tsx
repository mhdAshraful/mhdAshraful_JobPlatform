import React from "react";
import { companies } from "@/lib/data";
import Image from "next/image";
function CompanySection() {
	return (
		<div>
			<h2 className="text-[32px] font-semibold text-muted-foreground  text-start text-base/13 font-clash">
				Companies we helped grow
			</h2>
			<div className="flex flex-wrap gap-4 m-4">
				{companies.map((company) => (
					<div key={company.name} className="p-4 flex items-center">
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={100}
							height={36}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default CompanySection;
