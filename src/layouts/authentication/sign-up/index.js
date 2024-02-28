import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import curved6 from "assets/images/curved-images/curved14.jpg";
import { useForm } from "react-hook-form";
import { crearUsuarios } from "services/usuarioService";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";



function SignUp() {


  const [gender, setGender] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [questStatus, setQuestStatus] = useState("");
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();



  const handleGenderChange = (event) => setGender(event.target.value);
  const handleRelationshipStatusChange = (event) => setRelationshipStatus(event.target.value);
  const handleQuestChange = (event) => setQuestStatus(event.target.value);

  const onSubmit = async (data) => {
    try {
      await crearUsuarios(data);
      navigate('/sign-in');
      
    } catch (error) {
      let errorMessage = 'Ocurrió un error al procesar el registro. Por favor, inténtalo de nuevo más tarde.';

      if (error.response) {
        errorMessage = 'Este correo ya está registrado';
      } else if (error.request) {
        console.error('Error de red: No se recibió respuesta del servidor');
        errorMessage = 'Error de red: No se recibió respuesta del servidor';
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
        errorMessage = 'Error en la configuración de la solicitud: ' + error.message;
      }
      
    }
  };

  return (
    <BasicLayout
      title="Bienvenido a Niveles Club!"
      description="Aquí podrás llevar tu proceso de registro."
      image={curved6}
    >
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>


            <TextField
              name="name"
              label="Nombre"
              variant="standard"
              fullWidth
              defaultValue=" "
              {...register("name", { required: "Nombre es requerido." })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />

            <TextField
              name="apellido_Usuario"
              label="Apellido"
              variant="standard"
              fullWidth
              defaultValue=" "
              {...register("apellido_Usuario", { required: "Apellido es requerido." })}
              error={Boolean(errors.apellido_Usuario)}
              helperText={errors.apellido_Usuario?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />


            <TextField
              name="email"
              label="Correo Electrónico"
              variant="standard"
              fullWidth
              defaultValue=" "
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
              name="password"
              label="Contraseña"
              variant="standard"
              fullWidth
              type="password"
              defaultValue=" "
              {...register("password", {
                required: "Contraseña es requerida.",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
                  message: "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.",
                },
              })}
              error={Boolean(errors.contrasena)}
              helperText={errors.password?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />


            <TextField
              name="cedula"
              label="Cédula"
              variant="standard"
              fullWidth
              defaultValue=" "
              {...register("cedula", {
                required: "Cédula es requerida.",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Ingrese una cédula válida de 10 dígitos.",
                },
              })}
              error={Boolean(errors.cedula)}
              helperText={errors.cedula?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />


            <TextField
              name="telefono"
              label="Teléfono Celular"
              variant="standard"
              fullWidth
              defaultValue=" "
              {...register("telefono", {
                required: "Teléfono celular es requerido.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Ingrese un número de teléfono celular válido de 10 dígitos.",
                },
              })}
              error={Boolean(errors.telefonoCelular)}
              helperText={errors.telefonoCelular?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />

            <TextField
              name="genero_Usuario"
              label="Género"
              variant="standard"
              fullWidth
              select
              defaultValue=" - - - - - -"
              {...register("genero_Usuario", { required: "Género es requerido." })}
              error={Boolean(errors.genero)}
              helperText={errors.genero?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
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
              select
              defaultValue="- - - - - - -"
              {...register("estado_Civil", { required: "Situación Sentimental es requerida." })}
              error={Boolean(errors.situacionSentimental)}
              helperText={errors.situacionSentimental?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            >
              <MenuItem value="" disabled>
                Seleccione su situación sentimental
              </MenuItem>
              <MenuItem value="soltero">Soltero</MenuItem>
              <MenuItem value="comprometido">Comprometido</MenuItem>
            </TextField>


            <TextField
              name="pregunta_Seguridad"
              label="Pregunta de Seguridad"
              variant="standard"
              fullWidth
              select
              defaultValue="- - - - - -"
              {...register("pregunta_Seguridad", { required: "Pregunta de Seguridad es requerida." })}
              error={Boolean(errors.preguntaSeguridad)}
              helperText={errors.preguntaSeguridad?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            >
              <MenuItem value="" disabled>
                Seleccione su pregunta de seguridad
              </MenuItem>
              <MenuItem value="mascota">Nombre de tu mascota</MenuItem>
              <MenuItem value="color">Color favorito</MenuItem>
              <MenuItem value="colegio">Colegio donde estudiaste</MenuItem>
            </TextField>


            <TextField
              name="respuesta_Seguridad"
              label="respuesta"
              variant="standard"
              fullWidth
              defaultValue=" "
              {...register("respuesta_Seguridad", { required: "Respuesta es requerido." })}
              error={Boolean(errors.respuesta_seguridad)}
              helperText={errors.respuesta_seguridad?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            />

            <TextField
              name="match"
              label="¿Deseas de participar del match?"
              variant="standard"
              fullWidth
              select
              defaultValue="----"
              {...register("match", { required: "Respuesta es requerida." })}
              error={Boolean(errors.respuestaSiNo)}
              helperText={errors.respuestaSiNo?.message}
              style={{ marginBottom: '10px' }} // Ajusta el valor según tus necesidades
            >
              <MenuItem value="" disabled>
                Seleccione una respuesta
              </MenuItem>
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>

            <Typography variant="body2" color="textSecondary">
            Match: Esta sección facilita la conexión entre personas que disfrutan del establecimiento. Al participar, ten en cuenta que compartirás algunos datos personales. Sé respetuoso y responsable.
            </Typography>


            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth type="submit">
                Registrarme
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                ¿Ya tienes una cuenta?
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Iniciar Sesión
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
