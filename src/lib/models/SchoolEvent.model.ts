interface SchoolEvent {
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	type: "school" | "club";
	useHTML?: boolean;
}