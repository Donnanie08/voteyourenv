fetch('http://localhost:3000/poll').then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;

    //count vote points for each one - accumulator and current value
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.env] = (acc[vote.env] || 0) + parseInt(vote.points)), acc),
        {}
    );
    console.log(voteCounts.Paper);
    function addCloud() {
      var x = document.createElement("IMG");
      x.setAttribute("src", "http://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1.png");
      x.setAttribute("width", "100");
      x.setAttribute("height", "72");
      x.setAttribute("alt", "cloud");
      document.body.appendChild(x);
    }
    function myFunction() {
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
      x.style.top = Math.round(Math.random() * w + screen.height) + "px";
      x.style.left = Math.round(Math.random() * h) + "px";
    }

    var i;
    for (i = 0; i < voteCounts.Paper; i++){
      myFunction();
    }



    // let dataPoints = [
    //     {label: 'Kindle', y: voteCounts.Kindle},
    //     {label: 'Paper', y: voteCounts.Paper}
    // ];

    // const chartContainer = document.querySelector('#chartContainer');

    // if(chartContainer){
    //     const chart = new CanvasJS.Chart('chartContainer', {
    //         animationEnabled: true,
    //         theme: 'theme1',
    //         title: {
    //             text: `Total Votes: ${totalVotes}`
    //         },
    //         data: [
    //             {
    //                 type: 'column',
    //                 dataPoints: dataPoints
    //             }
    //         ]
    //     });
    //     chart.render();

        //add liveview here

        //implement Pusher
        // Enable pusher logging - don't include this in production
        // Pusher.logToConsole = true;
        //
        // var pusher = new Pusher('d3992811c04d6474365b', {
        //   cluster: 'us2',
        //   encrypted: true
        // });
        //
        // var channel = pusher.subscribe('env-poll');
        // channel.bind('env-vote', function(data) {
        //     //add data to chart
        //     dataPoints = dataPoints.map(x => {
        //         if(x.label == data.env){
        //             x.y += data.points;
        //             return x;
        //         }else{
        //             return x;
        //         }
        //     });
        //     //re-render the chart to update
        //     chart.render();
        // });
    // }
});
