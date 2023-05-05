// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import btn_scroll from '../../../public/btn_scroll.png';
import heroBg from '../../../public/partners.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '3',
		top: '-85px',
	},

	heroImage: {
		position: 'relative',
		width: '100%',
		//margin: '0 auto',
		//maxWidth: '2500px',
		height: '720px',

		background: `url(${heroBg.src}) center center / cover no-repeat`,
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1350px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '45px',

		display: 'flex',
		justifyContent: 'space-between',
	},

	left: {
		position: 'relative',
	},

	right: {
		position: 'relative',
		marginTop: '20px',
	},

	h2: {
		position: 'relative',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '100%',
		textTransform: 'uppercase',

		color: '#73CD64',
	},

	h1: {
		position: 'relative',
		marginTop: '18px',

		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '110%',
		textTransform: 'uppercase',

		color: '#3C8430',
	},

	slide: {
		position: 'relative',

		width: '71px',
		height: '56px',
		background: `url(${btn_scroll.src})`,
		backgroundSize: '100% 100%',
		transition: 'opacity .5s',
		opacity: '.7',

		'&:hover': {
			opacity: '1',
			cursor: 'pointer',
		},
	},

	slideBtn: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},

	slideInside: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},

	// 700px
	['@media (max-width: 700px)']: {
		heroImage: {
			height: '360px',
		},

		right: {
			display: 'none',
		},

		h2: {
			fontSize: '14px',
		},

		h1: {
			fontSize: '24px',
		},
	},
});

export default useStyles;
