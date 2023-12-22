import { Typography } from '@material-tailwind/react';
import { IsolationForest } from 'isolation-forest'
import React from 'react'
import axios from 'axios';


const MlModel = () => {
    const generateModel=() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
                const ans = response.data;
                
                
                const prep = Array.from(ans);
                const gyrox = prep.slice(0,90).map(entry => parseFloat(entry.maxGyroX));
                const gyroy = prep.slice(0,90).map(entry => parseFloat(entry.maxGyroY));
                const gyroxdata = prep.slice(-10).map(entry => parseFloat(entry.maxGyroX));
                const gyroydata = prep.slice(-10).map(entry => parseFloat(entry.maxGyroY));

                console.log(gyrox)
                console.log(gyroy)
                console.log(gyroxdata)
                console.log(gyroydata)
              
                const dataprep = gyrox.map((name, index) => ({
                    x: gyrox[index],
                    y: gyroy[index],
                 
                  }));
                  const dataset = gyroxdata.map((name, index) => ({
                    x: gyroxdata[index],
                    y: gyroydata[index],
                 
                  }));
                console.log(dataprep);
                
                    var isolationForest = new IsolationForest();
                    isolationForest.fit(dataprep)
                     // Type ObjectArray ({}[]); 
            
                    var trainingScores = isolationForest.scores()
                    console.log(trainingScores)
            
                    // then predict any data
                    var scores = isolationForest.predict(dataset)
                    console.log(scores)
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            } 
            
        };

        fetchData();
    }

  /*  const detect =()=>{
        var isolationForest = new IsolationForest();
        isolationForest.fit(trainingData)
         // Type ObjectArray ({}[]); 

        var trainingScores = isolationForest.scores()

        // then predict any data
        var scores = isolationForest.predict(data)

    }*/

  return (
    <div>
        <button onClick={() =>generateModel()}> model</button>
    </div>
  )
}

export default MlModel