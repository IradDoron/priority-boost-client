export interface TaskCompleteCondition {
	description: string;
	complete: boolean;
}

export interface Task {
	id: string;
	title?: string;
	description?: string;
	completeConditions: TaskCompleteCondition[];
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
	daysToDeadline: number;
	startDate: Date | null;
	deadlineDate: Date | null;
	endDate: Date | null;
}

export interface Area {
	id: string;
	title: string;
	description?: string;
	vision: string[];
	goalsIds: string[];
}
