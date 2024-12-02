import { Box, Typography, Button } from "@mui/material";
import { useRouteError } from "react-router-dom";

export const CustomError = () => {
  const error = useRouteError() as Error;

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
      }}
    >
      <img 
        src="https://via.placeholder.com/300" 
        alt="Error illustration" 
        style={{ marginBottom: "20px", maxWidth: "100%", height: "auto" }} 
      />
      <Typography variant="h2" color="text.primary" gutterBottom>
        Oops! An unexpected error occurred.
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {error.message}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        href="/home"
        sx={{ marginTop: 2 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};