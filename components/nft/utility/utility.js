// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './utilityStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import utilityImage from '../../../public/utility.png';

// >> Script
function Utility() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topSections} id="utility">
					<div className={styles.left} data-aos="fade-right">
						<Typography className={styles.h1}>Utility</Typography>
						<Typography className={styles.h3}>
							Our NFT will be based primarily on the NFT Staking utility, which will allow us to stake our NFTs in exchange for $PEPED rewards every 60 minutes! That&apos;s right, we intend to reward our holders with additional tokens of our PEPE DAO! Hold our NFTs and make money on it every day, with the ability to withdraw funds at any time. The second issue will be decision-making during the DAO - NFT holders will have an additional number of votes during the voting, i.e. they will actually have a greater impact on the development of the project.s
						</Typography>
						<Typography className={styles.h3}>
							Sounds great, right?
						</Typography>
					</div>
					<div className={styles.right} data-aos="fade-left">
						<Image
							src={utilityImage}
							alt=""
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Utility;
