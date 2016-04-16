$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 Q1',
            floreria_belen: 2666,
            floreria_unidas: null,
            floreria_linnette: 2647
        }, {
            period: '2015 Q2',
            floreria_belen: 2778,
            floreria_unidas: 2294,
            floreria_linnette: 2441
        }, {
            period: '2015 Q3',
            floreria_belen: 4912,
            floreria_unidas: 1969,
            floreria_linnette: 2501
        }, {
            period: '2015 Q4',
            floreria_belen: 3767,
            floreria_unidas: 3597,
            floreria_linnette: 5689
        }, {
            period: '2016 Q1',
            floreria_belen: 6810,
            floreria_unidas: 1914,
            floreria_linnette: 2293
        }, {
            period: '2016 Q2',
            floreria_belen: 5670,
            floreria_unidas: 4293,
            floreria_linnette: 1881
        }, {
            period: '2016 Q3',
            floreria_belen: 4820,
            floreria_unidas: 3795,
            floreria_linnette: 1588
        }, {
            period: '2016 Q4',
            floreria_belen: 15073,
            floreria_unidas: 5967,
            floreria_linnette: 5175
        }, {
            period: '2017 Q1',
            floreria_belen: 10687,
            floreria_unidas: 4460,
            floreria_linnette: 2028
        }, {
            period: '2017 Q2',
            floreria_belen: 8432,
            floreria_unidas: 5713,
            floreria_linnette: 1791
        }],
        xkey: 'period',
        ykeys: ['floreria_belen', 'floreria_unidas', 'floreria_linnette'],
        labels: ['floreria_belen', 'floreria_unidas', 'floreria_linnette'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
