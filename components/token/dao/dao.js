// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './daoStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import daoImage from '../../../public/dao.png';
import daoImage2 from '../../../public/dao2.png';

// >> Script
function Dao() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.h1} data-aos="fade-up">
						DAO
					</Typography>
					<Typography className={styles.h3} data-aos="fade-up">
						DAO will provide us with the decision-making community about the fate of the project. Nothing will happen without a vote by our community!
					</Typography>
				</div>
				<div className={styles.bottomDao}>
					<div className={styles.daoImage} data-aos="fade-up">
						<Image
							src={daoImage}
							alt=""
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
					<div className={styles.daoImage2} data-aos="fade-up">
						<Image
							src={daoImage2}
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

export default Dao;
