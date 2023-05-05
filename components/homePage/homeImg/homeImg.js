// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './homeImgStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import home_image from '../../../public/home.png';

// >> Script
function HomeImg() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
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

			<div className={styles.bottom}>
				<Typography className="left">© 2023 PEPE DAO</Typography>
				<div className="right">
					<a
						href=""
						target="_blank"
						className="oneLink"
					>
						<Typography>Terms and Conditions</Typography>
					</a>
					<a
						href=""
						target="_blank"
						className="oneLink"
					>
						<Typography>Privacy Police</Typography>
					</a>
				</div>
			</div>
		</div>
	);
}

export default HomeImg;
