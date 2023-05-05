// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import homeLong from '../../../public/homeLong.png';
import homeLong_2 from '../../../public/homeLong_2.png';
import homeShort from '../../../public/homeShort.png';
import homeShort_2 from '../../../public/homeShort_2.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		minHeight: '80vh',
		position: 'relative',
		'z-index': '4',
	},

	home_image: {
		position: 'relative',
		width: '90%',
		maxWidth: '1402px',
		height: 'auto',
		margin: '0 auto',
	},

	underImage: {
		position: 'relative',
		width: '90%',
		maxWidth: '1402px',
		margin: '0 auto',
		marginTop: '40px',

		'& .title': {
			position: 'relative',
			width: '100%',
			textAlign: 'center',

			fontFamily: 'Alphakind',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '42px',
			lineHeight: '120%',

			color: '#3C8430',
		},

		'& .buttons': {
			position: 'relative',
			width: '100%',
			marginTop: '32px',

			display: 'flex',
			gap: '24px',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
	},

	button: {
		position: 'relative',
		minWidth: '0px',
		boxShadow: 'none',
		borderRadius: '0px',

		'&:before': {
			content: "''",
			position: 'absolute',
			left: '0px',
			top: '0px',
			width: '100%',
			height: '100%',
			opacity: '0',
			transition: `opacity .5s`,
			borderRadius: '0px',
			'z-index': '2',
		},

		'& p': {
			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '24px',
			lineHeight: '100%',
			textTransform: 'uppercase',
			color: '#3C8430',
			'z-index': '3',
			marginTop: '4px',

			padding: '0px 12px',
		},

		'& span': {
			color: '#ffffff00',
		},

		'&:hover': {
			boxShadow: 'none',

			'&:before': {
				opacity: '1',
			},
		},
	},

	shortButton: {
		width: 'auto',
		height: '49px',
		background: `url(${homeShort_2.src})`,
		backgroundSize: '100% 100%',

		'&:before': {
			background: `url(${homeShort.src})`,
			backgroundSize: '100% 100%',
		},

		'&:hover': {
			background: `url(${homeShort_2.src})`,
			backgroundSize: '100% 100%',
		},
	},

	longButton: {
		width: 'auto',
		height: '49px',
		background: `url(${homeLong_2.src})`,
		backgroundSize: '100% 100%',

		'&:before': {
			background: `url(${homeLong.src})`,
			backgroundSize: '100% 100%',
		},

		'&:hover': {
			background: `url(${homeLong_2.src})`,
			backgroundSize: '100% 100%',
		},
	},

	bottom: {
		position: 'relative',
		width: '90%',
		maxWidth: '1402px',
		margin: '0 auto',
		marginTop: '77px',
		paddingBottom: '60px',

		display: 'flex',
		justifyContent: 'space-between',

		'& .left': {
			position: 'relative',

			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '18px',
			lineHeight: '100%',
			textTransform: 'uppercase',

			color: '#4A4A4A',
		},

		'& .right': {
			position: 'relative',
			display: 'flex',
			gap: '39px',

			'& a': {
				'& p': {
					position: 'relative',

					fontFamily: 'Milk Kids',
					fontStyle: 'normal',
					fontWeight: '400',
					fontSize: '14px',
					lineHeight: '100%',

					color: '#4A4A4A',
					textDecoration: 'underline',
					transition: 'color .5s',
				},

				'&:hover': {
					'& p': {
						color: '#202020',
					},
				},
			},
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1150px
	['@media (max-width: 1150px)']: {
		home_image: {
			marginTop: '50px',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		underImage: {
			marginTop: '30px',

			'& .title': {
				fontSize: '22px',
			},

			'& .buttons': {
				marginTop: '22px',

				gap: '12px',
			},
		},

		button: {
			'& p': {
				fontSize: '16px',

				padding: '0px 6px',
			},
		},

		shortButton: {
			height: '32px',
		},

		longButton: {
			height: '32px',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		bottom: {
			display: 'flex',

			position: 'absolute',
			left: '5%',
			bottom: '30px',
			maxWidth: 'none',

			marginTop: '0px',
			paddingBottom: '0px',
		},
	},

	// 450px
	['@media (max-width: 450px)']: {
		bottom: {
			'& .left': {
				fontSize: '12px',
			},

			'& .right': {
				gap: '16px',

				'& a': {
					'& p': {
						fontSize: '10px',
					},
				},
			},
		},
	},
});

export default useStyles;
