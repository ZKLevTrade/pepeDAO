// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './galleryStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import pepe1 from '../../../public/pepes/pepe1.png';
import pepe2 from '../../../public/pepes/pepe2.png';
import pepe3 from '../../../public/pepes/pepe3.png';
import pepe4 from '../../../public/pepes/pepe4.png';
import pepe5 from '../../../public/pepes/pepe5.png';
import pepe6 from '../../../public/pepes/pepe6.png';
import pepe7 from '../../../public/pepes/pepe7.png';
import pepe8 from '../../../public/pepes/pepe8_1.png';
import pepe9 from '../../../public/pepes/pepe9_1.png';

// >> Variables
let gallery = [
	{ image: pepe1 },
	{ image: pepe2 },
	{ image: pepe3 },
	{ image: pepe4 },
	{ image: pepe5 },
	{ image: pepe6 },
	{ image: pepe7 },
	{ image: pepe8 },
	{ image: pepe9 },
];

// >> Script
function Gallery() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.h1} data-aos="fade-right">
						GALLERY
					</Typography>
					<Typography className={styles.h3} data-aos="fade-right">
						Explore our gallery of our sample NFTs
					</Typography>
				</div>
				<div className={styles.gallery}>
					{gallery.map((element, index) => {
						return (
							<div
								className={styles.oneImage}
								key={index}
								data-aos="fade-up"
							>
								<Image
									src={element.image}
									alt=""
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
