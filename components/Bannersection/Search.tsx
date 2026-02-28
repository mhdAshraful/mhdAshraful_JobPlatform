import React from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "../ui/input-group";
import Image from "next/image";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

function Search() {
	return (
		<div className="flex flex-col items-start w-full mb-20 gap-2">
			<InputGroup className="h-12 w-full border-none shadow-none">
				<InputGroupInput placeholder="Job title or keyword" />
				<InputGroupAddon>
					<Image src="/search.svg" alt="search" width={20} height={20} />
				</InputGroupAddon>
			</InputGroup>
			<Select>
				<SelectTrigger className="flex items-start text-start h-12 w-full border-none shadow-none">
					<Image src="/location.svg" alt="search" width={20} height={20} />
					<SelectValue
						className="text-start"
						placeholder="Choose a Location"
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="dhaka">Dhaka</SelectItem>
						<SelectItem value="new-york">New York</SelectItem>
						<SelectItem value="london">London</SelectItem>
						<SelectItem value="paris">Paris</SelectItem>
						<SelectItem value="tokyo">Tokyo</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Button className="bg-brand text-white text-md font-bold h-12 w-full sm:w-auto border-none rounded-none shadow-none">
				Search my Job
			</Button>

			<div>
				<p className="text-sm text-muted-foreground">Popular:</p>
				<p className="text-sm text-muted-foreground">
					UI Designer, UX Researcher, Android, Admin, React, Next.js
				</p>
			</div>
		</div>
	);
}

export default Search;
