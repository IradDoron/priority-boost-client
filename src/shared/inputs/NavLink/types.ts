import { Button } from 'shared/inputs/Button/';

export interface NavLinkProps extends React.ComponentProps<typeof Button> {
	to: string;
}
