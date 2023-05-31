import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
