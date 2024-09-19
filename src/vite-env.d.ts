/// <reference types="vite/client" />

declare module `highcharts` {
	interface Options {
		myCustomOption: Record;
	}
}
