// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './heroStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import aboutImage from '../../../public/about-us.png';

// >> Script
function Hero() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.heroImage}></div>
			<div className={styles.insideDiv}>
				<div className={styles.left}>
					<Typography className={styles.h1}>
						NFT
					</Typography>
				</div>
				<div className={styles.right}>
					<div className={styles.slide}>
						<Link to="utility" className={styles.slideBtn}>
							<div className={styles.slideInside}></div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
