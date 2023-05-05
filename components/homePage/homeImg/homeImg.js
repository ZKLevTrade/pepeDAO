// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';

// >> Styles
import useStyles from './homeImgStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import home_image from '../../../public/home.png';

// >> Script
function HomeImg(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<>
			<div className={styles.outsideDiv}>
				<div className={styles.home_image}>
					<Image
						src={home_image}
						alt=""
						quality={99}
						priority={true}
						className={globalStyles.image}
					/>
				</div>
				<div className={styles.underImage}>
					<Typography className="title">
						Use the menu to go to the other sections of the website.
					</Typography>
					<div className="buttons">
						<Button
							className={`${styles.button} ${styles.shortButton}`}
							onClick={() => {
								props.changeTab('about-us');
							}}
						>
							<Typography>About Us</Typography>
						</Button>
						<Button
							className={`${styles.button} ${styles.longButton}`}
							href="https://t.me/PepeDAO_Global"
							target="_blank"
						>
							<Typography>Telegram Group</Typography>
						</Button>
						<Button
							className={`${styles.button} ${styles.shortButton}`}
							href="https://twitter.com/PEPEDAO_Global"
							target="_blank"
						>
							<Typography>Giveaway</Typography>
						</Button>
						<Button
							className={`${styles.button} ${styles.shortButton}`}
							href="https://t.me/PepeDAO_Global"
							target="_blank"
						>
							<Typography>Presale</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.bottom}>
					<Typography className="left">© 2023 PEPE DAO</Typography>
					<div className="right">
						<a href="" target="_blank" className="oneLink">
							<Typography>Terms and Conditions</Typography>
						</a>
						<a href="" target="_blank" className="oneLink">
							<Typography>Privacy Police</Typography>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeImg;
