import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const skills = [
  { title: "React.js", logo: "/logos/reactjs.png" },
  { title: "Node.js", logo: "/logos/node.png" },
  { title: "Express.js", logo: "/logos/expressjs.png" },
  { title: "MongoDB", logo: "/logos/mongodb.png" },
  { title: "JavaScript", logo: "/logos/js.png" },
  { title: "Linux", logo: "/logos/linux.png" },
  { title: "Docker", logo: "/logos/docker.png" },
  { title: "Git", logo: "/logos/git.png" },
  { title: "MySQL", logo: "/logos/mysql.png" },
  { title: "Python", logo: "/logos/python.png" },
  { title: "C++", logo: "/logos/cpp.png" },
];

function Skills() {
  return (
    <Box sx={{ mt: 8, py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontFamily: "Domine", color: "white", mt: 0 }}
      >
        Skills
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box
                  component="img"
                  src={skill.logo}
                  alt={skill.title}
                  sx={{
                    width: 90,
                    height: 90,
                    margin: "0 auto",
                    mb: 1,
                    transition: "filter 0.3s",
                    "&:hover": {
                      filter: "drop-shadow(0 0 10px #1976d2)",
                    },
                  }}
                />
                <Typography
                  variant="subtitle1"
                  fontFamily="Domine"
                  fontSize={17}
                >
                  {skill.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontFamily: "Domine",
          color: "white",
          mt: 4,
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        and learning more...
      </Typography>
    </Box>
  );
}

export default Skills;
