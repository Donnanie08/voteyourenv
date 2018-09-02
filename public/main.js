const form = document.getElementById('vote-form');

//Form submit event
form.addEventListener('submit', e=>{
    
    const choice = document.querySelector('input[name=env]:checked').value;
    const data = {env: choice};

    fetch('http://localhost:3000/poll',{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    e.preventDefault();
});

//hit the get request
fetch('http://localhost:3000/poll').then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;

    //count vote points for each one - accumulator and current value
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.env] = (acc[vote.env] || 0) + parseInt(vote.points)), acc),
        {}
    );

    let dataPoints = [
        {label: 'Kindle', y: voteCounts.Kindle},
        {label: 'Paper', y: voteCounts.Paper}
    ];
    
    const chartContainer = document.querySelector('#chartContainer');
    
    if(chartContainer){
        CanvasJS.addColorSet("greenShades",
        [//colorSet Array
        "#2F4F4F",
        "#008080"               
        ]);

        const chart = new CanvasJS.Chart('chartContainer', {
            animationEnabled: true,
            theme: 'theme1',
            backgroundColor: "transparent",
            colorSet: "greenShades",
            axisY:{
                title: "",
                tickLength: 0,
                lineThickness:0,
                gridThickness: 0,
                margin:0,
                valueFormatString:" " //comment this to show numeric values
            },
            axisX: {
                tickLength: 0,
                lineThickness:0,
                valueFormatString:" "
            },
            title: {
                text: `Total Reading Votes: ${totalVotes}`,
                fontColor: "#364E4F",
                fontSize: 30
            },
            data: [
                {
                    type: 'bar',
                    dataPoints: dataPoints,
                    indexLabel: "{y}"
                }
            ]
        });
        chart.render();

        //add liveview here
    
        //implement Pusher
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;
    
        var pusher = new Pusher('d3992811c04d6474365b', {
          cluster: 'us2',
          encrypted: true
        });
    
        var channel = pusher.subscribe('env-poll');
        channel.bind('env-vote', function(data) {
            //add data to chart
            dataPoints = dataPoints.map(x => {
                if(x.label == data.env){
                    x.y += data.points;
                    return x;
                }else{
                    return x;
                }
            });
            //re-render the chart to update
            chart.render();
        });
    }
});

