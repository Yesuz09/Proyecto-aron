import React from 'react';
import MealCard from './elementoSimple';  // Asegúrate de que esta línea está presente
import { Grid } from '@mui/material';

const MealList = ({ meals, onMealClick }) => {
    return (
        <Grid container spacing={2}>
            {meals.map(meal => (
                <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
                    <MealCard meal={meal} onClick={onMealClick} />  
                </Grid>
            ))}
        </Grid>
    );
};

export default MealList;
