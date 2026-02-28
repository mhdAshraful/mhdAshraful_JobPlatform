import Banner from "@/components/Bannersection/Banner";
import CategorySection from "@/components/CategorySection/CategorySection";
import CompanySection from "@/components/CompanySection/CompanySection";
import FeaturedJobs from "@/components/FeaturedSection/FeaturedJobs";
import LatestOpenJobs from "@/components/LatestJobSection/LatestOpenJobs";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
			<main className="flex min-h-screen w-full flex-col items-center py-2 bg-secondary dark:bg-black">
				<Navbar />
				<Banner />
				<CompanySection />
				<CategorySection />
				<FeaturedJobs />
				<LatestOpenJobs />
			</main>
		</div>
	);
}
