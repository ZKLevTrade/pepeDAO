// >> Modules
import getVariable from '../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import btn_long from '../../public/btn_long.png';
import btn_long_unactive from '../../public/btn_long_unactive.png';
import btn_short from '../../public/btn_short.png';
import btn_short_unactive from '../../public/btn_short_unactive.png';
import btn_social from '../../public/btn_social.png';
import btn_social_unactive from '../../public/btn_social_unactive.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1350px',
		margin: '0 auto',
		position: 'relative',

		display: 'flex',
		gap: '76px',
		flexWrap: 'wrap',
	},

	logo: {
		position: 'relative',
		width: '141px',
		height: 'auto',
		marginTop: '28px',

		'&:hover': {
			cursor: 'pointer',
		},
	},

	navigation: {
		position: 'relative',
		marginTop: '35px',

		display: 'flex',
		gap: '10px',
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
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'uppercase',
			color: '#3C8430',
			'z-index': '3',
			marginTop: '4px',
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
		width: '78px',
		height: '31px',
		background: `url(${btn_short_unactive.src})`,
		backgroundSize: '100% 100%',

		'&:before': {
			background: `url(${btn_short.src})`,
			backgroundSize: '100% 100%',
		},

		'&:hover': {
			background: `url(${btn_short_unactive.src})`,
			backgroundSize: '100% 100%',
		},
	},

	longButton: {
		width: '115px',
		height: '31px',
		background: `url(${btn_long_unactive.src})`,
		backgroundSize: '100% 100%',

		'&:before': {
			background: `url(${btn_long.src})`,
			backgroundSize: '100% 100%',
		},

		'&:hover': {
			background: `url(${btn_long_unactive.src})`,
			backgroundSize: '100% 100%',
		},
	},

	socialButton: {
		width: '40px',
		height: '31px',
		background: `url(${btn_social_unactive.src})`,
		backgroundSize: '100% 100%',

		'& .icon': {
			position: 'absolute',
			width: '50%',
			height: 'auto',
			left: '50%',
			top: '50%',
			translate: '-50% -50%',

			color: '#6A9E61',
			'z-index': '3',
		},

		'&:before': {
			background: `url(${btn_social.src})`,
			backgroundSize: '100% 100%',
		},

		'&:hover': {
			background: `url(${btn_social_unactive.src})`,
			backgroundSize: '100% 100%',
		},
	},

	burger: {
		position: 'absolute',
		width: '48px',
		height: '38px',
		top: '12px',
		right: '12px',

		opacity: '.75',
		transition: 'opacity .5s',

		'&:hover': {
			cursor: 'pointer',
			opacity: '1',
		},

		display: 'none',
	},

	burgerIcon: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		left: '0px',
		top: '0px',

		transition: 'opacity .5s',
	},

	mobileNavigation: {
		position: 'absolute',
		top: '60px',
		width: '100%',
		height: '1000vh',
		background: '#F5FFF3',

		paddingTop: '50px',
		paddingLeft: '32px',

		display: 'none',

		transition: 'left 1s',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1150px
	['@media (max-width: 1150px)']: {
		outsideDiv: {
			'z-index': '6',
		},

		insideDiv: {
			display: 'block',
			gap: '0px',
		},

		navigation: {
			display: 'none',
		},

		mobileNavigation: {
			display: 'block',
		},

		button: {
			display: 'block',
			marginTop: '8px',
			'& p': {
				position: 'absolute',
				top: '50%',
				width: '100%',
				textAlign: 'center',
				left: '0px',
				translate: '0 -50%',
				marginTop: '2px',
			},
		},

		socialButton: {
			float: 'left',
			marginRight: '10px',
			marginTop: '50px',
		},

		burger: {
			display: 'block',
		},
	},
});

export default useStyles;
