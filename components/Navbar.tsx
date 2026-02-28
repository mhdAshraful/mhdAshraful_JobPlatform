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
		<div className="w-full h-15 flex items-center justify-between">
			<div className="">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={152}
						height={60}
						loading="eager"
					/>
				</Link>
			</div>

			{device === "desktop" && (
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-4">
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/contact">Contact</Link>
					</div>
				</div>
			)}

			{device !== "desktop" && (
				<div className="flex items-center gap-4">
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
