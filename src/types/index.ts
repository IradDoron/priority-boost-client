export interface Task {
	id: string;
	title?: string;
	description?: string;
	completeConditions: [
		{
			description: string;
			complete: boolean;
		}
	];
	startDate?: Date;
	endDate?: Date;
}

export interface Date {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
}

export interface Goal {
	id: string;
	title?: string;
	description?: string;
	objectives?: Goal[];
	tasks?: Task[];
	startDate?: Date;
	endDate?: Date;
}

export interface Area {
	id: string;
	title: string;
	description?: string;
	goalsIds: string[];
}
