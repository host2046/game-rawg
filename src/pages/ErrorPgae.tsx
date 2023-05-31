import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const ErrorPgae = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box paddingLeft={3}>
        <Heading>Opps</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page does not exist"
            : "An Unexpected Error accurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPgae;
