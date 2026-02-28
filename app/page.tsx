import Banner from "@/components/Bannersection/Banner";
import CategorySection from "@/components/CategorySection/CategorySection";
import CompanySection from "@/components/CompanySection/CompanySection";
import FeaturedJobs from "@/components/FeaturedSection/FeaturedJobs";
import Navbar from "@/components/Navbar";
import { Cat } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
			<main className="flex min-h-screen w-full flex-col items-center py-2 px-4 bg-secondary dark:bg-black sm:items-start">
				<Navbar />
				<Banner />
				<CompanySection />
				<CategorySection />
				<FeaturedJobs />
			</main>
		</div>
	);
}
