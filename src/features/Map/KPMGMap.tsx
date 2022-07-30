
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Company } from "../../App/models/company";
export default function GetCompanyLocation()
{
    const [locations,setcompanies]=useState<Company[]>
    ([]);

      useEffect(() => {
        fetch('https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13')
        .then(response=>response.json())
        .then(data=>setcompanies(data))
        .then(data=>console.log(data))
      }, [])
    return (

      <Box
      sx={{
      height:650,
      width:'100%',
      align:'center',
      marginLeft:'200px',
      marginRight:'200px',
      marginTop:'20px',
      marginBottom:'20px',
    }}
      >
      <Typography
      variant='h6'
      component='h6'
      sx={{textAlign:'center',mt:3 ,mb:3}}
      >
      Company Locations
      </Typography>
        
      <MapContainer center={[51.505,-0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer 
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />    
        
        {locations.map(kmpgdata=>(
          <Marker key={kmpgdata.id}
          position={[kmpgdata.location.latitude,kmpgdata.location.latitude]}>
            <Popup>
            {kmpgdata.company} <br /> {kmpgdata.address}
           </Popup>
          </Marker>

        ))}

      </MapContainer>
      </Box>
    )
}