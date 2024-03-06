import React, { useEffect, useState } from "react";
import { listarMatch } from "services/matchService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftBox from "components/SoftBox";
import Button from "@mui/material/Button";

function obtenerIndiceAleatorio(arreglo) {
  const numeroAleatorio = Math.random();
  const indiceAleatorio = Math.floor(numeroAleatorio * arreglo.length);
  return indiceAleatorio;
}

function VirtualReality() {
  const [matches, setMatches] = useState([]);
  const [matchAleatorio, setMatchAleatorio] = useState(null);

  useEffect(() => {
    async function listar() {
      try {
        const res = await listarMatch();
        const data = res.data;
        setMatches(data);

        // Obtener un índice aleatorio al cargar los datos
        const indiceAleatorio = obtenerIndiceAleatorio(data);
        setMatchAleatorio(data[indiceAleatorio]);
      } catch (error) {
        console.error("Error al obtener los usuarios del match:", error);
      }
    }
    listar();
  }, []);

  // Función para obtener un nuevo match aleatorio
  const obtenerNuevoMatchAleatorio = () => {
    const indiceAleatorio = obtenerIndiceAleatorio(matches);
    setMatchAleatorio(matches[indiceAleatorio]);
  };

  return (
    <DashboardLayout>
      <SoftBox py={3} bgcolor="#f5f5f5">
        <Card elevation={5}>

          <Typography variant="h2" color="#00CCCC" sx={{ textAlign: "center", marginBottom: 4, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}>
            {'>>> MATCH <<<'}
          </Typography>

          <CardContent>
            <Grid container spacing={2}>
              {matchAleatorio && (
                <Grid item xs={12}>
                  <Paper elevation={3} sx={{ p: 2, borderRadius: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ marginBottom: 8, fontWeight: 'bold', fontSize: '1.2em' }}>Nombre: {matchAleatorio.name}</p>
                    <p style={{ marginBottom: 8, fontWeight: 'bold', fontSize: '1.2em' }}>Apellido: {matchAleatorio.apellido_Usuario}</p>
                    <p style={{ marginBottom: 8, fontWeight: 'bold', fontSize: '1.2em' }}>Teléfono: {matchAleatorio.telefono}</p>
                    

                    {matchAleatorio.foto_Usuario && (
                      <img
                        src={matchAleatorio.foto_Usuario.url}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: 8,
                          width: "400px",
                          height: "400px",
                          margin: '0 auto',
                        }}
                      />
                    )}
                  </Paper>
                </Grid>
              )}
            </Grid>
          </CardContent>


          <Button variant="contained" color="primary" onClick={obtenerNuevoMatchAleatorio} sx={{ marginTop: 2 }}>
            Buscar
          </Button>

        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default VirtualReality;
