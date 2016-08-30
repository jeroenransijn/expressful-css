const SIDES = {
	'top': ['all', 'vertical', 'top'],
	'bottom': ['all', 'vertical', 'bottom'],
	'left': ['all', 'horizontal', 'left'],
	'right': ['all', 'horizontal', 'right']
};
const CONTAINERS = ['all', 'vertical', 'horizontal'];
const PROPS = ['padding', 'margin'];
const SCALE = [70, 80, 90, 100, 200, 300, 400];

function cssSpacingVar (scaleStep) {
	return `var(--spacing-${scaleStep})`;
}

const result = SCALE.map(step => {

	const rules =  Object.keys(SIDES).map(sideKey => {

		return PROPS.map(prop => {
			const selectors = SIDES[sideKey]
				.map(direction => `.${prop}-${direction}-${step}`).join(',\n');


			return `
${selectors} {
	${prop}-${sideKey}: ${cssSpacingVar(step)};
}
			`;
		}).join('\n');

	}).join('\n');

	return `
/* scale step: ${step} */

${rules}
	`;

}).join('\n');

console.log(result);
