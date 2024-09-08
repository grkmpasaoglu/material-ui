import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function FoodCards() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* First Food Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s ease", // Animasyonun yumuşak olması için geçiş süresi
              "&:hover": {
                transform: "translateY(-10px)", // Hover sırasında yukarı kaydır
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images5.alphacoders.com/399/399563.jpg"
                alt="Pizza"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#5C5FEE"
                  fontWeight="bold"
                >
                  Pizza
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A delicious Italian dish topped with cheese, tomato sauce, and
                  a variety of toppings.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Second Food Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s ease", // Animasyonun yumuşak olması için geçiş süresi
              "&:hover": {
                transform: "translateY(-10px)", // Hover sırasında yukarı kaydır
              },
            }}
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://i.redd.it/2wy800qcw9p41.jpg"
                alt="Burger"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#5C5FEE"
                  fontWeight="bold"
                >
                  Burger
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A classic American meal with a juicy beef patty, fresh
                  lettuce, tomato, and your favorite sauces.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Third Food Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s ease", // Animasyonun yumuşak olması için geçiş süresi
              "&:hover": {
                transform: "translateY(-10px)", // Hover sırasında yukarı kaydır
              },
            }}
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/hd/sushi-appetizer-platter-1ozalv1s6v4jk78m.jpg"
                alt="Sushi"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#5C5FEE"
                  fontWeight="bold"
                >
                  Sushi
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A traditional Japanese dish with vinegared rice, seafood, and
                  vegetables, often served with soy sauce.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
