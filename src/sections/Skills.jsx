import { Box, Container, Grid, Typography, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";


const skills = [
  {
    title: "Cloud Platforms",
    items: ["Azure", "AWS"]
  },
  {
    title: "CI/CD & DevOps",
    items: ["Azure DevOps", "GitHub Actions", "YAML Pipelines"]
  },
  {
    title: "Containers",
    items: ["Docker", "Kubernetes", "Service Fabric"]
  },
  {
    title: "Infra as Code",
    items: ["Terraform", "ARM Templates", "Bicep"]
  },
  {
    title: "Monitoring",
    items: ["Azure Monitor", "Prometheus", "Grafana"]
  }
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
        <Container maxWidth="lg">
        
        {/* Section Title */}
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Skills & Technologies
        </Typography>

        <Typography sx={{ color: "#94A3B8", mb: 6 }}>
          Tools and platforms I work with to build scalable systems
        </Typography>

        {/* Skill Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
            <Grid item xs={12} sm={6} md={4} key={skill.title}>
              <Paper
                    sx={{
                        p: 3,
                        height: "100%",
                        width: "200px",
                        background: "rgba(15, 23, 42, 0.75)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.12)",
                        borderRadius: 3,
                        
                        transition: "all 0.35s ease",
                        "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 0 0 1px rgba(56,189,248,0.25), 0 20px 40px rgba(0,0,0,0.5)"
                        }
                    }}
                    >
                <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
                  {skill.title}
                </Typography>
                <Box
                    sx={{
                        width: 100,
                        height: 3,
                        backgroundColor: "#38BDF8",
                        borderRadius: 3,
                        mb: 4
                    }}
                    />
                <Stack spacing={1}>
                  {skill.items.map((item) => (
                    <Typography key={item} sx={{ color: "#CBD5E1" }}>
                      • {item}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Grid>
             </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
