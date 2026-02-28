import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Footer() {
	return (
		<div className="w-full flex flex-col p-4 items-start justify-center bg-foreground md:p-10 lg:px-32 lg:py-18 ">
			<div className="md:flex md:flex-row md:items-start md:justify-between gap-10">
				<div>
					<Link href="/">
						<Image
							src="/Logo2.svg"
							alt="Logo"
							width={152}
							height={60}
							loading="eager"
						/>
					</Link>
					<p className="text-white mt-8">
						Great platform for the job seeker that passionate about
						startups. Find your dream job easier.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-2 gap-10 text-white">
					<ul className="space-y-2 md:space-x-40 md:space-y-0">
						<li>
							<Link className="text-2xl" href="/about">
								About
							</Link>
						</li>
						<li>
							<Link href="/companies">Companies</Link>
						</li>
						<li>
							<Link href="/pricing">Pricing</Link>
						</li>
						<li>
							<Link href="/terms">Terms</Link>
						</li>
						<li>
							<Link href="/advice">Advice</Link>
						</li>
						<li>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
					</ul>

					<ul className="space-y-2">
						<li>
							<Link className="text-2xl" href="/resources">
								Resources
							</Link>
						</li>
						<li>
							<Link href="/help-docs">Help Docs</Link>
						</li>
						<li>
							<Link href="/guide">Guide</Link>
						</li>
						<li>
							<Link href="/updates">Updates</Link>
						</li>
						<li>
							<Link href="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>

				<div>
					<div className="my-8">
						<p className="text-xl text-white">Get job notifications </p>
						<p className="text-white">
							The latest job news, articles, sent to your inbox
							weekly.{" "}
						</p>
						<div className="flex flex-col items-start gap-2 my-8">
							<Input
								placeholder="Enter your email"
								className="border-none bg-white"
							/>
							<Button className="bg-accent text-white px-4 py-2 rounded ml-2">
								Subscribe
							</Button>
						</div>
					</div>
				</div>
			</div>
			<hr className="w-full" />
			<div className="w-full flex items-center justify-between my-8 md:flex-col md:gap-4">
				{/* social media */}
				<div className="flex items-center gap-4 md:gap-10 ">
					<Link href="https://www.facebook.com/">
						<Image
							src="/facebook.svg"
							alt="Facebook"
							width={24}
							height={24}
						/>
					</Link>
					<Link href="https://www.instagram.com/">
						<Image
							src="/instagram.svg"
							alt="Instagram"
							width={24}
							height={24}
						/>
					</Link>
					<Link href="https://www.dribble.com/">
						<Image
							src="/dribble.svg"
							alt="Dribble"
							width={24}
							height={24}
						/>
					</Link>

					<Link href="https://www.twitter.com/">
						<Image
							src="/twitter.svg"
							alt="Twitter"
							width={24}
							height={24}
						/>
					</Link>
					<Link href="https://www.linkedin.com/">
						<Image
							src="/linkedin.svg"
							alt="LinkedIn"
							width={24}
							height={24}
						/>
					</Link>
				</div>
				<p className="text-sm text-white">
					© 2024 JobPlatform. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
