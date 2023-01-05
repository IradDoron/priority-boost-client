import { AreaAccordionProps } from 'components/AreaAccordion/types';

import { Typography } from 'shared/dataDisplay/';
import { Stack } from 'shared/layout';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { GoalCard } from 'components/GoalCard';
import { goals } from 'data/goals';

export const getGoalsByIds = (ids: string[]) => {
	const goalsInArea = goals.filter((goal) => ids.includes(goal.id));
	return goalsInArea;
};

export const AreaAccordion = (props: AreaAccordionProps) => {
	const { area } = props;
	const { title, vision, description, goalsIds } = area;
	const goalsContent = getGoalsByIds(goalsIds);
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Stack
					sx={{
						gap: 4,
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					<Typography variant="h4" sx={{ display: 'inline-block' }}>
						{title}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							display: 'inline-block',
						}}
					>
						{description}
					</Typography>
				</Stack>
			</AccordionSummary>
			<AccordionDetails>
				<Stack spacing={8}>
					<Stack gap={4}>
						<Typography variant="h5" textAlign="center">
							The Vision
						</Typography>
						<Stack
							sx={{
								gap: 1,
								justifyContent: 'flex-start',
								width: 'fit-content',
								margin: 'auto',
							}}
						>
							{vision.map((visionItem, index) => (
								<Stack direction="row" gap={1}>
									<Typography
										sx={{
											display: 'inline-block',
											width: 'fit-content',
										}}
									>
										{index + 1}.{' '}
									</Typography>
									<Typography
										variant="body1"
										textAlign="center"
										sx={{
											display: 'inline-block',
											width: 'fit-content',
										}}
									>
										{visionItem}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
					<Stack gap={4}>
						<Typography variant="h5" textAlign="center">
							Complete
						</Typography>
						<Stack>
							<Typography variant="body1" textAlign="center">
								TODO: Add completed tasks
							</Typography>
						</Stack>
					</Stack>
					<Stack gap={4}>
						<Typography variant="h5" textAlign="center">
							In Progress
						</Typography>
						<Stack>
							<Typography variant="body1" textAlign="center">
								TODO: Add in progress tasks
							</Typography>
						</Stack>
					</Stack>
					<Stack gap={4}>
						<Typography variant="h5" textAlign="center">
							Not Started
						</Typography>
						<Stack>
							{goalsContent.map((goal) => (
								<GoalCard goal={goal} />
							))}
						</Stack>
					</Stack>
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
};
