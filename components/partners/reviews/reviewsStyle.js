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
		marginTop: '116px',
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

	reviews: {
		position: 'relative',
		width: '100%',

		display: 'flex',
		flexWrap: 'wrap',
		gap: '41px',
		marginTop: '88px',
	},

	oneReview: {
		position: 'relative',
		flex: '30%',
		padding: '34px',
		background: '#DAFFD5',
	},

	youtube: {
		width: '100%',
		height: '192px',
		border: 'none',
	},

	// 700px
	['@media (max-width: 700px)']: {
		reviews: {
			gap: '20px',
			marginTop: '39px',
		},

		h1: {
			fontSize: '24px',
		},

		oneReview: {
			flex: '48%',
			padding: '12px',
		},
	},
});

export default useStyles;
