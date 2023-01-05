import { Stack } from 'shared/layout';

import { AreaAccordion } from 'components/AreaAccordion';

import { areas } from 'data/areas';

export const Planning = () => {
	return (
		<Stack>
			<Stack>
				{areas.map((area) => (
					<AreaAccordion key={area.id} area={area} />
				))}
			</Stack>
		</Stack>
	);
};
