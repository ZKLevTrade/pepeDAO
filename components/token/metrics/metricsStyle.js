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

		marginTop: '3px',
		paddingTop: '97px',
		borderTop: '1px solid #3C8430',
	},

	topSections: {
		position: 'relative',
		width: '100%',

		display: 'flex',
		justifyContent: 'space-between',
	},

	left: {
		position: 'relative',
		marginTop: '40px',
		width: 'calc(100% - 593px - 190px)',
	},

	right: {
		position: 'relative',

		width: '593px',
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

	leftMetrics: {
		position: 'relative',
		width: '100%',

		display: 'flex',
		flexWrap: 'wrap',
	},

	oneMetric: {
		position: 'relative',
		flex: '50%',

		'& .line': {
			position: 'absolute',
			left: '0px',
			top: '45%',
			width: '4px',
			height: '22px',
		},

		'& p': {
			position: 'relative',
			marginTop: '18px',

			fontFamily: 'Alphakind',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '22px',
			lineHeight: '120%',
			paddingLeft: '16px',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1340px
	['@media (max-width: 1340px)']: {
		insideDiv: {
			marginTop: '3px',
			paddingTop: '35px',
		},

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
			width: '100%',
			maxWidth: '500px',
			margin: '0 auto',
			marginTop: '80px',
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

		oneMetric: {
			position: 'relative',
			flex: '50%',

			'& .line': {
				position: 'absolute',
				left: '0px',
				top: '45%',
				width: '3px',
				height: '16px',
			},

			'& p': {
				marginTop: '12px',
				fontSize: '16px',
			},
		},
	},
});

export default useStyles;
