import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

type Prop = {
  children: JSX.Element;
};
export default function Layout({ children }: Prop) {
  return (
    <Box>
      <Header />

      <div className="hidden md:flex mt-40"></div>
      {children}
      <Footer />
    </Box>
  );
}
