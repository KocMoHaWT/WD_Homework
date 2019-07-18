google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let rate = [];
    $.getJSON("vote.json", function (jsonData) {
        console.log(jsonData);
        for(let i = 0; i < jsonData.length; i++) {
            rate.push([jsonData[i].name,jsonData[i].number])
        }
        let data =  new google.visualization.DataTable();
        data.addColumn("string","choice");
        data.addColumn("number", "rating");
        data.addRows(rate);
        let options = {
            title: 'Spoon Activities',
            is3D: true,
            "width": 900,
            "height": 500
        };
        let chart = new google.visualization.PieChart(document.getElementById('spoonChart'));
        chart.draw(data, options);
    });

}


