import ChartView from "./components/ChartView"

export default function CharExample() {
	const chartOption: any = globalThis.chartDATA;
	return (
		<ChartView options={chartOption} />
	)
}
