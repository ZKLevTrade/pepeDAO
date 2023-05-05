// >> Modules
import getVariable from '../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './footerStyle';
import useGlobalStyles from '../globalStyle';

// >> Script
function Footer(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<Typography className={styles.h1} data-aos="fade-up">
					Join to our community
				</Typography>
				<Typography className={styles.h3} data-aos="fade-up">
					Community is our number one!
				</Typography>
				<div className={styles.socials} data-aos="fade-up">
					<a
						href="https://twitter.com/PEPEDAO_Global"
						target="_blank"
						className={styles.oneSocial}
					>
						<Typography>Twitter</Typography>
						<div className="arrow"></div>
					</a>

					<a
						href="https://t.me/PepeDAO_Global"
						target="_blank"
						className={styles.oneSocial}
					>
						<Typography>Telegram</Typography>
						<div className="arrow"></div>
					</a>
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
		</div>
	);
}

export default Footer;
