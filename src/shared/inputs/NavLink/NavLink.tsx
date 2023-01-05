import { StyledNavLink } from 'shared/inputs/NavLink/styles';

import { NavLinkProps } from 'shared/inputs/NavLink/types';

import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = (props: NavLinkProps) => {
	return (
		<StyledNavLink
			{...props}
			sx={{ my: 2, color: 'white', display: 'block' }}
			size="large"
		>
			<RouterNavLink
				to={props.to}
				style={{
					textDecoration: 'none',
					color: 'inherit',
					padding: '16px',
				}}
			>
				{props.children}{' '}
			</RouterNavLink>
		</StyledNavLink>
	);
};
