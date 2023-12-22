import React from 'react'

const alerts = () => {
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_alert_ubi");
            const ans = response.data;
            console.log(ans)
    
      } catch (error) {
        console.error("Error fetching or processing speed data:", error);
    }
};

fetchData();
}, []);
  return (
    <div>alerts</div>
  )
}

export default alerts