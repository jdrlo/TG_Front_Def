import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { listarMatch } from "services/matchService";
import { Typography } from "@mui/material";

function VirtualReality() {
  const navigate = useNavigate();
  const { formState: { errors: errorsMusica } } = useForm();
  const [match, setMatch] = useState([]);
  const [matchSize, setMatchSize] = useState(0);

  useEffect(() => {
    async function listar() {
      try {
        const res = await listarMatch();
        const data = res.data;
        setMatch(data);
        setMatchSize(data.length); 
        console.log(setMatchSize);

      } catch (error) {
        console.error("Error al obtener los usuarios del match:", error);
      }
    }
    listar();
  }, []);

 

  return (
    <DashboardLayout>
      <Card>
        <Typography variant="h2" sx={{ textAlign: "center", marginBottom: 4, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2, color: "#00CCCC" }}>
          {'>>> MATCH <<<'}
        </Typography>

        
      </Card>
    </DashboardLayout>
  );
}

export default VirtualReality;
