// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './aboutStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import aboutImage from '../../../public/about-us.png';

// >> Script
function About() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topSections}>
					<div className={styles.left}>
						<Typography className={styles.h1}>About us</Typography>
						<Typography className={styles.h3}>
							PEPE DAO is a DAO-community-driven token with the first ever negative tax paid to our investors when purchasing our PEPED in all known $PEPE. We are delighted with how successful PEPE has been in the world of cryptocurrencies and we want to become a part of it, creating something really great with unique solutions.
						</Typography>
						<Typography className={styles.h3}>
							We are a group of young people hungry for success on a global scale. We want PEPED to become something more, a part of our lives, not just in the form of a meme or emoji sent on Twitch or Discord. PEPED is our vision with which we want to flood the world of cryptocurrencies!
						</Typography>
						<Typography className={styles.h3}>
							Renounced ownership of our smart-contract will allow us to fully hand over the project for joint development with our community using the DAO platform. Our NFT PEPE DAO collection will be available as free-to-mint to all and the staking platform will allow you to earn extra passive funds while holding $PEPED. Deposit and withdraw at any time of the day, no limit, no taxes, no restrictions.
						</Typography>
					</div>
					<div className={styles.right}>
						<Image
							src={aboutImage}
							alt=""
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
				</div>

				<div className={styles.slide}>
					<Link to="team" className={styles.slideBtn}>
						<div className={styles.slideInside}></div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
