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
		width: 'calc(100% - 525px - 30px)',
	},

	right: {
		position: 'relative',
		marginTop: '30px',

		width: '525px',
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

	questions: {
		position: 'relative',
		marginTop: '50px',
		width: '100%',
	},

	oneAccordion: {
		padding: '25px 30px',
		position: 'relative',
		background: '#DAFFD5',
		marginBottom: '13px',
	},

	accordionTitle: {
		position: 'relative',
		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '32px',
		lineHeight: '110%',
		color: '#3C8430',
		textTransform: 'uppercase',
	},

	accordionDesc: {
		position: 'relative',
		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '130%',
		color: '#4A4A4A',
		paddingRight: '10%',
	},

	expandButton: {
		position: 'relative',
		width: '35px',
		height: '28px',
	},

	arrow: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		translate: '-50% -50%',
		width: '50%',
		height: 'auto',
		transform: 'rotate(-90deg) scaleX(-1)',
		transition: 'transform .5s',

		color: '#3C8430',
	},

	arrowExpanded: {
		transform: 'rotate(-90deg) scaleX(1)',
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

		accordionTitle: {
			fontSize: '18px',
		},

		accordionDesc: {
			fontSize: '12px',
		},

		questions: {
			marginTop: '30px',
		},

		oneAccordion: {
			padding: '10px 15px',
			marginBottom: '8px',
		},
	},
});

export default useStyles;
