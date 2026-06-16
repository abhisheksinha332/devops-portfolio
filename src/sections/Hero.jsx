import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import resume from "../assets/Abhishek_Sinha_DevOps.pdf";
import devopsImg from "../assets/devops.png";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ maxWidth: 640 }}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Hi, I'm Abhishek Sinha
              </Typography>

              <Typography
                variant="h5"
                sx={{ mt: 2, color: "#38BDF8" }}
              >
                DevOps Engineer
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: "#cfd2d6ff",
                  maxWidth: 520
                }}
              >
                I design reliable, secure, and automated cloud platforms for
                enterprise-scale systems with a focus on stability and
                scalability.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href={resume}
                  target="_blank"
                >
                  Download Resume
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT VISUAL CARD */}
          <Grid item xs={12} md={6} lg={6}>

           <Box
  component="img"
  src={devopsImg}
  alt="DevOps Illustration"
  sx={{
    display: "block",   
    mx: "auto",         
    width: "100%",
    maxWidth: 500,
    borderRadius: 2,
   
    transition: "transform 0.3s",
    "&:hover": { transform: "scale(1.05)" }
  }}
/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}