import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"
const Infobox = ({info}) => {
    let img = "https://media.istockphoto.com/id/1469168772/photo/image-of-clouds-over-cityscape-view-of-new-delhi-uttar-pradesh-india-indian-apartment-block.jpg?s=1024x1024&w=is&k=20&c=-oogXdrR8ewlxiwYhVC3P98GTXzSsXyOmFMwUHe8ss0=";
    
  return (
    <div className="infobox">
           <div className='card'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.temphumidity}</p>
          <p>Min Temp = {info.tempmin}&deg;C</p>
          <p>Max Temp = {info.tempmax}&deg;C</p>
          <p>The Weather  can be described as {info.weather}   feels like {info.tempfeelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
  )
}

export default Infobox
