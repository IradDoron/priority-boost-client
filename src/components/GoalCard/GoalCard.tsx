import { Card, CardActions, CardContent } from '@mui/material';

import { Typography } from 'shared/dataDisplay';
import { Button } from 'shared/inputs';
import { Stack } from 'shared/layout';

import { Date, Goal } from 'types';

export interface GoalCardProps {
	goal: Goal;
}

export const getFormattedDate = (date: Date) => {
	if (!date) {
		return null;
	} else {
		const { day, month, year, hour, minute } = date;
		return `${day}/${month}/${year} ${hour}:${minute}`;
	}
};

export const GoalCard = (props: GoalCardProps) => {
	const { goal } = props;
	const {
		title = '',
		description = '',
		// objectives = [], TODO: Add objectives
		daysToDeadline,
		startDate,
		deadlineDate,
		endDate,
	} = goal;

	return (
		<Card
			sx={{
				width: '360px',
				padding: '0px',
			}}
		>
			<CardContent>
				<Stack
					gap={2}
					sx={{
						alignItems: 'center',
					}}
				>
					<Typography variant="h4">{title}</Typography>
					<Typography variant="body1">{description}</Typography>
					<Typography variant="body1">{daysToDeadline}</Typography>
					<Typography variant="body1">
						{startDate ? getFormattedDate(startDate) : 'No Start Date'}
					</Typography>
					<Typography variant="body1">
						{deadlineDate ? getFormattedDate(deadlineDate) : 'No Deadline Date'}
					</Typography>
					<Typography variant="body1">
						{endDate ? getFormattedDate(endDate) : 'No End Date'}
					</Typography>
				</Stack>
			</CardContent>
			<CardActions
				sx={{
					padding: '0px',
				}}
			>
				<Button
					sx={{
						width: '100%',
						margin: '0px',
					}}
					size="large"
				>
					Open
				</Button>
			</CardActions>
		</Card>
	);
};
