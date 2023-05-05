// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './partnersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import bingx from '../../../public/partners/bingx.svg';
import bscscan from '../../../public/partners/bscscan.svg';
import coingecko from '../../../public/partners/coingecko.svg';
import coinmarketcap from '../../../public/partners/coinmarketcap.svg';
import coinsult from '../../../public/partners/coinsult.svg';
import dextools from '../../../public/partners/dextools.svg';
import dexview from '../../../public/partners/dexview.svg';
import huobi from '../../../public/partners/huobi.svg';
import lbank from '../../../public/partners/lbank.svg';
import mexcglobal from '../../../public/partners/mexcglobal.svg';
import okx from '../../../public/partners/okx.svg';
import pancakeswap from '../../../public/partners/pancakeswap.svg';
import pinksale from '../../../public/partners/pinksale.svg';
import poloniex from '../../../public/partners/poloniex.svg';
import trustwallet from '../../../public/partners/trustwallet.svg';

// >> Variables
let partners = [
	{
		logo: bscscan,
		link: 'https://bscscan.com',
	},
	{
		logo: coingecko,
		link: 'https://www.coingecko.com',
	},
	{
		logo: coinmarketcap,
		link: 'https://coinmarketcap.com',
	},
	{
		logo: dextools,
		link: 'https://www.dextools.io',
	},
	{
		logo: dexview,
		link: 'https://www.dexview.com',
	},
	{
		logo: pancakeswap,
		link: 'https://pancakeswap.finance',
	},
	{
		logo: pinksale,
		link: 'pinksale.finance',
	},
	{
		logo: trustwallet,
		link: 'https://trustwallet.com',
	},
	{
		logo: trustwallet,
		link: 'https://trustwallet.com',
	},
	{
		logo: trustwallet,
		link: 'https://trustwallet.com',
	},
];

// >> Script
function PartnersSection() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				{partners.map((element, index) => {
					return (
						<a
							className={styles.oneParter}
							href={element.link}
							target="_blank"
							key={index}
							data-aos="fade-up"
						>
							<Image
								src={element.logo}
								alt={element.link}
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default PartnersSection;
