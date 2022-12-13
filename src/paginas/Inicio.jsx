import { Container } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getListadoNoticias } from "../services/noticias";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Buscador from "../components/Buscador/Buscador";
import { ListaNoticias } from "../components/Noticia/Noticia";
import Paginador from "../components/Paginador/Paginador";
import Footer from "../components/Footer/Footer";
import { DEFAULT_IMAGE } from "../libs/constantes";
import Header from "../components/Header/Header";


const Inicio = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalResultado, setTotalResultado] = useState(0);
    const [hayResultado, setHayResultado] = useState(false)

    const buscarNoticias = async (pagina) => {
        setIsLoading(true);        
        const {Search: _status, articles, totalResults} = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(articles);
        setTotalResultado(totalResults)
        setHayResultado(Boolean(totalResults))
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    }

    useEffect(() => {
        if (searchParams.get('query')) {
            buscarNoticias(pagina)
        }
    }, [searchParams, pagina]);

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    }

    return (
        <div>
            <Header />
            <Container maxWidth='xl'>
                <div id='busqueda'><Buscador onBuscar={onBuscar}/></div>
                { isLoading && <Loading /> }
                { !isLoading && noticias && !hayResultado && <div><img src={DEFAULT_IMAGE} width="120" alt="No hay resultado"/><h3>No se encontró nada relacionado con "{searchParams.get('query')}".</h3></div> }
                { noticias && hayResultado && <h3>Resultado 10 noticias de {totalResultado} resultados.</h3> }
                { noticias && <ListaNoticias noticias={noticias} /> }
                <div id='busqueda'>{ noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }</div>
            </Container>
            { !hayResultado && <Footer />}
        </div>
    )

};

export default Inicio;