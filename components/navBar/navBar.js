// >> Modules
import getVariable from '../globalVariables';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize.js';

// >> Styles
import useStyles from './navBarStyle';
import useGlobalStyles from '../globalStyle';

// >> Images
import logo_black from '../../public/logo_black.png';
import logo_white from '../../public/logo_white.png';
import burger from '../../public/burger.png';
import burger_close from '../../public/burger_close.png';

// >> Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

// >> Script
function NavBar(props) {
	// >> Router
	const router = useRouter();

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const size = useWindowSize();
	const [menu, setMenu] = useState(false);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div
					className={styles.logo}
					onClick={() => {
						props.changeTab('');
					}}
				>
					<Image
						src={props.light === true ? logo_white : logo_black}
						alt="PepeDEX"
						quality={99}
						priority={true}
						className={globalStyles.image}
					/>
				</div>
				<div className={styles.navigation}>
					<Button
						className={`${styles.button} ${styles.shortButton}`}
						onClick={() => {
							props.changeTab('');
						}}
					>
						<Typography>Home</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.longButton}`}
						onClick={() => {
							props.changeTab('about-us');
						}}
					>
						<Typography>About Us</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.shortButton}`}
						onClick={() => {
							props.changeTab('token');
						}}
					>
						<Typography>Token</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.shortButton}`}
						onClick={() => {
							props.changeTab('nft');
						}}
					>
						<Typography>NFT</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.longButton}`}
						onClick={() => {
							props.changeTab('roadmap');
						}}
					>
						<Typography>Roadmap</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.longButton}`}
						onClick={() => {
							props.changeTab('partners');
						}}
					>
						<Typography>Partners</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.shortButton}`}
						onClick={() => {
							props.changeTab('faq');
						}}
					>
						<Typography>FAQ</Typography>
					</Button>
					<Button
						className={`${styles.button} ${styles.socialButton}`}
						href="https://twitter.com/PEPEDAO_Global"
						target="_blank"
					>
						<TwitterIcon className="icon" />
					</Button>
					<Button
						className={`${styles.button} ${styles.socialButton}`}
						href="https://t.me/PepeDAO_Global"
						target="_blank"
					>
						<TelegramIcon className="icon" />
					</Button>
				</div>

				<div
					className={styles.burger}
					onClick={() => {
						setMenu(!menu);
					}}
				>
					<div className={styles.burgerIcon}>
						<Image
							src={burger}
							alt="Open Menu"
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
					<div
						className={styles.burgerIcon}
						style={
							menu === false ? { opacity: '0' } : { opacity: '1' }
						}
					>
						<Image
							src={burger_close}
							alt="Close Menu"
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
				</div>
			</div>
			<div
				className={styles.mobileNavigation}
				style={menu === true ? { left: '0px' } : { left: '-100%' }}
			>
				<Button
					className={`${styles.button} ${styles.shortButton}`}
					onClick={() => {
						props.changeTab('');
					}}
				>
					<Typography>Home</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.longButton}`}
					onClick={() => {
						props.changeTab('about-us');
					}}
				>
					<Typography>About Us</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.shortButton}`}
					onClick={() => {
						props.changeTab('nft');
					}}
				>
					<Typography>NFT</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.longButton}`}
					onClick={() => {
						props.changeTab('roadmap');
					}}
				>
					<Typography>Roadmap</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.shortButton}`}
					onClick={() => {
						props.changeTab('faq');
					}}
				>
					<Typography>FAQ</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.longButton}`}
					onClick={() => {
						props.changeTab('partners');
					}}
				>
					<Typography>Partners</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.shortButton}`}
					onClick={() => {
						props.changeTab('token');
					}}
				>
					<Typography>Token</Typography>
				</Button>
				<Button
					className={`${styles.button} ${styles.socialButton}`}
					href="https://google.com"
					target="_blank"
				>
					<TwitterIcon className="icon" />
				</Button>
				<Button
					className={`${styles.button} ${styles.socialButton}`}
					href="https://t.me/PepeDAO_Global"
					target="_blank"
				>
					<TelegramIcon className="icon" />
				</Button>
			</div>
		</div>
	);
}

export default NavBar;
