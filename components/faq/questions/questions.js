// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { withStyles } from '@mui/styles';

// >> Styles
import useStyles from './questionsStyle';
import useGlobalStyles from '../../globalStyle';

const StyledAccordion = withStyles({
	root: {
		'&:before': {
			display: 'none',
		},

		background: 'none',
		border: 'none',
		boxShadow: 'none',
		transition: 'all .5s',

		'& .MuiAccordionSummary-expandIconWrapper': {
			transform: 'none',
		},

		'&$expanded': {
			marginTop: '0px',

			'& .MuiAccordionSummary-expandIconWrapper': {
				transform: 'none',
			},
		},
	},

	expanded: {},
})(Accordion);

const slideProps = {
	timeout: { enter: 500, exit: 500 },
};

// >> Images
import faqImage from '../../../public/faq.png';
import btn_faq from '../../../public/btn_faq.png';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

// >> Variables
let data = [
	{
		title: 'Is your team KYC?',
		desc: 'Yes, our team has been verified and we have received the KYC certificate.',
	},
	{
		title: 'What are transaction taxes?',
		desc: "We don't have any transaction taxes, so it's equal to 0%! In addition, our negative tax refunds each buyer of our token with 0.5% of each purchase in $PEPE.",
	},
	{
		title: 'Do you have an audit?',
		desc: 'Yes! Our smart contract code has been checked and is fully secure.',
	},
	{
		title: 'How can I contact you?',
		desc: "Go to our group on Telegram, we'll be happy to exchange a word there!",
	},
];

// >> Script
function Questions() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topSections}>
					<div className={styles.left}>
						<Typography className={styles.h1}>
							Frequently Asked Questions
						</Typography>
						<div className={styles.questions}>
							{data.map((accordion, id) => {
								const { title, desc } = accordion;
								return (
									<div
										key={id}
										className={styles.oneAccordion}
									>
										<StyledAccordion
											expanded={expanded === id}
											key={id}
											onChange={handleChange(id)}
											square
											TransitionProps={slideProps}
											disableGutters
										>
											<AccordionSummary
												expandIcon={
													<div
														className={
															styles.expandButton
														}
													>
														<Image
															src={btn_faq}
															alt=""
															quality={99}
															priority={true}
															className={
																globalStyles.image
															}
														/>
														<ArrowBackIosNewRoundedIcon
															className={
																expanded === id
																	? `${styles.arrowExpanded} ${styles.arrow}`
																	: `${styles.arrow}`
															}
														/>
													</div>
												}
											>
												<Typography
													className={
														expanded === id
															? `${globalStyles.gradientText} ${styles.accordionTitle}`
															: `${styles.accordionTitle}`
													}
												>
													{title}
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													className={
														styles.accordionDesc
													}
												>
													{desc}
												</Typography>
											</AccordionDetails>
										</StyledAccordion>
									</div>
								);
							})}
						</div>
					</div>
					<div className={styles.right}>
						<Image
							src={faqImage}
							alt=""
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Questions;
