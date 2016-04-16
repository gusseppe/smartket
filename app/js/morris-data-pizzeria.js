$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            pizzeria_camuente: 58786,
            pizzeria_antica: 44407,
            pizzeria_la_bruchetta: 33471
        }, {
            period: '2010 Q2',
            pizzeria_camuente: 50280,
            pizzeria_antica: 20731,
            pizzeria_la_bruchetta: 20731
        }, {
            period: '2010 Q3',
            pizzeria_camuente: 38190,
            pizzeria_antica: 38064,
            pizzeria_la_bruchetta: 37902
        }, {
            period: '2010 Q4',
            pizzeria_camuente: 37274,
            pizzeria_antica: 24952,
            pizzeria_la_bruchetta: 55267
        }, {
            period: '2011 Q1',
            pizzeria_camuente: 67713,
            pizzeria_antica: 20204,
            pizzeria_la_bruchetta: 53490
        }, {
            period: '2011 Q2',
            pizzeria_camuente: 50922,
            pizzeria_antica: 20488,
            pizzeria_la_bruchetta: 18212
        }, {
            period: '2011 Q3',
            pizzeria_camuente: 49902,
            pizzeria_antica: 21374,
            pizzeria_la_bruchetta: 35669
        }, {
            period: '2011 Q4',
            pizzeria_camuente: 32403,
            pizzeria_antica: 15146,
            pizzeria_la_bruchetta: 47115
        }, {
            period: '2012 Q1',
            pizzeria_camuente: 45136,
            pizzeria_antica: 21034,
            pizzeria_la_bruchetta: 49420
        }, {
            period: '2012 Q2',
            pizzeria_camuente: 52121,
            pizzeria_antica: 19230,
            pizzeria_la_bruchetta: 51525
        }],
        xkey: 'period',
        ykeys: ['pizzeria_camuente', 'pizzeria_antica', 'pizzeria_la_bruchetta'],
        labels: ['pizzeria_camuente', 'pizzeria_antica', 'pizzeria_la_bruchetta'],
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
