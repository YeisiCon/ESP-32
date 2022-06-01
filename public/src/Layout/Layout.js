// import Navbar from "../components/navbar"
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       {children}
//     </div>
//   )
// }
// export default Layout;
import Navbar from "../components/navbar"
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, indigo } from '@mui/material/colors';

import { Switch } from "@mui/material";
import { useState } from "react";


const Layout = ({ children }) => {
  const [isDark, setisDark] = useState(true)

  const darkModeTheme = createTheme({

    palette: {
      type: isDark ? {
        
                        // palette values for light mode
                        primary: indigo,
                        divider: grey[50],
                        text: {
                            primary: grey[900],
                            secondary: grey,
                        },
                        background: {
                            default: indigo[900],
                            paper: grey,
        
                        },
                       } : "light"
    },
  });

  const theme = useTheme();
  // const [isDark, setisDark] =useState(true)

// const getDesignTokens = (type) => ({
//     palette: {
//         type,
//         ...(type === 'light'
//             ? {
//                 // palette values for light mode
//                 primary: grey,
//                 divider: grey[50],
//                 text: {
//                     primary: grey[900],
//                     secondary: grey,
//                 },
//                 background: {
//                     default: indigo[900],
//                     paper: grey,

//                 },
//             }
//             : {
//                 // palette values for dark mode
//                 primary: indigo,
//                 divider: indigo[700],
//                 background: {
//                     default: indigo[500],
//                     paper: indigo[900],
//                 },
//                 text: {
//                     primary: '#fff',
//                     secondary: grey[500],
//                 },
//                 background:{
//                   paper:'#121212'
//                 }
//             }),
//     },

// });
//   const darkModeTheme = createTheme(getDesignTokens('dark'));
  //  const theme = useTheme();

  return (
    <ThemeProvider theme={darkModeTheme}>
      <Navbar>
      
      </Navbar>
      {children}
    </ThemeProvider>
  )

}
export default Layout;

