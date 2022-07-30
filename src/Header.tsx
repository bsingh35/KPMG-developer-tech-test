import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
interface Props{
    darkMode:boolean;
    handleThemChange:()=>void;
}
const midLinks=[
    {title: 'CompanyDetails', path:'/company'},
    {title: 'CompanyMap', path:'/Map'}
]

const rightLinks=[
    {title: 'Login', path:'/home'},
    {title: 'Register', path:'/home'}
]


export default function Header({darkMode,handleThemChange}:Props) {
    return(
        <AppBar position='static'sx={{mb:4}}>

            <Toolbar>
                <Typography variant='h6'>
                    KMPG 
                </Typography>
                <Switch checked={darkMode} onChange={handleThemChange}/>
                <List sx ={{display:'flex'}}>
                    { midLinks.map(({title,path})=>(
                        <ListItem
                        component={NavLink} 
                        to={path} 
                        key={path} 
                        sx={{color:'inherit',typography:'h10'}}
                    >
                {title.toUpperCase()}
                    </ListItem>
                ))}
                </List>
                
       

            </Toolbar>
        </AppBar>
    )
}
