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
          {'>>> MATCH <<<'}
        </Typography>
 
      </Card>
    </DashboardLayout>
  );
}

export default VirtualReality;
