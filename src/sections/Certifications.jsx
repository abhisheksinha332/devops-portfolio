import {Box,Container,Typography,Paper,Stack,IconButton} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { motion } from "framer-motion";
// import CertImage1 from "../assets/az900.svg";
// import CertImage2 from "../assets/az104.svg";

const myCertifications = [
  {
    title: "AZ-900: Microsoft Certified: Azure Fundamentals",
    points: ["Cloud Concepts", "Azure architecture and services", "Core solutions and management tools on Azure", "Azure management and governance", "Identity, governance, privacy, and compliance features"],
    image: "/certificationsImg/az900.svg",
    
    verifyLink: "https://learn.microsoft.com/api/credentials/share/en-us/AbhishekSinha-7533/687EF3FCE3A235CA?sharingId=2074A778E8588350",
    issuer: "Microsoft",
    year: "2023",
    color: "#3B82F6"
  },
  {
    title: "AZ-104: Microsoft Certified: Azure Administrator Associate",
    points: ["Manage Azure identities and governance", "Implement and manage storage", "Deploy and manage Azure compute resources", "Implement and manage virtual networking", "Monitor and maintain Azure resources"],
    image: "/certificationsImg/az104.svg",
    verifyLink: "https://learn.microsoft.com/api/credentials/share/en-us/AbhishekSinha-7533/126A802988A6FC53?sharingId=2074A778E8588350",
    issuer: "Microsoft",
    year: "2025",
    color: "#3B82F6"
  }
];

const Certifications = () => {
  return (
    <Box
      id="certifications"
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
            Certifications
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

        </Stack>

        {/* Cards */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {myCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
          

                <Paper
                sx={{
                    p: 3,
                    background:
                    "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9))",
                    border: "1px solid rgba(148,163,184,0.12)",
                    borderRadius: 3,
                    transition: "all 0.35s ease",
                    "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                        "0 0 0 1px rgba(56,189,248,0.3), 0 20px 40px rgba(0,0,0,0.6)"
                    }
                }}
                >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    alignItems="center"
                >
                    {/* LEFT: CERT IMAGE */}
                    <Box
                    component="img"
                    src={cert.image}
                    alt={cert.title}
                    sx={{
                        width: 90,
                        height: 90,
                        objectFit: "contain",
                        flexShrink: 0
                    }}
                    />

                    {/* RIGHT: TEXT */}
                    <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "0.9rem", mb: 0.5 }}>
                        {cert.title}
                    </Typography>

                    <Typography
                        sx={{ fontSize: "0.85rem", color: "#94A3B8", mb: 1 }}
                    >
                        {cert.issuer} · {cert.year}
                    </Typography>

                    <Stack spacing={0.5} mb={1.5}>
                        {cert.points.map((point) => (
                        <Typography
                            key={point}
                            sx={{ fontSize: "0.95rem", color: "#CBD5E1" }}
                        >
                            • {point}
                        </Typography>
                        ))}
                    </Stack>

                    {/* VERIFY LINK */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <OpenInNewIcon sx={{ fontSize: 18, color: "#38BDF8" }} />
                        <Typography
                        component="a"
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontSize: "0.9rem",
                            color: "#38BDF8",
                            fontWeight: 500,
                            textDecoration: "none",
                            "&:hover": {
                            textDecoration: "underline"
                            }
                        }}
                        >
                        Verify Credential
                        </Typography>
                    </Stack>
                    </Box>
                </Stack>
                </Paper>

            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Certifications;
