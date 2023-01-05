import { Goal } from 'types';

export const goals: Goal[] = [
	{
		id: '1',
		title: 'Clean the house',
		description: 'Clean and organize all the rooms in the house',
		objectives: [
			{
				id: '1',
				title: 'Clean the kitchen',
				description: 'Clean and organize the kitchen',
				tasks: [
					{
						id: '1',
						title: 'Clean the stove',
						description: 'Clean the stove and the oven',
						completeConditions: [
							{
								description: 'Clean the stove',
								complete: false,
							},
							{
								description: 'Clean the oven',
								complete: false,
							},
						],
					},
					{
						id: '2',
						title: 'Clean the fridge',
						description: 'Clean the fridge and the freezer',
						completeConditions: [
							{
								description: 'Clean the fridge',
								complete: false,
							},
							{
								description: 'Clean the freezer',
								complete: false,
							},
						],
					},
				],
				daysToDeadline: 7,
				startDate: null,
				deadlineDate: null,
				endDate: null,
			},
			{
				id: '2',
				title: 'Clean the living room',
				description: 'Clean and organize the living room',
				tasks: [
					{
						id: '1',
						title: 'Clean the sofa',
						description: 'Clean the sofa and the cushions',
						completeConditions: [
							{
								description: 'Clean the sofa',
								complete: false,
							},
							{
								description: 'Clean the cushions',
								complete: false,
							},
						],
					},
					{
						id: '2',
						title: 'Clean the TV',
						description: 'Clean the TV and the TV stand',
						completeConditions: [
							{
								description: 'Clean the TV',
								complete: false,
							},
							{
								description: 'Clean the TV stand',
								complete: false,
							},
						],
					},
					{
						id: '3',
						title: 'Clean the coffee table',
						description: 'Clean the coffee table and the side tables',
						completeConditions: [
							{
								description: 'Clean the coffee table',
								complete: false,
							},
							{
								description: 'Clean the side tables',
								complete: false,
							},
						],
					},
				],
				daysToDeadline: 7,
				startDate: null,
				deadlineDate: null,
				endDate: null,
			},
		],
		daysToDeadline: 20,
		startDate: null,
		deadlineDate: null,
		endDate: null,
	},
];
