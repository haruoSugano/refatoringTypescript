import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    isAvailable: boolean
}

interface FoodsProviderProps {
    children: ReactNode;
}

interface FoodsContextData {
    foods: Food[];
    createFood: (food: FoodInput) => Promise<void>;
}

type FoodInput = Omit<Food, 'id'>;

const FoodContext = createContext<FoodsContextData>(
    {} as FoodsContextData
);

export function FoodsProvider({ children }: FoodsProviderProps) {

    const [foods, setFoods] = useState<Food[]>([]);

    useEffect(() => {
        api.get('foods').then(response => setFoods(response.data.foods))
    }, []);

    async function createFood(foodInput: FoodInput) {
        const response = await api.post('/foods', {
            ...foodInput,
            isAvailable: true
        });

        const { food } = response.data;

        setFoods([
            ...foods,
            food
        ]);
    }

    return (
        <FoodContext.Provider value={{ foods, createFood }}>
            {children}
        </FoodContext.Provider>
    );
}

export function useFoods() {
    const context = useContext(FoodContext);

    return context;
}