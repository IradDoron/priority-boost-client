import { NavLink } from 'react-router-dom';

import { StyledMenuLink } from 'shared/inputs/MenuLink/styles';

import { MenuLinkProps } from 'shared/inputs/MenuLink/types';

export const MenuLink = (props: MenuLinkProps) => {
	return (
		<StyledMenuLink {...props}>
			<NavLink
				to={props.to}
				style={{
					textDecoration: 'none',
					color: 'inherit',
					padding: '4px 12px',
				}}
			>
				{props.children}
			</NavLink>
		</StyledMenuLink>
	);
};
