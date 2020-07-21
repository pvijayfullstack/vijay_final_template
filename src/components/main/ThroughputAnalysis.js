

import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            'Juicy/Hazy IPAs',
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'This Period',
        data: [1000.9, 1071.5, 1006.4, 1229.2, 1444.0, 1876.0, 1335.6, 1348.5, 2416.4, 1494.1, 1345.6, 1254.4, 2416.4]

    }, {
        name: 'Prior Period',
        data: [1083.6, 2078.8, 2598.5, 2393.4, 1006.0, 4184.5, 3215.0, 4104.3, 3491.2, 2383.5, 5106.6, 4392.3, 2416.4]

    }, {
        name: 'Prior Year',
        data: [4428.9, 3238.8, 4339.3, 5341.4, 4347.0, 4438.3, 5439.0, 5943.6, 5243.4, 6532.2, 5932.3, 5143.2, 6416.4]

    }]
}

const ThroughputAnalysis = (style) => {
    return(
      <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default ThroughputAnalysis