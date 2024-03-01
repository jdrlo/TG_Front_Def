import React, { useEffect, useState } from "react";
import { listarProductos } from "services/productoService";
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

function Tables() {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    async function listar() {
      const res = await listarProductos();
      setProducto(res.data);
    }
    listar();
  }, []);

  return (
    <DashboardLayout>

      <SoftBox py={3} bgcolor="#f5f5f5">
        <Card elevation={5}>

        <Typography variant="h2" color="#00CCCC" sx={{ textAlign: "center", marginBottom: 4, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}>
            {'>>> MENÚ <<<'}
          </Typography>


          <CardContent>

            <Grid container spacing={10}>
              {producto.map((prod) => (
                <Grid key={prod.id} item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2, borderRadius: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #ccc', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    {prod.imagen_Producto && (
                      <img
                        src={prod.imagen_Producto}
                        alt={prod.nombre_Producto}
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

                    <h1>{prod.nombre_Producto.charAt(0).toUpperCase() + prod.nombre_Producto.slice(1).toLowerCase()}</h1>
                    <p style={{ marginBottom: 8, fontWeight: 'bold', fontSize: '1.2em' }}>Precio: ${prod.precio_Producto}</p>


                  </Paper>
                </Grid>
              ))}
            </Grid>

          </CardContent>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout >
  );
}

export default Tables;
