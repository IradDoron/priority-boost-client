import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.secondary.main,
}));
