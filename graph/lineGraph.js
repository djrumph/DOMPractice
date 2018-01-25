
var ctx = document.getElementById("myChart");
document.getElementById("soundLevel").innerHTML = 0;
var progress = document.getElementById('animationProgress');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          fill: false,
          backgroundColor: 'rgba(247, 255, 15, 1)',
          borderColor: 'rgba(255, 255, 255, 1)',
          data: [50,40,60,20,70,80,90


          ]

        }, {
                  label: "My Second dataset ",
                  fill: false,
                  borderColor: 'rgba(0, 0, 255, 1)',
                  backgroundColor: 'rgba(0, 0, 255, 1)',
                  data: [10,20,30,40,50,60,70


                  ]
              }]
            },
            options: {
                    title:{
                        display:true,
                        text: "Chart.js Line Chart - Animation Progress Bar"
                    },
                    animation: {
                        duration: 2000,
                        // onProgress: function(animation) {
                        //     progress.value = animation.currentStep / animation.numSteps;
                        // },
                        onComplete: function(animation) {
                            window.setTimeout(function() {
                              //  progress.value = 0;
                            }, 2000);
                        }
                    }
                }


});

// window.onload = function() {
//       var ctx = document.getElementById("canvas").getContext("2d");
//
//   };




var readout = 5;
// setTimeout(function() {
//    addData(myChart, [], 0);
// 	 console.log(readout);
// }, 2000);

function addData(chart, data, datasetIndex) {
   chart.data.datasets[datasetIndex].data = data;
   chart.update();
}


//working on getting the graph to update
var canvas= document.querySelector("canvas");
var test = "test";


/* this commented section is for debigging
function to increase the graph. Will change readout to machine readout
canvas.addEventListener("click", function() {
addData(myChart, [readout], 0);
if(readout >=100)
{
readout =100;
}
else{
	readout +=5;
}

document.getElementById("soundLevel").innerHTML = readout;

});

*/
// canvas.addEventListener("click", function() {
// addData(myChart, [readout], 0);
// if(readout >=100)
// {
// readout =100;
// }
// else{
// 	readout +=5;
// }
// if(readout <50)
// var from = 0;
// var to = 100;
//
//
// let timerId = setInterval(function() {
//   document.getElementById("soundLevel").innerHTML = readout;
//   addData(myChart, [readout], 0);
//   if (readout == to) {
//     clearInterval(timerId);
//   }
  //see if I can make random numbers and get the graph to run for x seconds
  // {
  //   myChart.data.datasets.backgroundColor = 'rgba(0, 255, 0, 1)';
  //   myChart.update();
  // }
//   readout++;
// }, 50);
//
// });
//

// canvas.addEventListener("mouseover", function() {
// addData(myChart, [readout], 0);
// if(readout <=0)
// {
// readout =0;
// }
// else {
// 	readout -=5;
// }
// document.getElementById("soundLevel").innerHTML = readout;

// for(var i = 0; i<30; i++)
// if(i>15)
// {
// 	readout -=5;
// };
// remove
//
// readout +=5;
//
// });





// for(var i = 0; i<30; i++)
// {
// 	number++;
// };