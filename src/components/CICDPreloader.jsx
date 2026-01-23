import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const stages = ["Code", "Build", "Test", "Deploy"];

const dotVariants = {
  animate: (i) => ({
    opacity: [0.3, 1, 0.3],
    scale: [1, 1.4, 1],
    transition: {
      delay: i * 0.4,
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const CICDPreloader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#020617",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000
      }}
    >
      {/* Pipeline */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
        {stages.map((stage, index) => (
          <Box key={stage} sx={{ textAlign: "center" }}>
            <motion.div
              custom={index}
              variants={dotVariants}
              animate="animate"
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#38BDF8",
                margin: "0 auto 8px"
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "#CBD5E1", fontWeight: 500 }}
            >
              {stage}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Text */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <Typography sx={{ color: "#94A3B8", letterSpacing: 1 }}>
          Running CI/CD Pipeline...
        </Typography>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.6 }}
        style={{
            height: 3,
            background: "#38BDF8",
            borderRadius: 4,
            marginTop: 12
        }}
        />
    </Box>
  );
};

export default CICDPreloader;
