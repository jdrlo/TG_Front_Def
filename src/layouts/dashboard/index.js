import React, { useEffect, useState } from "react";
import { listarEventos } from "services/eventoService"; 
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function dashborard() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function listar() {
      try {
        const res = await listarEventos(); 
        setEventos(res.data);
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    }
    listar();
  }, []);

  return (
    <DashboardLayout>
      <SoftBox py={3} bgcolor="#f5f5f5">
        <Card elevation={5}>
          <Typography variant="h2" color="black" sx={{ textAlign: "center", marginBottom: 2 }}>
            {'>>> EVENTOS <<<'}
          </Typography>
          <CardContent>
            <Grid container spacing={2}>
              {eventos.map((evento) => (
                <Grid key={evento.id_Foto} item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2, borderRadius: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ marginBottom: 8 }}>Precio Palco: ${evento.precio_Palco}</p>
                    {evento.foto && (
                      <img
                        src={evento.foto}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: 8,
                          width: "200px", 
                          height: "200px", 
                          margin: '0 auto', 
                        }}
                      />
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default dashborard;
