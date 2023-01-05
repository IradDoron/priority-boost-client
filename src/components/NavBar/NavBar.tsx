import { useState } from 'react';

import { StyledNavBar } from 'components/NavBar/styles';
import { NavBarProps } from 'components/NavBar/types';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';

import { VIEWS_TITLES } from 'utils/constants';
import { stringsHelpers } from 'utils/helpers';

import { MenuLink } from 'shared/inputs/MenuLink';
import { NavLink } from 'shared/inputs/NavLink';

export const NavBar = (props: NavBarProps) => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<StyledNavBar {...props}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{VIEWS_TITLES.map((page) => (
							<NavLink
								key={page}
								onClick={handleCloseNavMenu}
								to={`/${stringsHelpers.toKebabCase(page)}`}
							>
								{page}
							</NavLink>
						))}
					</Box>
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{VIEWS_TITLES.map((page) => (
								<MenuLink
									key={page}
									onClick={handleCloseNavMenu}
									to={`/${stringsHelpers.toKebabCase(page)}`}
								>
									{page}
								</MenuLink>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</StyledNavBar>
	);
};
