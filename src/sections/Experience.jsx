import { Box, Container, Typography, Stack, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUp } from "../components/animations";


const experiences = [
  {
    role: "DevOps Engineer",
    company: "Bosch",
    duration: "2023 – Present",
    description: [
      "Designed and maintained CI/CD pipelines using Azure DevOps and GitHub Actions",
      "Automated cloud infrastructure using Terraform and ARM templates",
      "Implemented monitoring with Azure Monitor, Prometheus, and Grafana",
      "Collaborated with Microsoft team for Renault–Nissan Alliance (MCVP)"
    ],
    tech: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes"]
  },
  {
    role: "Monitoring & Incident Engineer",
    company: "Bosch",
    duration: "2022 – 2023",
    description: [
      "Handled production incidents with SLA adherence",
      "Improved alerting and dashboards",
      "Performed root cause analysis and post-incident reviews"
    ],
    tech: ["Azure Monitor", "Azure Function", "Azure Automation Account"]
  },
  {
    role: "IoT Developer Intern",
    company: "Bosch",
    duration: "2022",
    description: [
      "Handled production incidents with SLA adherence",
      "Improved alerting and dashboards",
      "Performed root cause analysis and post-incident reviews"
    ],
    tech: ["NLP", "Computer Vision", "Python", "Flask"]
  }
];


const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        alignItems: "center",
        py: 8
      }}
    >
        <Container maxWidth="lg">
        {/* Title */}
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
                >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Experience
        </Typography>

        {/* Underline */}
        <Box
          sx={{
            width: 80,
            height: 4,
            backgroundColor: "#38BDF8",
            borderRadius: 2,
            mb: 6
          }}
        />
        </motion.div>
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.15 }}
>
        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeUp}>
      <Paper
        sx={{
          p: 4,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(2,6,23,0.85))",
          border: "1px solid rgba(148,163,184,0.12)",
          borderRadius: 3,
          transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow:
        "0 0 0 1px rgba(56,189,248,0.3), 0 20px 40px rgba(0,0,0,0.5)"
    }
        }}
      >             
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {exp.role}
              </Typography>

              <Typography sx={{ color: "#38BDF8", mb: 1 }}>
                {exp.company} • {exp.duration}
              </Typography>

              {/* Description */}
              <Stack spacing={1} sx={{ mb: 2 }}>
                {exp.description.map((point, i) => (
                  <Typography key={i} sx={{ color: "#CBD5E1" }}>
                    • {point}
                  </Typography>
                ))}
              </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                {exp.tech.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(56,189,248,0.15)",
                      color: "#38BDF8",
                      mb: 1
                    }}
                  />
                ))}
              </Stack>
            </Paper>
             </motion.div>
          ))}
        </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;