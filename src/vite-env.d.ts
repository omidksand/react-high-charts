/// <reference types="vite/client" />

declare module highcharts {
	interface Options {
		myCustomOption: Record;
	}
}

declare global {
	var chartDATA: any;
}

export { };
