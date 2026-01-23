import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  IconButton
} from "@mui/material";

import { motion } from "framer-motion";

const myProjects = [
  {
    title: "CI/CD Orchestrator",
    points: [
      "Azure DevOps | AWS CodePipeline",
      "YAML | PowerShell"
    ],
    impact: "Reduced Deployment Time by 60%",
    color: "#3B82F6"
  },
  {
    title: "Secure Access Platform",
    points: [
      "Azure AD | AWS IAM | Key Vault",
      "RBAC | Conditional Access"
    ],
    impact: "Improved Security Compliance",
    color: "#10B981"
  },
  {
    title: "Cost Optimization Framework",
    points: [
      "Terraform | Azure Policies",
      "AWS Cost Explorer"
    ],
    impact: "Saved 30% on Cloud Spend",
    color: "#6366F1"
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={2} mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Featured Projects
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

        </Stack>

        {/* Cards */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {myProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  width: 320,
                  height: "100%",
                  p: 3,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
                  border: "1px solid rgba(148,163,184,0.12)",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 0 0 1px rgba(56,189,248,0.3), 0 25px 50px rgba(0,0,0,0.6)"
                  }
                }}
              >
                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {project.title}
                </Typography>

                {/* Points */}
                <Stack spacing={1.2} mb={3}>
                  {project.points.map((point) => (
                    <Typography
                      key={point}
                      sx={{
                        fontSize: "0.95rem",
                        color: "#CBD5E1"
                      }}
                    >
                      • {point}
                    </Typography>
                  ))}
                </Stack>

                {/* Impact Badge */}
                <Box
                  sx={{
                    mt: "auto",
                    py: 1.2,
                    px: 2,
                    borderRadius: 2,
                    backgroundColor: `${project.color}22`,
                    border: `1px solid ${project.color}55`,
                    color: project.color,
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: "0.9rem"
                  }}
                >
                  {project.impact}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
