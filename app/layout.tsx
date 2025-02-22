import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "../components/nav/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SessisonProvider from "../components/SessisonProvider";
import HeroSection from "@/components/hero/HeroSection";
import Trending from "@/components/news/Trending";
import Events from "@/components/event/Events";
import BlogSection from "@/components/blogs/Blogs";
import Entertainment from "@/components/entertainment/Entertainment";
import NewsSection from "@/components/news/News";
import Business from "@/components/business/Business";
import CallToAction from "@/components/cta/CallToAction";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://dailyblog-demo.vercel.app/"),

	title: {
		template: "%s | Daily Blog",
		default: "Daily Blog",
	},
	authors: {
		name: "chensokheng",
	},

	description:
		"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
	openGraph: {
		title: "URBANSPACE",
		description:
			"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
		url: "https://dailyblog-demo.vercel.app/",
		siteName: "URBANSPACE",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("antialiased dark:bg-[#FFFAF5]", inter.className)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-7xl mx-auto lg:py-10 p-5 lg:p-0">
                       <HeroSection/>
					   <Trending/>
					   <Events/>
					   <BlogSection/>
					   <Entertainment/>
					   <NewsSection/>
					   <Business/>
					   <CallToAction/>
					   <Footer/>
						{children}
						
						
					</main>
					
				</ThemeProvider>
				<Toaster />
				<SessisonProvider />
			</body>
		</html>
	);
}
