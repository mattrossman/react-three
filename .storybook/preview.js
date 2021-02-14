import { themes } from '@storybook/theming'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
	// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
	actions: { argTypesRegex: '^on.*' },
	layout: 'fullscreen',
	docs: {
		theme: themes.dark,
	},
	canvas: {
		hidden: true,
	},
}
