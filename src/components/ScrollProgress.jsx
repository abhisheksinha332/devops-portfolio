import { motion, useScroll } from "framer-motion";
import { Box } from "@mui/material";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 64, 
        left: 0,
        width: "100%",
        height: 3,
        zIndex: 2000,
        backgroundColor: "rgba(148,163,184,0.15)"
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background:"linear-gradient(90deg, #38BDF8, #6366F1)",
          boxShadow: "0 0 12px rgba(56,189,248,0.8)",
          transformOrigin: "0%",
          scaleX: scrollYProgress
        }}
      />
    </Box>
  );
};

export default ScrollProgress;
