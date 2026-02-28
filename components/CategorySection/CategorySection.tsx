import { categories } from "@/lib/data";
import Image from "next/image";

function CategorySection() {
	return (
		<div className="w-screen flex flex-col gap-4 p-4  md:p-10 lg:px-32 lg:py-18">
			<h2 className="text-[32px] font-semibold text-headings text-start text-base/13 font-clash">
				Explore by <span className="text-accent">category</span>
			</h2>
			<div className="md:w-full flex flex-col gap-4 my-4 md:flex-row md:flex-wrap md:gap-8">
				{categories.map((category) => (
					<div
						key={category.id}
						className=" border p-4 md:p-8 flex items-start md:h-50 md:gap-8 md:flex-col md:basis-1/5"
					>
						<Image
							src={category.icon}
							alt={`${category.title} icon`}
							width={48}
							height={48}
						/>
						<div className="w-full md:flex md:flex-row md:justify-between">
							<div className="ml-4 md:ml-0">
								<h3 className="font-bold">{category.title}</h3>
								<p className="text-sm text-muted-foreground">
									{category.jobsAvailable} jobs available
								</p>
							</div>
							<Image
								src="/arrow-right.svg"
								alt="arrow right icon"
								width={24}
								height={24}
								className="ml-auto"
							/>
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
					className="mx-2"
				/>
			</div>
		</div>
	);
}

export default CategorySection;
