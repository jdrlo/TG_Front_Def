// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField"; // Nuevo

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { Typography } from "@mui/material";
import { listarClientes } from "services/usuarioService";
import React, { useEffect, useState } from "react";

function Overview() {
  const [clientes, setClientes] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombreModificado, setNombreModificado] = useState("");
  const [apellidoModificado, setApellidoModificado] = useState("");

  useEffect(() => {
    async function listar() {
      try {
        const res = await listarClientes();
        setClientes(res.data);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    }
    listar();
  }, []);

  const primerCliente = clientes.length > 0 ? clientes[0] : null;

  const handleModificar = () => {
    setModalAbierto(true);
  };

  const handleCloseModal = () => {
    setModalAbierto(false);
  };

  const handleChangeNombre = (event) => {
    setNombreModificado(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellidoModificado(event.target.value);
  };

  const handleGuardar = () => {
    // Aquí puedes implementar la lógica para guardar los datos modificados.
    // Por ahora, simplemente cerraremos el diálogo.
    setModalAbierto(false);
  };

  return (
    <DashboardLayout>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <Typography
                variant="h2"
                color="#00CCCC"
                sx={{
                  textAlign: "center",
                  marginBottom: 4,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {'>>> PERFIL <<<'}
              </Typography>
            </SoftBox>
          </SoftBox>
          <CardContent>
            <Grid container spacing={2}>
              {primerCliente && (
                <Grid key={primerCliente.id_Cliente} item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      borderRadius: 8,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" paragraph>
                      Nombre: {primerCliente.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Apellido: {primerCliente.apellido_Usuario}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Cédula: {primerCliente.cedula}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Email: {primerCliente.email}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Teléfono: {primerCliente.telefono}
                    </Typography>
                    {primerCliente.foto_Usuario && (
                      <img
                        src={primerCliente.foto_Usuario}
                        alt={`Foto de ${primerCliente.name}`}
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
                    <Typography variant="body1" paragraph>
                      Match: {primerCliente.match}
                    </Typography>

                    <Button variant="contained" color="primary" onClick={handleModificar}>
                      Modificar Datos
                    </Button>

                    <Dialog open={modalAbierto} onClose={handleCloseModal}>
                      <DialogTitle>Modificar Datos</DialogTitle>
                      <DialogContent>
                        <TextField
                          label="Nombre"
                          variant="outlined"
                          defaultValue={primerCliente.name}
                          value={nombreModificado}
                          onChange={handleChangeNombre}
                          fullWidth
                          margin="normal"
                        />
                        <TextField
                          label="Apellido"
                          variant="outlined"
                          value={apellidoModificado}
                          onChange={handleChangeApellido}
                          fullWidth
                          margin="normal"
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleGuardar} color="primary">
                          Guardar
                        </Button>
                        <Button onClick={handleCloseModal} color="primary">
                          Cerrar
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
