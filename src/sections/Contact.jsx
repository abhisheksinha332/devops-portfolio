import  {useState, useEffect, useRef} from "react";
import {Box, Container,Stack,Typography,Grid,Paper,TextField,Button, IconButton} from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from '@emailjs/browser';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X"; // Twitter (X)


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef();

    useEffect(() => {
    }, [isSubmitted]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 

     emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICES,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  formRef.current,
  {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

        setIsSubmitted(true)
        
        setTimeout(()=> {
            setIsSubmitted(false)
            setForm({ name: '', email: '', message: '' });
        },1500)
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
       
        <Paper
          sx={{
            p: { xs: 3, md: 5, lg: 5 },
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
            border: "1px solid rgba(148,163,184,0.12)",
            borderRadius: 3
          }}
        >
             <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Get in Touch
        </Typography>

            
          <Grid container spacing={6} alignItems="center">
            
  {/* LEFT – Animation */}
  <Grid item xs={12} md={6}>
    <DotLottieReact
      src="https://lottie.host/94ccfcf6-a94b-40ff-ab05-a175424777ee/BydT8fqmJP.lottie"
      loop
      speed="0.5"
      autoplay
      style={{
        width: "520px",
        maxHeight: "500px", 
      }}
    />
  </Grid>

  {/* RIGHT – Form */}
  <Grid item xs={12} md={6}>
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 420, mx: 'auto' }} ref={formRef}>
       <Stack spacing={3}>
        <TextField
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          sx={inputStyle}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          sx={inputStyle}
        />
        
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          required
          sx={inputStyle}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 1, fontWeight: 600 }}
        >
          {isSubmitted ?"Sending" : "Send Message"}
        </Button>

        {/* Divider */}
<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
  <Box sx={{ flex: 1, height: 1.5, bgcolor: "rgba(222, 224, 226, 0.8)" }} />
  <Typography variant="caption" color="white">
    OR
  </Typography>
  <Box sx={{ flex: 1, height: 1.5, bgcolor: "rgba(222, 224, 226, 0.8)" }} />
</Box>

{/* Social Media Links */}
<Stack direction="row" spacing={3} justifyContent="center">
  <IconButton
    component="a"
    href="https://www.linkedin.com/in/abhishek-sinha-5007bb169/"
    target="_blank"
    aria-label="LinkedIn"
    sx={socialIconStyle}
  >
    <LinkedInIcon />
  </IconButton>

  <IconButton
    component="a"
    href="https://github.com/abhisheksinha332"
    target="_blank"
    aria-label="GitHub"
    sx={socialIconStyle}
  >
    <GitHubIcon />
  </IconButton>

  <IconButton
    component="a"
    href="mailto:3327abhishek@gmail.com"
    aria-label="Email"
    sx={socialIconStyle}
  >
    <EmailIcon />
  </IconButton>

  <IconButton
    component="a"
    href="https://x.com/_abhishek_sinha"
    target="_blank"
    aria-label="X"
    sx={socialIconStyle}
  >
    <XIcon />
  </IconButton>
</Stack>

      </Stack>
    
    </Box>
  </Grid>
</Grid>

        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;

/* Dark input styles */
const inputStyle = {
  backgroundColor: "#020617",
  borderRadius: 1,

  "& .MuiInputBase-input": {
    color: "#F1F5F9"
  },

  "& .MuiInputLabel-root": {
    color: "#94A3B8"
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(148,163,184,0.25)"
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#38BDF8"
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#38BDF8"
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#38BDF8"
  },
 
};


const socialIconStyle = {
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