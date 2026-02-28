import type { Metadata } from "next";
// import { Geist, Geist_Mono, Roboto, ClashDisplay } from "next/font/google";
import Clash_Display from "next/font/local";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

const ClashDisplay = Clash_Display({
	variable: "--font-clash-display",
	src: [
		{
			path: "../public/ClashDisplay/fonts/ClashDisplay-Variable.woff2",
			weight: "100 900",
		},
	],
});

export const metadata: Metadata = {
	title: "QuickHire",
	description:
		"Great platform for the job seeker that searching for new career heights and passionate about startups.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ClashDisplay.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
