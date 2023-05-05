// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './phaseInfoStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import roadmap1 from '../../../public/roadmap1.png';
import roadmap2 from '../../../public/roadmap2.png';
import roadmap3 from '../../../public/roadmap3.png';
import roadmap4 from '../../../public/roadmap4.png';

import green_done from '../../../public/points/green_done.svg';
import green from '../../../public/points/green.svg';
import yellow_done from '../../../public/points/yellow_done.svg';
import yellow from '../../../public/points/yellow.svg';
import red_done from '../../../public/points/red_done.svg';
import red from '../../../public/points/red.svg';

// >> Variables
const phases = {
	['Phase 1']: {
		image: roadmap1,
		desc: "A part of the roadmap that will be known only to a selected group of people! This is where PEPE DAO will start to gain hype, and only a few people will take part in its Presale due to the huge interest!",
		points1: [green, green, green],
		points2: [green, green, green],
		points3: [green, green, green],
		points4: [green, green, green],
		desc1: 'Establishment of PEPE DAO',
		desc2: 'Smart contract deployment',
		desc3: 'KYC & Audit procedure',
		desc4: 'Presale on Pinksale',
	},

	['Phase 2']: {
		image: roadmap2,
		desc: 'The way in which PEPED will be listed on the PancakeSwap decentralized exchange and will start conquering the general universe of cryptocurrencies.',
		points1: [green, green, green],
		points2: [green, green, green],
		points3: [green, green, green],
		points4: [green, green, green],
		desc1: 'PEPED DEX Listing',
		desc2: 'CMC/CG Listing',
		desc3: '$10M Volume Daily',
		desc4: 'Crypto Ads',
	},

	['Phase 3']: {
		image: roadmap3,
		desc: 'PEPE DAO is breaking into the mainstream media and is gaining fame all over the world! Billboards in the most famous places in the world and dozens of influencers recommending PEPED!',
		points1: [green, green, green],
		points2: [green, green, green],
		points3: [green, green, green],
		points4: [green, green, green],
		desc1: 'Instagram/Twitter Influ Marketing',
		desc2: '$10M Market cap',
		desc3: 'NY Times Square Billboard',
		desc4: 'First Ads on TV',
	},

	['Phase 4']: {
		image: roadmap4,
		desc: 'Further conquest of the world and listings on the largest centralized cryptocurrency exchanges such as MEXC, ByBit or even Binance and CoinBase!',
		points1: [green, green, green],
		points2: [green, green, green],
		points3: [green, green, green],
		points4: [green, green, green],
		desc1: 'CEX Listings',
		desc2: '$100M Market cap',
		desc3: 'Futures Trading on CEXs',
		desc4: '100,000 Holders',
	},
};

// >> Script
function PhaseInfo(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="roadmapphase">
			<div className={styles.insideDiv}>
				<div className={styles.left} data-aos="fade-right">
					<Image
						src={phases[props.phase].image}
						alt=""
						quality={99}
						priority={true}
						className={globalStyles.image}
					/>
				</div>
				<div className={styles.right}>
					<Typography className={styles.h3} data-aos="fade-left">
						{phases[props.phase].desc}
					</Typography>
					<div className={styles.onePoints}>
						<Typography
							className={styles.pointTitle}
							data-aos="fade-left"
						>
							{phases[props.phase].desc1}
						</Typography>
						<div className={styles.pointsDraw}>
							{phases[props.phase].points1.map(
								(element, index) => {
									return (
										<div
											className={styles.oneDraw}
											key={index}
											data-aos="fade-left"
										>
											<Image
												src={element}
												alt=""
												quality={99}
												priority={true}
												className={globalStyles.image}
											/>
										</div>
									);
								}
							)}
						</div>
					</div>
					<div className={styles.onePoints}>
						<Typography
							className={styles.pointTitle}
							data-aos="fade-left"
						>
							{phases[props.phase].desc2}
						</Typography>
						<div className={styles.pointsDraw}>
							{phases[props.phase].points2.map(
								(element, index) => {
									return (
										<div
											className={styles.oneDraw}
											key={index}
											data-aos="fade-left"
										>
											<Image
												src={element}
												alt=""
												quality={99}
												priority={true}
												className={globalStyles.image}
											/>
										</div>
									);
								}
							)}
						</div>
					</div>
					<div className={styles.onePoints}>
						<Typography
							className={styles.pointTitle}
							data-aos="fade-left"
						>
							{phases[props.phase].desc3}
						</Typography>
						<div className={styles.pointsDraw}>
							{phases[props.phase].points3.map(
								(element, index) => {
									return (
										<div
											className={styles.oneDraw}
											key={index}
											data-aos="fade-left"
										>
											<Image
												src={element}
												alt=""
												quality={99}
												priority={true}
												className={globalStyles.image}
											/>
										</div>
									);
								}
							)}
						</div>
					</div>
					<div className={styles.onePoints}>
						<Typography
							className={styles.pointTitle}
							data-aos="fade-left"
						>
							{phases[props.phase].desc4}
						</Typography>
						<div className={styles.pointsDraw}>
							{phases[props.phase].points4.map(
								(element, index) => {
									return (
										<div
											className={styles.oneDraw}
											key={index}
											data-aos="fade-left"
										>
											<Image
												src={element}
												alt=""
												quality={99}
												priority={true}
												className={globalStyles.image}
											/>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PhaseInfo;
