// @ts-nocheck

import Hero from './componentss/hero/Hero';
import Header1 from './componentss/header/Header1'
import Header2 from './componentss/header/Header2'
import Header3 from './componentss/header/Header3'
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from './componentss/footer/Footer';
import Main from './componentss/main/main';
import ScrollToTop from './componentss/scroll/ScrollToTop';

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
          <Header1/>
          <Header2/>
          <Header3/>
          <Box bgcolor={
            theme.palette.bg.main
          }>
          <Hero/>
           <Main/> 
          </Box>
          <Footer/> 
          <ScrollToTop />
      </ThemeProvider>
      
</ColorModeContext.Provider>
  )
}
