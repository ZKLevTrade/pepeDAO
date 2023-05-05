// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './metricsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import metricsImage from '../../../public/metrics.png';

// >> Variables
let metrics = [
	{
		color: '#C13A3A',
		name: 'Token Metrics (20%)',
	},
	{
		color: '#C1A43A',
		name: 'Token Metrics (20%)',
	},
	{
		color: '#3C8430',
		name: 'Token Metrics (20%)',
	},
	{
		color: '#C7CABD',
		name: 'Token Metrics (20%)',
	},
	{
		color: '#C13A3A',
		name: 'Token Metrics (20%)',
	},
	{
		color: '#4F4F4F',
		name: 'Token Metrics (20%)',
	},
];

// >> Script
function Metrics() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topSections}>
					<div className={styles.left} data-aos="fade-right">
						<Typography className={styles.h1}>
							Token Metrics
						</Typography>
						<Typography className={styles.h3}>
							The tokenomics of our project has been arranged in such a way as to ensure stable development of our project and certainty for investors. We burned over 50% of the token, so the price increase after Presale will be diametrically high.
						</Typography>
						<div className={styles.leftMetrics}>
							{metrics.map((element, index) => {
								return (
									<div
										className={styles.oneMetric}
										key={index}
									>
										<div
											className="line"
											style={{
												background: element.color,
											}}
										></div>
										<Typography
											style={{
												color: element.color,
											}}
										>
											{element.name}
										</Typography>
									</div>
								);
							})}
						</div>
					</div>
					<div className={styles.right} data-aos="fade-left">
						<Image
							src={metricsImage}
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

export default Metrics;
