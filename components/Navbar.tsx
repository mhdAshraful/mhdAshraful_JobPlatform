"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDeviceCheck } from "@/lib/deviceCheck";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const device = useDeviceCheck();
	const handleCkick = () => {
		console.log("clicked", isOpen);
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-full h-15 flex bg-background items-center justify-between gap-10 p-4 md:px-10 lg:px-32">
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="Logo"
					width={152}
					height={60}
					loading="eager"
				/>
			</Link>

			{device === "desktop" && (
				<div className="flex flex-row items-center justify-between w-full">
					<div className="flex items-center gap-4">
						<Link href="/findJobs">Find Jobs</Link>
						<Link href="/search_companies">Browse Companies</Link>
					</div>
					<div className="flex items-center gap-4">
						<Link href="/login" className="text-brand">
							Login
						</Link>
						{"|"}
						<Link href="/signup" className="text-white bg-brand p-2">
							signup
						</Link>
					</div>
				</div>
			)}

			{device !== "desktop" && (
				<div className="flex items-center gap-4 p-4">
					<div className="" onClick={handleCkick}>
						<Image
							src="/burger.svg"
							alt="burger button icon"
							width={36}
							height={36}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
