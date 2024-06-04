import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import MealList from './components/listaElementos';
import MealDetails from './components/Detalles';

const App = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                setMeals(response.data.meals);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, []);

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
    };

    return (
        <Container>
            <Typography variant="h3" component="h1" sx={{ marginY: 4, textAlign: 'center' }}>
                Menú del Restaurante
            </Typography>
            <MealList meals={meals} onMealClick={handleMealClick} />
            {selectedMeal && (
                <MealDetails meal={selectedMeal} />
            )}
        </Container>
    );
};

export default App;
