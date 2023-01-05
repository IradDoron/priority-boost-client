import { ButtonProps } from 'shared/inputs/Button/types';

import { StyledButton } from 'shared/inputs/Button/styles';

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props} />;
};

// & { classes: Record<string, string> }
