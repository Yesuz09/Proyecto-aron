import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MealCard = ({ meal, onClick }) => {
    return (
        <Card onClick={() => onClick(meal)} sx={{ maxWidth: 345, cursor: 'pointer' }}>
            <CardMedia
                component="img"
                height="140"
                image={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {meal.strMeal}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MealCard;
