import { Button, Typography } from '@material-tailwind/react';
import { IsolationForest } from 'isolation-forest'
import React, { useState } from 'react'
import axios from 'axios';
import dataset from './dataset';
import { LineChart } from '@mui/x-charts';


const MlModel = () => {
    const [scoreData, setScoreData] = useState([])
    let val;
    const generateModel=() => {
      
        
        const fetchData = async () => {
            try {
                const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
                const ans = response.data;
                
                
                const prep = Array.from(ans);
                const gyroxdata = prep.map(entry => parseFloat(entry.maxGyroX));
                const gyroydata = prep.map(entry => parseFloat(entry.maxGyroY));

                
                console.log(gyroxdata)
                console.log(gyroydata)
              
                {/*const dataprep = gyrox.map((name, index) => ({
                    x: gyrox[index],
                    y: gyroy[index],
                 
                  })); */}
                  const dataprep = gyroxdata.map((name, index) => ({
                    x: gyroxdata[index],
                    y: gyroydata[index],
                 
                  }));
                console.log(dataprep);
                
                    var isolationForest = new IsolationForest();
                    isolationForest.fit(dataprep)
                     // Type ObjectArray ({}[]); 
            
                    var trainingScores = isolationForest.scores();
                    console.log(trainingScores)
            
                    // then predict any data
                    var scores = isolationForest.predict(dataset)
                    console.log(scores)
                    setScoreData(scores)

                    for(let i = 0; i< scoreData.length; i++){
                      console.log(scoreData[i])
                      if(scoreData[i] > 0.5){
                      
                        alert("Anamoly Detected") ;
                      }
                    }
                    
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
    <div className='w-[700px] flex flex-col items-center gap-2'>
        
        <Typography className="font-bold text-black text-2xl" >Gyroscopic analysis</Typography>
        <div className='bg-yellow-500 rounded-xl'>
        
        <LineChart
                    xAxis={[{ data: Array.from({ length: scoreData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            data: scoreData,  color: '#000000'
                        },
                        
                    ]}
                    width={500}
                    height={300}
                />
        

        </div>
        

        <Button onClick={() =>{generateModel()}} color='red' className='mb-8'> Generate Model</Button>
        
      

    </div>
  )
}

export default MlModel