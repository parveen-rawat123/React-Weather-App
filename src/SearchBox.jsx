import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
const SearchBox = ({ updateinfo }) => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "38e8a5abff9f1d024a24e2d171595bac";
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  

  let getWeather = async () => {
    try{
        let responce = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
          );
          let jsonrespoce = await responce.json();
          let result = {
            city: city,
            temp: jsonrespoce.main.temp,
            tempmin: jsonrespoce.main.temp_min,
            tempmax: jsonrespoce.main.temp_max,
            temphumidity: jsonrespoce.main.humidity,
            tempfeelslike: jsonrespoce.main.feels_like,
            weather: jsonrespoce.weather[0].description,
          };
          return result
    }catch(err){
        throw err
    }    
  }

  let handlechnage = (event) => {
    setcity(event.target.value);
  };

  let handlesubmit = async (e) => {
    try{
        e.preventDefault();
        setcity("");
        let newinfo = await getWeather();
        updateinfo(newinfo);
    }catch{
        seterror(true)
    }
  };
  return (
    <div className="searchbox">
      <form onClick={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechnage}
        />
        <br /> <br /> <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && <p style={{color:"red"}}> no such place exist</p>}
      </form>
    </div>
  );
};
export default SearchBox;
