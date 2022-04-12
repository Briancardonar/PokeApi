import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardImage = ({ nombrePokemon, infoPokemon, imgPokemon, heightImgPokemon, nameImage }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={imgPokemon}
          height={heightImgPokemon}
          image={`pokeimage${nameImage}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombrePokemon}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {infoPokemon}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardImage;