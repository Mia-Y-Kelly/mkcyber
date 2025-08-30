import type { Metadata } from "next";
import "../styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../styles/themes/theme";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: "mkcyber",
  description: "Coded by Mia Kelly; bootstrapped from create-next-app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navbar />
            <Box>
              {props.children}
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}