import { Card, CardContent, Typography } from "@mui/material";

const About = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Acerca del proyecto
        </Typography>
        <Typography variant="body2">
          Usa axios para consumir el backend en <strong>/api/health</strong> y
          ampliar la SPA con más rutas cuando lo necesites.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
