import React, { FC } from "react";
import { Box, Divider, Flex, Heading, Spinner, Text } from "theme-ui";
import { useNavigate } from "react-router-dom";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const handlerOnClick = () => navigate("/");

  //Agregar lógica
  const isLoading = false;

  return (
    <Box>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Text
          variant="heading"
          onClick={handlerOnClick}
          sx={{
            m: 2,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Podcaster
        </Text>
        {isLoading && <Spinner size={30} />}
      </Flex>

      <Divider />
    </Box>
  );
};
