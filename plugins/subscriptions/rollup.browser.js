import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/subscriptions.ts',
		output: {
			name: 'graphql-genie',
			file: pkg.browser,
			format: 'umd',
			globals: {
				'graphql': 'graphql_1',
				'lodash': 'lodash',
				'fortune': 'fortune',
				'graphql-tools': 'graphql-tools',
				'graphql-subscriptions': 'graphql-subscriptions',
				'graphql-genie': 'graphql-genie'
			}
		},
		watch: {
			include: 'src/**'
		},
		onwarn,
		plugins: [
			typescript({
				tsconfig: "tsconfigBrowser.json",
			})
		],
		external: ['graphql-subscriptions', 'graphql-tools', 'graphql-genie', 'lodash', 'graphql', 'graphql/language', 'graphql/execution/values', 'graphql/language/printer', 'graphql/error']

	}
];


function onwarn(message) {
  const suppressed = ['THIS_IS_UNDEFINED'];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
