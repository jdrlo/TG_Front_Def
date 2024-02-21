import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function Dashboard() {
  const [carouselImages, setCarouselImages] = useState([
    "assets/images/123.JPG",
    "url2.jpg",
    "url3.jpg",
  ]);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <DashboardLayout>

      {/* Formulario de Reserva */}
      <Card>
        <SoftTypography variant="h5" fontWeight="bold" textAlign="center" mb={2} fontSize="2rem">
          NIVELES CLUB
        </SoftTypography>

        <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}

      </Slider>
      </Card>
    </DashboardLayout>
  );
}

export default Dashboard;
