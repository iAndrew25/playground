const fs = require('fs');

const name = process.argv[2],
	nameToTitle = name.split('-').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(''),
	directory = `./${name}`;

if (!fs.existsSync(directory)){
	fs.mkdirSync(directory);
}

const testContent = `import React, {Fragment} from 'react';
import ${nameToTitle} from './${name}';
import {shallow} from 'enzyme';

/**
 * @test {${nameToTitle}}
 */
describe('${nameToTitle} render', () => {

	const ${nameToTitle}Instance = shallow(
		<${nameToTitle} />
	);

	test('${nameToTitle} component renders correctly', () => {
		expect(${nameToTitle}Instance).toBeTruthy();
	});
});`,
	jsContent = `import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * ${nameToTitle} component
 * @author Otea Andrei <otea@optymyze.com>
 * 
 * @example
 *	
 * <${nameToTitle} />
 */
export default class ${nameToTitle} extends React.Component {
	/**
	 * @ignore
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * propTypes
	 * @property {type} name
	 */
	static get propTypes() {
		return {
			name: PropTypes,
		};
	}

	/**
	 * @ignore
	 */
	render() {
		return (
			<div>

			</div>
		);
	}
}`;

fs.appendFile(`${directory}/${name}.js`, jsContent, err => !err && console.log('JS Generated.'));
fs.appendFile(`${directory}/${name}.test.js`, testContent, err => !err && console.log('Test Generated.'));
fs.appendFile(`${directory}/${name}.scss`, '', err => !err && console.log('SCSS Generated.'));