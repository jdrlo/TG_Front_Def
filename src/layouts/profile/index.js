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
        const clienteSeleccionado = res.data.find(cliente => cliente.id_User.id === idNum);
        if (clienteSeleccionado) {
          setClienteSeleccionado(clienteSeleccionado);
        }
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    }
    listar();
  }, []);

  const onSubmitPeticion = async (data) => {
    try {
      await actualizarClientes(data, idNum);
      alert("Peticion creada exitosamente");
    } catch (error) {
      console.error("Error al actualizar datos:", error);
    }
  };

  const { handleSubmit: handleSubmitPeticion, register, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (clienteSeleccionado) {
      setValue("name", clienteSeleccionado.id_User.name);
      setValue("apellido_Usuario", clienteSeleccionado.id_User.apellido_Usuario);
      setValue("cedula", clienteSeleccionado.id_User.cedula);
      setValue("genero_Usuario", clienteSeleccionado.id_User.genero_Usuario);
      setValue("email", clienteSeleccionado.id_User.email);
      setValue("telefono", clienteSeleccionado.id_User.telefono);
      setValue("match", clienteSeleccionado.match);
      setValue("estado_Civil", clienteSeleccionado.estado_Civil);
      setValue("pregunta_Seguridad", clienteSeleccionado.pregunta_Seguridad);
      setValue("respuesta_Pregunta", clienteSeleccionado.respuesta_Pregunta);
      setValue("password", clienteSeleccionado.password)
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
                <Grid key={clienteSeleccionado.id_Cliente} item xs={12}>
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
                      <TextField
                        name="name"
                        label="Nombre"
                        variant="standard"
                        fullWidth
                        {...register("name", { required: "Nombre es requerido." })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        defaultValue={clienteSeleccionado.id_User.name}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="apellido_Usuario"
                        label="Apellido"
                        variant="standard"
                        fullWidth
                        {...register("apellido_Usuario", { required: "Apellido es requerido." })}
                        error={Boolean(errors.apellido_Usuario)}
                        helperText={errors.apellido_Usuario?.message}
                        defaultValue={clienteSeleccionado.id_User.apellido_Usuario}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="email"
                        label="Correo Electrónico (No Modificable)"
                        variant="standard"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        {...register("email", {
                          required: "Correo electrónico es requerido.",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Ingrese un correo electrónico válido.",
                          },
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        defaultValue={clienteSeleccionado.id_User.email}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="password"
                        label="Contraseña"
                        variant="standard"
                        fullWidth
                        type="password"
                        {...register("password", {
                          required: "Contraseña es requerida.",
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
                            message: "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.",
                          },
                        })}
                        error={Boolean(errors.contrasena)}
                        helperText={errors.password?.message}
                        defaultValue={clienteSeleccionado.password}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="cedula"
                        label="Cédula (No Modificable)"
                        variant="standard"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        {...register("cedula", {
                          required: "Cédula es requerida.",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Ingrese una cédula válida de 10 dígitos.",
                          },
                        })}
                        error={Boolean(errors.cedula)}
                        helperText={errors.cedula?.message}
                        defaultValue={clienteSeleccionado.id_User.cedula}
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
                        error={Boolean(errors.telefono)}
                        helperText={errors.telefono?.message}
                        defaultValue={clienteSeleccionado.id_User.telefono}
                        style={{ marginBottom: '10px' }}
                      />

                      <TextField
                        name="genero_Usuario"
                        label="Género (No Modificable)"
                        variant="standard"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        {...register("genero_Usuario", {
                          required: "Género es requerido."
                        })}
                        error={Boolean(errors.genero)}
                        helperText={errors.genero?.message}
                        defaultValue={clienteSeleccionado.id_User.genero_Usuario}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="" disabled>
                          Seleccione su género
                        </MenuItem>
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Femenino">Femenino</MenuItem>
                        <MenuItem value="Otro">Otro</MenuItem>
                      </TextField>

                      <TextField
                        name="estado_Civil"
                        label="Situación Sentimental"
                        variant="standard"
                        fullWidth
                        {...register("estado_Civil", {
                          required: "Campo es requerido, verifica que tu respuesta sea Soltero o Comprometido.",
                          validate: value => ["soltero", "comprometido"].includes(value.toLowerCase()) || "Sólo se permiten 'Soltero' o 'Comprometido'."
                        })}
                        error={Boolean(errors.estado_Civil)}
                        helperText={errors.estado_Civil?.message}
                        defaultValue={clienteSeleccionado.estado_Civil}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="">Seleccione una respuesta</MenuItem>
                        <MenuItem value="Soltero">Soltero</MenuItem>
                        <MenuItem value="Comprometido">Comprometido</MenuItem>
                      </TextField>


                      <TextField
                        name="pregunta_Seguridad"
                        label="Pregunta de Seguridad (No Modificable)"
                        variant="standard"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        {...register("pregunta_Seguridad", { required: "Pregunta de Seguridad es requerida." })}
                        error={Boolean(errors.preguntaSeguridad)}
                        helperText={errors.preguntaSeguridad?.message}
                        defaultValue={clienteSeleccionado.pregunta_Seguridad}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="" disabled>
                          Seleccione su pregunta de seguridad
                        </MenuItem>
                        <MenuItem value="nombre de tu mascota">nombre de tu mascota</MenuItem>
                        <MenuItem value="color favorito">color favorito</MenuItem>
                        <MenuItem value="colegio donde estudiaste">colegio donde estudiaste</MenuItem>
                      </TextField>

                      <TextField
                        name="respuesta_Pregunta"
                        label="respuesta (No Modificable)"
                        variant="standard"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        {...register("respuesta_Pregunta", { required: "Respuesta es requerido." })}
                        error={Boolean(errors.respuesta_Pregunta)}
                        helperText={errors.respuesta_Pregunta?.message}
                        defaultValue={clienteSeleccionado.respuesta_Pregunta}
                        style={{ marginBottom: '10px' }}
                      />


                      <TextField
                        name="match"
                        label="¿Deseas de participar del match?"
                        variant="standard"
                        fullWidth
                        {...register("match", { required: "Respuesta es requerida." })}
                        error={Boolean(errors.match)}
                        helperText={errors.match?.message}
                        defaultValue={clienteSeleccionado.match}
                        style={{ marginBottom: '10px' }}
                      >
                        <MenuItem value="" disabled>
                          Seleccione una respuesta
                        </MenuItem>
                        <MenuItem value="Si">Si</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </TextField>



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