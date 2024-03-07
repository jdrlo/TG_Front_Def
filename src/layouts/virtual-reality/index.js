import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { crearMusica } from "services/musicaService";
import { Typography } from "@mui/material";
import { getHeaders } from 'utils/general';


function VirtualReality() {
  const navigate = useNavigate();


  const { handleSubmit: handleSubmitMusica, register: registerMusica, formState: { errors: errorsMusica } } = useForm();


  const onSubmitMusica = async (data) => {
    try {
      await crearMusica(data);
      alert("Canción registrada exitosamente");
      navigate('/dashboard');
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };


  return (
    <DashboardLayout>
      {/* Formulario de Musica */}
      <Card>
        <Typography variant="h2" color="#00CCCC" sx={{ textAlign: "center", marginBottom: 4, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}>
          {'>>> Pide tus canciones aquí. <<<'}
        </Typography>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSubmitMusica(onSubmitMusica)}>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Nombre de la cancion:
              </SoftTypography>
              <SoftInput type="text" {...registerMusica('cancion', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Genero
              </SoftTypography>
              <SoftInput type="text" {...registerMusica('genero', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Nombre del artista
              </SoftTypography>
              <SoftInput type="text" {...registerMusica('nombre_Artista', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton type="submit" variant="gradient" color="info" fullWidth>
                Enviar cancion
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default VirtualReality;
