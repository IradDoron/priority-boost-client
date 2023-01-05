import { styled } from '@mui/material/styles';
import { Button } from 'shared/inputs/Button';

export const StyledNavLink = styled(Button)(({ theme }) => ({
	padding: '0',
	backgroundColor: 'transparent',
	borderBottomColor: 'transparent',
	borderWidth: '3px',
	borderBottomStyle: 'solid',
	'&:hover': {
		borderBottomColor: theme.palette.secondary.main,
	},
}));
