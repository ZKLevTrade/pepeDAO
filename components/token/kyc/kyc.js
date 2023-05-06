// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './kycStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import kycImage from '../../../public/kyc.png';
import auditImage from '../../../public/audit.png';
import safuImage from '../../../public/safu.png';

// >> Script
function Kyc() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.h1} data-aos="fade-up">
						KYC, AUDIT & 0/0 Tax
					</Typography>
					<Typography className={styles.h3} data-aos="fade-up">
						We have provided all possible security measures for our investors as well as for ourselves. We are sure of our product!
					</Typography>
				</div>
				<div className={styles.audits}>
					<div className={styles.oneAudit} data-aos="fade-up">
						<div className="auditImg">
							<Image
								src={kycImage}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</div>
						<Typography className="title">KYC</Typography>
						<Typography className="desc"> 
							We&apos;ve been extensively verified and we've received the KYC certificate.
						</Typography>
					</div>
					<div className={styles.oneAudit} data-aos="fade-up">
						<div className={styles.auditImg}>
							<Image
								src={auditImage}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</div>
						<Typography className="title">AUDIT</Typography>
						<Typography className="desc">
							Our token smart-contract has been audited and we have received a security certificate. Our token has been fully tested from every possible angle!
						</Typography>
					</div>
					<div className={styles.oneAudit} data-aos="fade-up">
						<div className={styles.auditImg}>
							<Image
								src={safuImage}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</div>
						<Typography className="title">0/0 Tax</Typography>
						<Typography className="desc">
							We have 0/0 tax on trasactions!
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Kyc;
