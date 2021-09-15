window.onload = function () {



    document.getElementById("btn").onclick = function(){
        d=document.getElementById("myDt").value
        console.log(d)
        runPy()
        
    }

    // passer la date au prgm python pour avoir le resultat de la semaine choisi
 
        function runPy() {
            $.ajax({
                method: "GET",
                url: "AnalyseData.py",
                dataType: "script"
              });
            console.log("is it working !!")
        }


    var dataSet=[]; 
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Les 10 mots les plus fréquents pour cette semaine"
        },
        axisY: {
            title: "Nbr d'occurrence",
            
        },
        axisX: {
            title: "Les mots"
        },
        data: [{
            type: "column",
           
            dataPoints:dataSet
        }]
    });


    fetch("myDataResult.json")
    .then(response => response.json())
    .then(data => { 
        myData = data.data 
        for(var i = 0; i < 10; i++){
            dataSet.push({ label: myData[i][0], y: myData[i][1]});   
        }
        
        chart.render();

    });


   
    }