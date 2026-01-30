import { Card, CardContent, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4">Bienvenido</Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">
            Esta es una base MERN con React Router, MUI y SimpleBar lista para
            crecer.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Home;
