import { AppBar } from '@mui/material';

export interface AppBarProps extends React.ComponentProps<typeof AppBar> {
	customStyles?: React.CSSProperties;
}
