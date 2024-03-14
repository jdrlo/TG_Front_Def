// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Typography } from "@mui/material";
import { listarClientes, actualizarClientes } from "services/perfilService";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

function Overview() {
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const getUserId = () => {
    const userId = localStorage.getItem('id');
    return parseInt(userId, 10);
  };

  const idNum = getUserId();



  useEffect(() => {
    async function listar() {
      try {
        const res = await listarClientes();
        setClientes(res.data);
        const clienteId7 = res.data.find((cliente) => cliente.id_User === idNum);
        if (clienteId7) {
          setClienteSeleccionado(clienteId7);
        }
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    }
    listar();
  }, []);

  const onSubmitPeticion = async (data) => {
    try {
      await actualizarClientes(data);
      alert("Peticion creada exitosamente");
    } catch (error) {
      console.error("Error al actualizar datos:", error);
    }
  };

  const { handleSubmit: handleSubmitPeticion, register, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (clienteSeleccionado) {
      setValue("name", clienteSeleccionado.name);
      setValue("apellido_Usuario", clienteSeleccionado.apellido_Usuario);
      setValue("cedula", clienteSeleccionado.cedula);
      setValue("email", clienteSeleccionado.email);
      setValue("telefono", clienteSeleccionado.telefono);
      setValue("match", clienteSeleccionado.match);
      setValue("estado_Civil", clienteSeleccionado.estado_Civil);
    }
  }, [clienteSeleccionado, setValue]);

  const handleModificar = () => {
    setModalAbierto(true);
  };

  const handleCloseModal = () => {
    setModalAbierto(false);
  };

  return (
    <DashboardLayout>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>

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
          <CardContent>
            <Grid container spacing={2}>
              {clienteSeleccionado && (
                <Grid key={clienteSeleccionado.id_User} item xs={12}>
                  <SoftBox mb={0.5} component="form" role="form" onSubmit={handleSubmitPeticion(onSubmitPeticion)}>

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
                      {clienteSeleccionado.imagen_Usuario && (
                        <img
                          src={clienteSeleccionado.imagen_Usuario}
                          alt={`Foto de ${clienteSeleccionado.name}`}
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

                      <TextField
                        name="name"
                        label="Nombre"
                        variant="standard"
                        fullWidth
                        {...register("name", { required: "Nombre es requerido." })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="apellido_Usuario"
                        label="Apellido"
                        variant="standard"
                        fullWidth
                        {...register("apellido_Usuario", { required: "Apellido es requerido." })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="cedula"
                        label="Cédula"
                        variant="standard"
                        fullWidth
                        {...register("cedula", {
                          required: "Cédula es requerida.",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Ingrese una cédula válida de 10 dígitos.",
                          },
                        })}
                        error={Boolean(errors.cedula)}
                        helperText={errors.cedula?.message}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="email"
                        label="Correo Electrónico"
                        variant="standard"
                        fullWidth
                        {...register("email", {
                          required: "Correo electrónico es requerido.",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Ingrese un correo electrónico válido.",
                          },
                        })}
                        error={Boolean(errors.correoUsuario)}
                        helperText={errors.email?.message}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="telefono"
                        label="Teléfono Celular"
                        variant="standard"
                        fullWidth
                        {...register("telefono", {
                          required: "Teléfono celular es requerido.",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Ingrese un número de teléfono celular válido de 10 dígitos.",
                          },
                        })}
                        error={Boolean(errors.telefonoCelular)}
                        helperText={errors.telefonoCelular?.message}
                        style={{ marginBottom: '10px' }}
                      />

                      <Select
                        name="match"
                        label="Match"
                        variant="standard"
                        fullWidth
                        {...register("match", { required: "Campo es requerido, verifica que tu respuesta sea Si o No." })}
                        error={Boolean(errors.match)}
                        helperText={errors.match?.message}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="">Seleccione una respuesta</MenuItem>
                        <MenuItem value="Si">Si</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>

                      <Select
                        name="estado_Civil"
                        label="Estado Civil"
                        variant="standard"
                        fullWidth
                        {...register("estado_Civil", { required: "Campo es requerido, verifica que tu respuesta sea Soltero o Comprometido." })}
                        error={Boolean(errors.estado_Civil)}
                        helperText={errors.estado_Civil?.message}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="">Seleccione una respuesta</MenuItem>
                        <MenuItem value="Soltero">Soltero</MenuItem>
                        <MenuItem value="Comprometido">Comprometido</MenuItem>
                      </Select>

                      <SoftButton type="submit" variant="gradient" color="info" fullWidth>
                        Modificar datos
                      </SoftButton>
                    </Paper>
                  </SoftBox>
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
