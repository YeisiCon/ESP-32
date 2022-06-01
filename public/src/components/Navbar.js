import { Button, Typography, Backdrop, style, box } from "@mui/material";
import NavbarStyle from "../styles/NavbarStyle";
import { useRouter } from "next/router";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";


const Navbar = ({children}) => {

  

    const router = useRouter();
    // const darkModeTheme = createTheme(getDesignTokens('light'));
    // const theme = useTheme();

    return (
    
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            marginLeft: 32,
            marginTop: 32
           }}>
               {children}
             
            <Button
                style={
                    router.asPath === '/' ?
                        NavbarStyle.buttonAction :
                        NavbarStyle.button
                }
                variant="contained"
                href="/"
            >
                control
            </Button>
            <Button
                style={
                    router.asPath === '/espInfo' ?
                        NavbarStyle.buttonAction :
                        NavbarStyle.button}
                variant="contained"
                href="/espInfo"
            >
                Info equipo
            </Button>
            <Button style={
                router.asPath === '/cardInfo' ?
                    NavbarStyle.buttonAction :
                    NavbarStyle.button}
                variant="contained"
                href="/cardInfo"
            >
                Rfid info
            </Button>
            

        </div>
    )
}

export default Navbar;
