import { Box, Typography } from "@mui/material";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { Company } from "../../App/models/company";


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'company', headerName: 'Company ', width: 130 },
  { field: 'sector', headerName: 'Sector', width: 160 },
  { field: 'stockSymbol',headerName: 'StockSymbol',width: 130},
  { field: 'address',headerName: 'Address',width: 200},
   { field: 'location',headerName: 'Location',width: 220,
   renderCell: (params: { row: { location: { 
    latitude: number ; 
    longitude:number ; 
  }; }; }) => {
    return <div className="rowitem">{params.row.location.latitude}/{params.row.location.longitude}</div>;
  },
  },
  
  { field: 'fees',headerName: 'Fees',width: 100,
  renderCell: (params: { row: { fees: 
    { 
      
      amount: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined;
      currency:string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined;
    }; }; }) => {
    return <div className="rowitem">£{params.row.fees.amount}</div>;
  },
},
  
];

export default function GetCompany()
{
    const [companies,setcompanies]=useState<Company[]>
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
      width:'70%',
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
        
      <DataGrid sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          }
        }}
        
      columns={columns} 
      rows={companies}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      
      />
         
         </Box>
      
  
      
   
    )
}