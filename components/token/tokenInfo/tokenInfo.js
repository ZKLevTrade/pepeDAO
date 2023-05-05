// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './tokenInfoStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import tokenImage from '../../../public/token.png';

// >> Script
function TokenInfo() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topSections}>
					<div className={styles.left}>
						<Typography className={styles.h1}>Token</Typography>
						<Typography className={styles.h3}>
							PEPE DAO token ($PEPED) was created on the best foundations. We took care of every detail to make our token worthy of attention for every type of investor, from beginners to real whales. PEPED does not charge any taxes during the transaction, i.e. it is a tax-free token, and what is more, it rewards new investors for purchases in the form of a 0.5% return of the sum spent on the purchase of our token, the so-called negative tax and we were the first to use it in the PEPE era!
						</Typography>
						<Typography className={styles.h3}>
							Our smart-contract code does not contain any provisions that could limit investors in any way, and it has been audited by a trusted company recommended by Pinksale - Audit Ace.
						</Typography>
						<Typography className={styles.h3}>
						We have a lot of ideas for the development of our token, so we are sure of its success in the near future.
						</Typography>
					</div>
					<div className={styles.right}>
						<Image
							src={tokenImage}
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

export default TokenInfo;
