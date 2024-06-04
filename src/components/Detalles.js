import React from 'react';
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const MealDetails = ({ meal }) => {
    if (!meal) return <div>Selecciona un platillo para ver los detalles.</div>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {meal.strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {meal.strInstructions}
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                    Ingredientes
                </Typography>
                <List>
                    {ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default MealDetails;
