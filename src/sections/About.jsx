import { Box, Container, Typography, Grid } from "@mui/material"; 
import ProfileCard from "../components/ProfileCard";
import profilepic from "../assets/myprofilepic.png";
const About = () => {   
    return (
        <Box
      id="about"
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

          <ProfileCard
                imageSrc={profilepic}
                altText="Abhishek Sinha"
                containerHeight="400px"
                containerWidth="380px"    
                imageHeight="400px"
                imageWidth="380px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
//   overlayContent={
//     <p className="tilted-card-demo-text">
//       Abhishek Sinha
//     </p>
//   }
        />
        </Grid>
          

          {/* RIGHT VISUAL CARD */}
     
           <Grid item xs={12} md={6} lg={6} sx={{ ml: { xs: 0, md: 6 } }} >
            <Box sx={{ maxWidth: 640 }}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Let me introduce myself
              </Typography>

             
              <Typography
                sx={{
                  mt: 3,
                  color: "#cfd2d6ff",
                  maxWidth: 520
                }}
              >
                I am a DevOps Engineer with 3.5 years of IT experience, including 2.5 years in DevOps and 1 year in Monitoring & Incident Management. I have worked closely with the Microsoft team, supporting the Renault–Nissan Alliance (RNA) on the Microsoft Connected Vehicle Platform (MCVP).
                <br /><br />
                My expertise includes CI/CD pipelines using Azure DevOps and GitHub Actions, cloud infrastructure on Azure and AWS, and automation with IaC tools like Terraform and ARM templates. I have hands-on experience with Docker, Kubernetes, and monitoring tools such as Prometheus, Grafana, and Azure Monitor.
                <br /><br />
                I am passionate about building secure, scalable, and automated cloud platforms for enterprise environments.
              </Typography>

         
            </Box>
          </Grid>
     

        </Grid>
      </Container>
    </Box>
    );
};

export default About;