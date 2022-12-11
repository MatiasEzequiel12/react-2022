import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE } from '../../libs/constantes';
import { Grid } from '@mui/material';


const Noticia = ({
  noticia,
  onChange
}) => {
    const onCardClick = () => {
      onChange && onChange(window.open(noticia.url, "_blank"));
    };

    const formatoFecha = (isoString) => {
      const f = new Date(isoString); 
      return (
        'Publicado el: '
        + ('0' + f.getDate()).slice(-2) + '-' 
        + ('0' + f.getMonth()).slice(-2) + '-' 
        + f.getFullYear() + ' a las '
        + ('0' + f.getHours()).slice(-2) + ':'
        + ('0' + f.getMinutes()).slice(-2) + ' hs'
      )
    }


    return (
      <Grid item xs={12} md={6}>
      <Card sx={{ width: 450, marginBottom: 10, }}>
        <CardActionArea onClick={onCardClick}>
          <CardMedia
            component="img"
            width={250}
            image={noticia.urlToImage  === 'NA' ? DEFAULT_IMAGE : noticia.urlToImage}
            alt={noticia.title}
          />
          
          <CardContent sx={{ flex:0}}>
            <Typography variant="body2" color="text.secondary">
              {noticia.source.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {noticia.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {formatoFecha(noticia.publishedAt)}
            </Typography>
          </CardContent>
          
        </CardActionArea>
      </Card>
      </Grid>
    )
}

export const ListaNoticias = ({ noticias }) => {
    return (
      <section style={{
        display: 'inline-block',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '5px',
        textAlign: 'left',
        position: 'relative',
      }}>
        {
          noticias.map((noticia) => {
            return <Noticia noticia={noticia} onChange={ function(d) { return d.url; } }/>
        })
        }
      </section>
    )
}

export default Noticia;