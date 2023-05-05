// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './pointsStyle';
import useGlobalStyles from '../../globalStyle';
import { Link } from 'react-scroll';

// >> Script
function Points(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<Typography className={styles.h1}>Roadmap</Typography>
				<Typography className={styles.h3}>
					Discover our roadmap and dive into the journey we have planned with PEPE to the moon!
				</Typography>

				<div className={styles.phases}>
					<Link
						className={`${styles.phase} ${styles.phase1}`}
						onClick={() => {
							props.setPhase('Phase 1');
						}}
						to="roadmapphase"
					></Link>
					<Link
						className={`${styles.phase} ${styles.phase2}`}
						onClick={() => {
							props.setPhase('Phase 2');
						}}
						to="roadmapphase"
					></Link>
					<Link
						className={`${styles.phase} ${styles.phase3}`}
						onClick={() => {
							props.setPhase('Phase 3');
						}}
						to="roadmapphase"
					></Link>
					<Link
						className={`${styles.phase} ${styles.phase4}`}
						onClick={() => {
							props.setPhase('Phase 4');
						}}
						to="roadmapphase"
					></Link>
				</div>
			</div>
		</div>
	);
}

export default Points;
