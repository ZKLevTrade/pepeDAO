// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import btn_scroll from '../../../public/btn_scroll.png';

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
	},

	topSections: {
		position: 'relative',
		width: '100%',

		display: 'flex',
		justifyContent: 'space-between',
	},

	left: {
		position: 'relative',
		marginTop: '120px',
		width: 'calc(100% - 594px - 50px)',
	},

	right: {
		position: 'relative',
		marginTop: '50px',

		width: '594px',
		height: 'auto',
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

	h3: {
		position: 'relative',
		marginTop: '18px',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '140%',

		color: '#4A4A4A',
	},

	slide: {
		position: 'relative',
		top: '-71px',
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

	// >>>>>>>>>>>>>> Mobile
	// 1270px
	['@media (max-width: 1270px)']: {
		topSections: {
			position: 'relative',
			width: '100%',

			display: 'block',
		},

		left: {
			marginTop: '40px',
			width: '100%',
		},

		right: {
			marginTop: '40px',
			width: '100%',
		},

		slide: {
			display: 'none',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		h2: {
			fontSize: '14px',
		},

		h1: {
			fontSize: '24px',
		},

		h3: {
			marginTop: '12px',
		},
	},
});

export default useStyles;
