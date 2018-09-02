



fetch('http://localhost:3000/poll').then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;

    //count vote points for each one - accumulator and current value
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.env] = (acc[vote.env] || 0) + parseInt(vote.points)), acc),
        {}
    );

    Pusher.logToConsole = true;

    var pusher = new Pusher('d3992811c04d6474365b', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('env-poll');
    channel.bind('env-vote', function(data) {
        //add data to chart
        addTree();
      });

    function addTree() {
      var x = document.createElement("IMG");
      x.style.position = "absolute";
      w = (screen.height - x.height) / 5;
      h = screen.width - x.width;
      x.setAttribute("src", "http://www.onlygfx.com/wp-content/uploads/2017/04/watercolor-pine-tree-1.png");
      x.setAttribute("width", "100");
      x.setAttribute("height", "200");
      x.setAttribute("alt", "tree");
      // x.setAttribute("id", "cloud0");

      document.getElementById('imageDiv').appendChild(x);

      // x.style.top = Math.round(Math.random() * w) + "px";
      // x.style.left = Math.round(Math.random() * h) + "px";
      x.style.top = Math.round(Math.random() * 20)+155 + "vh";
      x.style.left = Math.round(Math.random() * 90) + "vw";

    }


    var i;
    for (i = 0; i < voteCounts.Kindle; i++){
      addTree();
    }

});

fetch('http://localhost:3000/poll2').then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;

    //count vote points for each one - accumulator and current value
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.vehicle] = (acc[vote.vehicle] || 0) + parseInt(vote.points)), acc),
        {}
    );

    var pusher = new Pusher('5df99ea18c802431eb03', {
      cluster: 'us2',
      forceTLS: true
    });

    var channel = pusher.subscribe('vehicle-poll');
    channel.bind('vehicle-vote', function(data) {
        //add data to chart
        addCloud();
      });

    function addCloud() {
      var x = document.createElement("IMG");
      x.style.position = "absolute";
      w = (screen.height - x.height) / 5;
      h = screen.width - x.width;
      x.setAttribute("src", "http://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1.png");
      x.setAttribute("width", "100");
      x.setAttribute("height", "72");
      x.setAttribute("alt", "cloud");
      x.setAttribute("id", "cloud0");

      document.getElementById('imageDiv').appendChild(x);

      // x.style.top = Math.round(Math.random() * w) + "px";
      // x.style.left = Math.round(Math.random() * h) + "px";
      x.style.top = Math.round(Math.random() * 20)+105 + "vh";
      x.style.left = Math.round(Math.random() * 90) + "vw";

    }


    var i;
    for (i = 0; i < voteCounts.Bike; i++){
      addCloud();
    }

});


//implement real time charts on index.html
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
                margin: 20
            },
            title: {
                text: `Total Reading Votes: ${totalVotes}`,
                fontColor: "#364E4F",
                fontSize: 30
            },
            data: [
                {
                    type: 'column',
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
                lineThickness:0
            },
            title: {
                text: `Total Vehicle Votes: ${totalVotes}`,
                fontColor: "#364E4F",
                fontSize: 30
            },
            data: [
                {
                    type: 'column',
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