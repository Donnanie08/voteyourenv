fetch('http://localhost:3000/poll').then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;

    //count vote points for each one - accumulator and current value
    const voteCounts = votes.reduce((acc, vote) => (
        (acc[vote.env] = (acc[vote.env] || 0) + parseInt(vote.points)), acc),
        {}
    );


    function addTree() {
      var x = document.createElement("IMG");
      x.style.position = "absolute";
      w = (screen.height - x.height) / 5;
      h = screen.width - x.width;
      x.setAttribute("src", "http://www.onlygfx.com/wp-content/uploads/2017/04/watercolor-pine-tree-1.png");
      x.setAttribute("width", "100");
      x.setAttribute("height", "110");
      x.setAttribute("alt", "tree");
      // x.setAttribute("id", "cloud0");

      document.getElementById('imageDiv').appendChild(x);

      // x.style.top = Math.round(Math.random() * w) + "px";
      // x.style.left = Math.round(Math.random() * h) + "px";
      x.style.top = Math.round(Math.random() * 20)+165 + "vh";
      x.style.left = Math.round(Math.random() * 80) + "vw";

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
      x.style.left = Math.round(Math.random() * 80) + "vw";

    }


    var i;
    for (i = 0; i < voteCounts.Bike; i++){
      addCloud();
    }

});
