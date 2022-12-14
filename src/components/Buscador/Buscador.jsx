import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Buscador = ({ onBuscar }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState('');

  return (
    <Paper
      component="div"
      sx={{ p: '4px 6px', display: 'flex', alignItems: 'center', width: 400, marginTop:1, marginBottom:1}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar noticias (Ingresar más de 3 caracteres)"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={criterioBusqueda}
        role="searchbox"
        onChange={(e) => {
          setCriterioBusqueda(e.target.value)
        }}
      />
      <IconButton 
        type="button"
        sx={{ p: '20px' }}
        aria-label="search"
        onClick={() => {
          if (criterioBusqueda.length > 3) {
            onBuscar(criterioBusqueda)
          }
        }}
        role="button"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Buscador