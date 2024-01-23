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
      // toast.success('Registro creado con éxito', { position: 'bottom-right' });
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
      // toast.error(errorMessage, { position: 'bottom-right' });
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
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Nombre
              </SoftTypography>
              <SoftInput
                type="text"
                {...register('name', { required: { value: true, message: "Nombre es requerido" } })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Apellido
              </SoftTypography>
              <SoftInput type="text" {...register('apellido_Usuario', { required: { value: true, message: "Apellido es requerido" } })} />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Correo Electrónico
              </SoftTypography>
              <SoftInput type="email" {...register('email', { required: { value: true, message: "Correo electrónico es requerido" } })} />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Contraseña
              </SoftTypography>
              <SoftInput type="password" {...register('password', { required: { value: true, message: "Contraseña es requerida" }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/ } })} />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Cédula
              </SoftTypography>
              <SoftInput type="text" {...register('cedula', { required: { value: true, message: "Cédula es requerida" }, pattern: { value: /^\d{10}$/ } })} />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Teléfono celular
              </SoftTypography>
              <SoftInput type="text" {...register('telefono', { required: { value: true, message: "Teléfono es requerido" }, pattern: { value: /^\d{10}$/ } })} />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Género
              </SoftTypography>
              <Select
                {...register('genero_Usuario', { required: 'Género es requerido' })}
                value={gender}
                onChange={handleGenderChange}
                fullWidth
                sx={{
                  "& .MuiSelect-icon": {
                    color: "red",
                  },
                }}
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </Select>
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Situación Sentimental
              </SoftTypography>
              <Select
                {...register('estado_Civil', { required: 'Género es requerido' })}
                value={relationshipStatus}
                onChange={handleRelationshipStatusChange}
                fullWidth
                sx={{
                  "& .MuiSelect-icon": {
                    color: "red", // Cambia el color a tu preferencia
                  },
                }}

              >
                <MenuItem value="Soltero">Soltero</MenuItem>
                <MenuItem value="Comprometido">Comprometido</MenuItem>
              </Select>
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Pregunta de Seguridad
              </SoftTypography>
              <Select
                {...register('pregunta_Seguridad ', { required: 'Género es requerido' })}
                value={questStatus}
                onChange={handleQuestChange}
                fullWidth
                sx={{
                  "& .MuiSelect-icon": {
                    color: "red", // Cambia el color a tu preferencia
                  },
                }}
              >
                <MenuItem value="Nombre de tu mascota">¿Nombre de tu mascota?</MenuItem>
                <MenuItem value="Color favorito">¿Color favorito?</MenuItem>
                <MenuItem value="Colegio donde estudiaste">¿Colegio donde estudiaste?</MenuItem>
              </Select>
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Respuesta
              </SoftTypography>
              <SoftInput type="text" {...register('respuesta_Seguridad', { required: { value: true, message: "Respuesta es requerida" } })} />
            </SoftBox>

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
