// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './reviewsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import utilityImage from '../../../public/utility.png';

// >> Script
function Reviews() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<Typography className={styles.h1} data-aos="fade-up">
					Youtube Reviews
				</Typography>

				<div className={styles.reviews}>
					<div className={styles.oneReview} data-aos="fade-up">
						<iframe
							className={styles.youtube}
							src="https://www.youtube.com/embed/UqxrSkZv_5k"
						></iframe>
					</div>
					<div className={styles.oneReview} data-aos="fade-up">
						<iframe
							className={styles.youtube}
							src="https://www.youtube.com/embed/UqxrSkZv_5k"
						></iframe>
					</div>
					<div className={styles.oneReview} data-aos="fade-up">
						<iframe
							className={styles.youtube}
							src="https://www.youtube.com/embed/UqxrSkZv_5k"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
