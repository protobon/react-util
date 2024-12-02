import { Box, Typography, Button } from "@mui/material";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
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
        src="https://i.pinimg.com/736x/b7/42/c4/b742c4a221202a27f680ffe32a627ecf.jpg" 
        alt="Error illustration" 
        style={{ marginBottom: "20px", maxWidth: "300px", maxHeight: "300px" }} 
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
        href="/"
        sx={{ marginTop: 2 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};