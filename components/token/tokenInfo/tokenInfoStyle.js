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
		marginTop: '90px',
		width: 'calc(100% - 655px - 9px)',
	},

	right: {
		position: 'relative',
		marginTop: '100px',

		width: '655px',
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
