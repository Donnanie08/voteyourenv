const form = document.getElementById('vote-form-2');

form.addEventListener('submit', e=>{
    const choice = document.querySelector('input[name=vehicle]:checked').value;
    const data = {vehicle: choice};

    fetch('http://localhost:3000/poll2',{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .then(data => console.log(data))

    e.preventDefault();
});

fetch('http://localhost:3000/poll2').then(res => res.json())
.then(data => {
    // console.log(data);
    const votes = data.votes;

    const totalVotes = votes.length;
    // //Count vote for each one
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.vehicle] = (acc[vote.vehicle] || 0) + parseInt(vote.points)), acc),
        {}
    );

    let dataPoints = [
        {label: 'Car', y: voteCounts.Car},
        {label: 'Bike', y: voteCounts.Bike}
    ];
    
    const chartContainer = document.querySelector('#chartContainer2');
    
    if(chartContainer){
        CanvasJS.addColorSet("greenShades",
                [//colorSet Array
                "#2F4F4F",
                "#008080"               
                ]);

        const chart = new CanvasJS.Chart('chartContainer2', {
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
                text: `Total Vehicle Votes: ${totalVotes}`,
                fontColor: "#364E4F",
                fontSize: 20
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
    
        Pusher.logToConsole = true;
    
        var pusher = new Pusher('5df99ea18c802431eb03', {
          cluster: 'us2',
          forceTLS: true
        });
    
        var channel = pusher.subscribe('vehicle-poll');
        channel.bind('vehicle-vote', function(data) {
            //add data to chart
            dataPoints = dataPoints.map(x => {
                if(x.label == data.vehicle){
                    x.y += data.points;
                    return x;
                }else{
                    return x;
                }
            });
    
            chart.render();
        });
    }
});



