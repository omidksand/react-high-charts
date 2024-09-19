import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsTreeGraph from "highcharts/modules/treegraph";
import HighchartsTreeMap from "highcharts/modules/treemap";


try {
	HighchartsTreeMap(Highcharts);
	HighchartsTreeGraph(Highcharts);
} catch (e) {
	console.error("tree graph error: ", e);
}

export default function ChartView({ options }: any) {
	return (
		<HighchartsReact
			allowChartUpdate={false}
			highcharts={Highcharts}
			options={options}
		/>
	)
}
