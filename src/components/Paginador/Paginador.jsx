import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    };

    return (
        <Pagination
            count={cantidadPaginas}
            variant="outlined"
            color="primary"
            onChange={cambiaPagina}
        />
    );
}


export default Paginador;