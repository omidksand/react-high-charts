import ChartView from "./components/ChartView"

export default function CharExample() {
	const chartOption: any = {
		credits: {
			enabled: false
		},
		...globalThis.chartDATA,
	};
	return (
		<ChartView options={chartOption} />
	)
}
