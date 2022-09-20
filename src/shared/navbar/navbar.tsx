import React, { FC } from "react";
import { Box, Flex, Heading, Spinner } from "theme-ui";
import { useNavigate } from "react-router-dom";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const handlerOnClick = () => navigate("/");

  //Agregar lógica
  const isLoading = false;

  return (
    <Box>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading
          onClick={handlerOnClick}
          sx={{
            margin: "10px",
            color: "primary",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Podcaster
        </Heading>
        {isLoading && <Spinner size={30} />}
      </Flex>

      <hr
        style={{
          width: "98%",
          textAlign: "center",
        }}
      />
    </Box>
  );
};
