import { Button } from '@mui/material';

export interface ButtonProps extends React.ComponentProps<typeof Button> {
	customStyles?: React.CSSProperties;
}
