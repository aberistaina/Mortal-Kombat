import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Container} from "@mui/material"


export const Luchador = () =>{
    const {id, nombre} = useParams()
    

    const [luchador, setLuchador] = useState({})

    const getData = async() =>{
        
        let response = await fetch(`http://localhost:3000/api/v1/mortalkombat/${id}/${nombre}`)
        let data = await response.json()
        setLuchador(data.data)    
    }
    
    useEffect(() => {
        getData();
    }, []);

    return(
        <Box sx={{
            backgroundImage: 'url("https://i.pinimg.com/originals/3a/5e/d0/3a5ed058b2aab108e8b81c39b7da9e5e.jpg")',
            backgroundSize: "cover",
            }}>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "70px"}}>
                <img src={luchador.imagen} alt={luchador.nombre} style={{height: "500px"}} />
            </div>
            <div>
                <h1 style={{color: "white", textAlign: "center", paddingTop:"20px"}}>{luchador.nombre}</h1>
                <p style={{textAlign: "center", paddingTop:"20px"}}><img src={`../public/img/${luchador.apariciones}.png`} style={{ height: "90px" }} /></p>
                <h3 style={{color: "white", textAlign: "center", paddingTop:"20px"}}>Reino: {luchador.reino}</h3>
                <h4 style={{color: "white", textAlign: "center", paddingTop:"20px"}}>Raza: {luchador.raza}</h4>
                <Container>
                <p style={{color: "white", textAlign: "center", paddingTop:"20px", paddingBottom: "20px"}}>{luchador.historia}</p>
                </Container>
                
            </div>
        </Box>
    )
}