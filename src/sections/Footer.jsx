import { Box, Container, Stack, Typography} from "@mui/material";


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 4,
        background:
          "linear-gradient(180deg, rgba(2,6,23,0.95), rgba(15,23,42,0.95))",
        borderTop: "1px solid rgba(148,163,184,0.12)"
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
        >
          {/* Social Icons */}
          {/* <Stack direction="row" spacing={3}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/abhishek-sinha-5007bb169/"
              target="_blank"
              sx={footerIconStyle}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/abhisheksinha332"
              target="_blank"
              sx={footerIconStyle}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:3327abhishek@gmail.com"
              sx={footerIconStyle}
            >
              <EmailIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://x.com/_abhishek_sinha"
              target="_blank"
              sx={footerIconStyle}
            >
              <XIcon />
            </IconButton>
          </Stack> */}

          {/* Text */}
          <Typography
            variant="body2"
            sx={{ color: "#94A3B8", mt: 1 }}s
          >
            © {new Date().getFullYear()} Made with ❤️ by Abhishek Sinha.
          </Typography>

        
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

/* Footer Icon Style */
const footerIconStyle = {
  color: "#94A3B8",
  border: "1px solid rgba(148,163,184,0.25)",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#38BDF8",
    borderColor: "#38BDF8",
    transform: "translateY(-3px)",
    boxShadow: "0 0 12px rgba(56,189,248,0.4)"
  }
};
