import {Box,Container,Typography,Paper,Dialog,IconButton,Button,Stack,useMediaQuery} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";


const data = [
  {
    title: "Shabash Award – Catalyst",
    issuer: "Bosch",
    year: "2025",
    image: "../../../public/appreciationsImg/shabash1.jpg"
  },
  {
    title: "Shabash Award – Synergic Force",
    issuer: "Bosch",
    year: "2025",
    image: "../../../public/appreciationsImg/synergicForce.png"
  },
  {
    title: "Shabash Award – Rockstar",
    issuer: "Bosch",
    year: "2025",
    image: "../../../public/appreciationsImg/rockstar.png"
  },
  {
    title: "Shabash Award – Agile",
    issuer: "Bosch",
    year: "2025",
    image: "../../../public/appreciationsImg/Agile.png"
  }
];

export default function Appreciation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const slidesPerView = isMobile ? 1 : 3;


  const slides = [
    ...data.slice(-slidesPerView),
    ...data,
    ...data.slice(0, slidesPerView)
  ];

  const [index, setIndex] = useState(slidesPerView);
  const [animate, setAnimate] = useState(true);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const total = data.length;

  const handleNext = () => {
    setAnimate(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setAnimate(true);
    setIndex((prev) => prev - 1);
  };


  useEffect(() => {
    if (index >= total + slidesPerView) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slidesPerView);
      }, 500);
    }

    if (index <= 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(total);
      }, 500);
    }
  }, [index, slidesPerView, total]);

  const activeItem =
    data[(index - slidesPerView + total) % total];

    // console.log("Active Item:", activeItem);
    // console.log("Index:", index);
    // console.log("Slides Per View:", slidesPerView);
    // console.log("setIndex:", setIndex);

  return (
    <Box id="appreciations" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Appreciations
        </Typography>

        <Box
          sx={{
            width: 80,
            height: 4,
            backgroundColor: "#38BDF8",
            borderRadius: 2,
            mb: 6
          }}
        />

        <Box sx={{ position: "relative", overflow: "hidden" }}>
          {/* Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: -12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#38BDF8"
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#38BDF8"
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Slides */}
          <motion.div
            animate={{ x: `-${index * (100 / slidesPerView)}%` }}
            transition={
              animate ? { duration: 0.5, ease: "easeInOut" } : { duration: 0 }
            }
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: `${100 / slidesPerView}%`
            }}
          >
            {slides.map((item, i) => (
              <Box key={i} px={2} onClick={() => {setOpen(true); setSelected(item);}}>
                <Paper
                  sx={{
                    p: 3,
                    cursor: "pointer",
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9))",
                    border: "1px solid rgba(148,163,184,0.12)",
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 0 0 1px rgba(56,189,248,0.3), 0 20px 40px rgba(0,0,0,0.6)"
                    },
                    "& img": {
                        transition: "transform 0.4s ease"
                        },
                        "&:hover img": {
                        transform: "scale(1.05)"
                        }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "contain",
                      mb: 2
                    }}
                  />
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: 14 }}>
                    {item.issuer} • {item.year}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Modal */}
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
  {selected && (
    <Box sx={{ p: 3, backgroundColor: "#020617", color: "white" }}>
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
      >
        <CloseIcon />
      </IconButton>

      <Box
        component="img"
        src={selected.image}
        sx={{
          width: "100%",
          maxHeight: "55vh",
          objectFit: "contain",
          mb: 3
        }}
      />

      <Typography variant="h6">{selected.title}</Typography>
      <Typography sx={{ color: "#94A3B8", mb: 3 }}>
        {selected.issuer} • {selected.year}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          href={selected.image}
          download
        >
          Download
        </Button>

        <Button variant="outlined" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Stack>
    </Box>
  )}
</Dialog>

      </Container>
    </Box>
  );
}
