import SearchBox from "./SearchBox"
import Infobox from "./Infobox"
import { useState } from "react"
const Weatherapp = () => {
    let [Weatherinfo,setWeatherinfo] = useState({
        city:"delhi",
        temp :  23,
        feelslike: 18,
        humidity: 60,
        tempMin:45, 
        tempMax:45, 
        description:"Clear",
    })
    let updateinfo = (result) =>{
       setWeatherinfo(result)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App By  React</h2>
      <SearchBox updateinfo ={updateinfo}/>
      <Infobox info = {Weatherinfo}/>
    </div>
  )
}

export default Weatherapp
