import { MenuItem } from '@mui/material';

export interface MenuLinkProps extends React.ComponentProps<typeof MenuItem> {
	to: string;
}
