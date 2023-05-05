// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './teamStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import pepe1 from '../../../public/pepes/pepe_av1.png';
import pepe2 from '../../../public/pepes/pepe8.png';
import pepe3 from '../../../public/pepes/pepe9.png';

// >> Variables
let team = [
	{
		image: pepe1,
		name: 'POP',
		role: 'CEO',
		desc: "A young, ambitious CEO who wants to take the project to new heights. Privately, a law student, motomaniac and a long-time fan of PEPE, before PEPE became famous all over the world. Crypto experience since 2018.",
	},
	{
		image: pepe2,
		name: 'Zet',
		role: 'Programmer',
		desc: "Self-taught programmer for whom everything in programming is wide open! Football fan, NFT investor and travel lover. In Crypto and NFT since 2019.",
	},
	{
		image: pepe3,
		name: 'Mike',
		role: 'Designer',
		desc: "He has been fulfilling himself in design for nearly 10 years, working as a freelancer on a daily basis. Passionate about new solutions, but also an NFT investor and a staunch fan of Binance.",
	},
];

// >> Script
function Team() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="team">
			<div className={styles.insideDiv}>
				<Typography className={styles.title} data-aos="fade-right">
					Our Team
				</Typography>

				<div className={styles.team}>
					{team.map((element, index) => {
						return (
							<div
								className={styles.oneMember}
								key={index}
								data-aos="fade-up"
							>
								<div className={styles.avatar}>
									<Image
										src={element.image}
										alt=""
										quality={99}
										priority={true}
										className={globalStyles.image}
									/>
								</div>
								<div className={styles.bottom}>
									<div className={styles.bottomTop}>
										<Typography className="bottomTopLeft">
											{element.name}
										</Typography>
										<Typography className="bottomTopRight">
											{element.role}
										</Typography>
									</div>
									<Typography className={styles.bottomDesc}>
										{element.desc}
									</Typography>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Team;
