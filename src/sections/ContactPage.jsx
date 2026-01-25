import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import { Box, Container ,Typography, Divider,   Paper, Grid, TextField, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from '@emailjs/browser';
import { color } from 'framer-motion';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactPage = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
    setOpen(false);
  };
      const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
      });

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
                  setOpen(true);
                },
                (error) => {
                  console.log('FAILED...', error);
                },
              );

            setIsSubmitted(true);

            setTimeout(() => {
              setIsSubmitted(false);
              setForm({ name: '', email: '', message: '' });
            }, 1500);
          };

    return (
        <Box
      id="contact"
      sx={{
        minHeight: "65vh",
        display: "flex",
        alignItems: "center"
      }}
    >
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{
            p: { xs: 3, md: 5, lg: 5 },
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
            border: "1px solid rgba(148,163,184,0.12)",
            borderRadius: 3
          }} >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Get in Touch
                </Typography>
            < Grid container spacing={6} alignItems="center">
                <Grid item xs={false} md={6} sx={{display: {xs: "none", md: "flex"}, justifyContent: "center",
                            alignItems: "center"
                        }}>
                    {/* LEFT – Animation or Image Placeholder */}
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
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 500 }} ref={formRef}>
                    <TextField fullWidth label="Your Name" name="name" value={form.name} variant="outlined" onChange={handleChange} margin="normal" sx={inputStyle} />
                    <TextField fullWidth label="Email Address" name="email" value={form.email} variant="outlined" onChange={handleChange} margin="normal" sx={inputStyle} />
                    <TextField fullWidth label="Message" name="message" value={form.message} variant="outlined" onChange={handleChange} margin="normal" multiline rows={4} sx={inputStyle} />
                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, fontWeight: 600 }}>{isSubmitted ? "Sending" : "Send Message"}</Button>
                 <Dialog
                    open={open}
                    slots={{
                    transition: Transition,
                    }}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle sx={{color: "black"}}>{"Message sent successfully"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Your message has been sent successfully! I will get back to you soon.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Close</Button>

                    </DialogActions>
      </Dialog>
                </Box>
                
               

            </Grid>

            </Grid>
            </Paper>
            </Container>
        </Box>
    );
};

export default ContactPage;

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