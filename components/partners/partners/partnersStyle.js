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

		display: 'flex',
		gap: '20px',
		flexWrap: 'wrap',
	},

	oneParter: {
		position: 'relative',
		flex: '18%',

		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.8',
		},
	},

	// 1000px
	['@media (max-width: 1000px)']: {
		oneParter: {
			flex: '23%',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		oneParter: {
			flex: '40%',
		},
	},
});

export default useStyles;
