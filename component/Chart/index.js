import { BarChart, Bar, XAxis, YAxis ,CartesianGrid,Tooltip,Legend} from 'recharts'
import './index.css'
const data = [
  {
    "name": "0-100",
    "Sold": 19
  },
  {
    "name": "100-300",
    "Sold": 9
  },
  {
    "name": "300-700",
    "Sold": 11
  },
  {
    "name": "700-1000",
    "Sold": 6
  },
  {
    "name": "Above 1000",
    "Sold": 15
  },
  
]

  const Chart = () => {
    return ( 
      <div className='ch1'>
        <div className='ch2'>                      
<BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Sold" fill="#8884d8" />
</BarChart> 
    </div> </div>  )}

    export default Chart


    