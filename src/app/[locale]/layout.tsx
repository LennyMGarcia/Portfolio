import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/Theme";
import Header from "@/components/Header";
import { CssBaseline } from "@mui/material";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
  locale: never;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Lenny Garcia",
};

export default function RootLayout({
  children,
  locale,
}: RootLayoutProps) {
  const t = useTranslations("Home");
  const navItems = [t("navigation.home"),  t("navigation.about"), t("navigation.skills"), t("navigation.portfolio"), t("navigation.contact"),];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
          <Header  navItems={navItems}/>
            {children}
          <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
