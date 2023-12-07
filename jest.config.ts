import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	transform: {
		'^.+\\\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/src/$1',
	}
};

export default config;