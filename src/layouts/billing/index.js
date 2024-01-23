import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { crearReservas } from "services/reservaService";
import { crearQuejas } from "services/quejasService";
import TextField from "@mui/material/TextField";
import { getHeaders } from 'utils/general';


function Billing() {
  const navigate = useNavigate();


  const { handleSubmit: handleSubmitReserva, register: registerReserva, formState: { errors: errorsReserva } } = useForm();
  const [ubicacion, setUbicacion] = useState("");
  const handleUbicacionChange = (event) => setUbicacion(event.target.value);

  const onSubmitReserva = async (data) => {
    try {
      await crearReservas(data);
      navigate('/sign-in');
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Formulario de Quejas o Sugerencias
  const { handleSubmit: handleSubmitPeticion, register: registerPeticion, formState: { errors: errorsPeticion } } = useForm();
  const [peticion, setPeticion] = useState("");
  const handlePeticionChange = (event) => setPeticion(event.target.value);

  const onSubmitPeticion = async (data) => {
    try {
      await crearQuejas(data);
      navigate('/sign-in');
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <DashboardLayout>
      {/* Formulario de Reserva */}
      <Card>
        <SoftTypography variant="h5" fontWeight="bold" textAlign="center" mb={2} fontSize="2rem">
          Haz tu reserva aquí
        </SoftTypography>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSubmitReserva(onSubmitReserva)}>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Reserva a nombre de:
              </SoftTypography>
              <SoftInput type="text" {...registerReserva('nombre_Reserva', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Cantidad de personas
              </SoftTypography>
              <SoftInput type="text" {...registerReserva('cantidad_Personas', { required: { value: true, message: "Campo es requerido" }, pattern: { value: /^\d{1,2}$/ } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Fecha de la reserva
              </SoftTypography>
              <SoftInput type="Date" {...registerReserva('fecha', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Mesa de preferencia
              </SoftTypography>
              <Select
                {...registerReserva('ubicacion_Mesa', { required: 'Campo es requerido' })}
                value={ubicacion}
                onChange={handleUbicacionChange}
                fullWidth
                sx={{
                  "& .MuiSelect-icon": {
                    color: "red",
                  },
                }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
              </Select>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton type="submit" variant="gradient" color="info" fullWidth>
                Enviar reserva
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>

      <br />

      {/* Formulario de Quejas o Sugerencias */}
      <Card>
        <SoftTypography variant="h5" fontWeight="bold" textAlign="center" mb={2} fontSize="2rem">
          Quejas o sugerencias
        </SoftTypography>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSubmitPeticion(onSubmitPeticion)}>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Tipo de peticion
              </SoftTypography>
              <Select
                {...registerPeticion('estado', { required: 'Campo es requerido' })}
                value={peticion}
                onChange={handlePeticionChange}
                fullWidth
                sx={{
                  "& .MuiSelect-icon": {
                    color: "red",
                  },
                }}
              >
                <MenuItem value="Quejas">Quejas</MenuItem>
                <MenuItem value="Sugerencia">Sugerencia</MenuItem>
              </Select>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Fecha
              </SoftTypography>
              <SoftInput type="Date" {...registerPeticion('fecha', { required: { value: true, message: "Campo es requerido" } })} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular">
                Campo de texto:
              </SoftTypography>
              <TextField
                multiline
                rows={4}
                {...registerPeticion('suge_Queja', { required: { value: true, message: "Campo es requerido" } })}
                fullWidth
              />
            </SoftBox>


            <SoftBox mt={4} mb={1}>
              <SoftButton type="submit" variant="gradient" color="info" fullWidth>
                Enviar peticion
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default Billing;