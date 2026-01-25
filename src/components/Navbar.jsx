import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Appreciations", href: "#appreciations" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(15,23,42,0.06)"
        }}
      >
        <Toolbar sx={{ minHeight: 72 }}>
          {/* Logo / Name */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#f4f4f4ff", lineHeight: 1.2 }}
            >
              Abhishek Sinha
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "f4f4f4ff" }}
            >
              DevOps Engineer
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: "#f4f4f4ff",
                  fontWeight: 500,
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -4,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#38BDF8",
                    transition: "width 0.3s ease"
                  },
                  "&:hover::after": {
                    width: "100%"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, color: "#0F172A" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "#0F172A",
            color: "#fff",
            zIndex: 13000
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Abhishek Sinha
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            DevOps Engineer
          </Typography>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(56,189,248,0.1)"
                  }
                }}
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: 72 }} />
    </>
  );
}
