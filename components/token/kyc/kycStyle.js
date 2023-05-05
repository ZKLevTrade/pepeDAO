// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

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

		marginTop: '98px',
		paddingTop: '98px',
		borderTop: '1px solid #3C8430',
	},

	top: {
		position: 'relative',
		width: '100%',
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
		maxWidth: '530px',

		color: '#4A4A4A',
	},

	audits: {
		position: 'relative',
		width: '100%',
		maxWidth: '1222px',
		margin: '0 auto',
		marginTop: '85px',

		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},

	oneAudit: {
		position: 'relative',
		width: '260px',

		'& .auditImg': {
			position: 'relative',
			width: '100%',
			height: 'auto',
		},

		'& .title': {
			position: 'relative',
			width: '100%',
			textAlign: 'center',
			marginTop: '32px',

			fontFamily: 'Alphakind',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '32px',
			lineHeight: '130%',

			color: '#3C8430',
		},

		'& .desc': {
			position: 'relative',
			width: '100%',
			textAlign: 'center',
			marginTop: '8px',

			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '140%',

			color: '#4A4A4A',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1000px
	['@media (max-width: 1000px)']: {
		insideDiv: {
			marginTop: '60px',
			paddingTop: '60px',
		},

		audits: {
			display: 'block',

			width: '100%',
			maxWidth: '300px',
			margin: '0 auto',
			marginTop: '50px',
		},

		oneAudit: {
			position: 'relative',
			width: '100%',
			marginBottom: '40px',

			'& .title': {
				marginTop: '32px',
				fontSize: '24px',
			},

			'& .desc': {
				marginTop: '8px',
				fontSize: '16px',
			},
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
