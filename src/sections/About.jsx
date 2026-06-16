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
                I am a DevOps Engineer with 4 years of experience in Azure cloud automation, CI/CD pipelines, Infrastructure as Code (Terraform, ARM, Bicep), and production support. I have worked with Microsoft teams supporting the Renault–Nissan Alliance (RNA) on the Microsoft Connected Vehicle Platform (MCVP).
                <br /><br />
                My expertise includes Azure DevOps, GitHub Actions, Azure Automation, Azure Key Vault, PowerShell, Docker, Nginx, AWS, and Terraform. I have delivered automation solutions that reduced manual effort by 60%, improved deployment reliability, and contributed to 100% SLA fulfillment.
                <br /><br />
                I am passionate about building secure, scalable, and automated cloud platforms while continuously improving operational efficiency through DevOps and cloud engineering best practices.
         </Typography>
            </Box>
          </Grid>
     

        </Grid>
      </Container>
    </Box>
    );
};

export default About;