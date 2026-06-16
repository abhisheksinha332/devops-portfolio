import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import { motion as Motion } from "framer-motion";
import {
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiReact,
  SiNginx,
  SiGithub,
  SiMongodb
} from "react-icons/si";
import { FaMicrosoft, FaAws, FaDev, FaPowerOff } from 'react-icons/fa';
import skillsJson from "../components/Data/skills.json";

// Use JSON directly as SKILLS; JSON now contains 6 cards with badge/color/icon
const SKILLS = skillsJson;

const HIGHLIGHT = new Set(["Azure DevOps", "Terraform", "Microsoft Azure", "Docker", "PowerShell"]);

const ICON_MAP = {
  azure: FaMicrosoft,
  aws: FaAws,
  "azure-devops": FaDev,
  terraform: SiTerraform,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  powershell: FaPowerOff,
  python: SiPython,
  react: SiReact,
  nginx: SiNginx,
  github: SiGithub
};

export default function Skills() {
  return (
    <Box id="skills" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" spacing={2} mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Skills & Technologies
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Stack>

        {/* CSS Grid: minmax(320px, 1fr) for equal-width stretch, gridAutoRows: 1fr for equal heights */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(320px, 1fr))", md: "repeat(3, minmax(320px, 1fr))" },
            gridAutoRows: "320px", /* fixed row height (reduced by ~20px) */
            alignItems: "stretch" /* stretch cards to fill grid cell */
          }}
        >
          {SKILLS.map((card, idx) => {
            const visibleItems = card.items.slice(0, 5);
            const hiddenCount = card.items.length - visibleItems.length;
            return (
              <Motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                style={{ display: "flex", height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: "24px",
                    background: "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
                    border: "1px solid rgba(148,163,184,0.12)",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 0 0 1px rgba(139,92,246,0.28), 0 25px 50px rgba(0,0,0,0.6)"
                    }
                  }}
                >
                  {/* Title + Icon */}
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 3, minHeight: 48 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0, flex: 1 }}>
                      {card.title}
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${card.color}22`,
                        border: `1px solid ${card.color}55`,
                        flexShrink: 0
                      }}
                      aria-hidden
                    >
                      {(() => {
                        const IconComp = ICON_MAP[card.icon];
                        return IconComp ? <IconComp size={18} color={card.color} /> : null;
                      })()}
                    </Box>
                  </Box>

                  {/* Skill chips - limit visible to 6, show +X more */}
                  <Box sx={{ flex: 1, mb: 3 }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} style={{ ['--chip-accent']: card.color }}>
                      {card.items.slice(0, 6).map((it) => (
                        <Box key={it} sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.5, py: 0.6, borderRadius: 2, background: "rgba(30,41,59,0.8)", color: "#CBD5E1", border: "1px solid rgba(51,65,85,0.8)", fontSize: "0.85rem", fontWeight: 500 }}>
                          <Box sx={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '6px' }}>
                            {(() => {
                              // Use ICON_MAP heuristics: prefer a mapping by explicit card.icon when possible,
                              // otherwise attempt simple keyword matches to existing ICON_MAP keys.
                              const lower = it.toLowerCase();
                              let Icon = null;
                              // direct keyword matches to ICON_MAP keys
                              if (lower.includes('azure')) Icon = ICON_MAP.azure;
                              else if (lower.includes('aws')) Icon = ICON_MAP.aws;
                              else if (lower.includes('azure devops') || lower.includes('devops')) Icon = ICON_MAP['azure-devops'];
                              else if (lower.includes('terraform')) Icon = ICON_MAP.terraform;
                              else if (lower.includes('docker')) Icon = ICON_MAP.docker;
                              else if (lower.includes('kubernet') || lower.includes('k8s')) Icon = ICON_MAP.kubernetes;
                              else if (lower.includes('powershell') || lower.includes('power')) Icon = ICON_MAP.powershell;
                              else if (lower.includes('python')) Icon = ICON_MAP.python;
                              else if (lower.includes('react')) Icon = ICON_MAP.react;
                              else if (lower.includes('nginx')) Icon = ICON_MAP.nginx;
                              else if (lower.includes('github') || lower.includes('git')) Icon = ICON_MAP.github;
                              return Icon ? <Icon size={14} color={card.color} /> : <span style={{ width: 8, height: 8, borderRadius: 6, background: card.color, display: 'inline-block' }} />;
                            })()}
                          </Box>
                          {it}
                        </Box>
                      ))}
                      {hiddenCount > 0 && (
                        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.5, py: 0.6, borderRadius: 2, background: "rgba(30,41,59,0.8)", color: "#94A3B8", border: "1px solid rgba(51,65,85,0.8)", fontSize: "0.85rem", fontWeight: 600 }}>
                          +{hiddenCount} more
                        </Box>
                      )}
                    </Box>
                  </Box>

                  {/* Badge - margin-top: auto to stick at bottom */}
                  <Box
                    sx={{
                      mt: "auto",
                      py: 1.2,
                      px: 2,
                      borderRadius: 2,
                      backgroundColor: `${card.color}22`,
                      border: `1px solid ${card.color}55`,
                      color: card.color,
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: "0.9rem",
                      minHeight: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {card.badge}
                  </Box>
                </Paper>
              </Motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
