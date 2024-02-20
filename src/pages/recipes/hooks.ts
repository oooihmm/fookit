import { useState } from 'react';

export type RecipeCategory = 'Healthy' | 'Diet' | 'Protein' | 'World';
export type Recipe = {
  boardId: number;
  author: string;
  title: string;
  body: string;
  imgUrl: null | string;
  views: number;
  likes: number;
  totalTime: string;
  totalKcal: string;
  totalPrice: string;
  category: RecipeCategory;
  createdAt: string;
  ingredients: string[];
};

const useRecipes = () => {
  const initRecipeData = [
    {
      boardId: 0,
      author: 'Eleanor Grace',
      title: 'Grilled Chicken Salad',
      body: `Marinate chicken in olive oil, lemon juice, salt, and pepper.
Grill chicken until fully cooked.
Mix grilled chicken with salad greens, cherry tomatoes, and sliced cucumbers.`,
      imgUrl: null,
      views: 135,
      likes: 20,
      totalTime: '20 minutes',
      totalKcal: '300 calories per serving',
      totalPrice: 'Moderate',
      category: 'Healthy' as RecipeCategory,
      createdAt: '2023.12.13',
      ingredients: [
        'Chicken breast',
        'Mixed salad greens',
        'Cherry tomatoes',
        'Cucumbers',
        'Olive oil',
        'Lemon juice',
        'Salt and pepper',
      ],
    },
    {
      boardId: 1,
      author: 'Sebastian James',
      title: 'Quinoa Veggie Bowl',
      body: `Cook quinoa according to package instructions.
Sauté garlic in olive oil, add chopped veggies and chickpeas.
Mix in cooked quinoa and soy sauce.`,
      imgUrl: null,
      views: 245,
      likes: 50,
      totalTime: '25 minutes',
      totalKcal: '400 calories per serving',
      totalPrice: 'Budget-friendly',
      category: 'Diet' as RecipeCategory,
      createdAt: '2023.12.15',
      ingredients: [
        'Quinoa',
        'Broccoli',
        'Bell peppers',
        'Chickpeas',
        'Olive oil',
        'Garlic',
        'Soy sauce',
      ],
    },
    {
      boardId: 2,
      author: 'Amelia Rose',
      title: 'Salmon and Asparagus Foil Packets',
      body: `Place salmon, asparagus, lemon slices, and dill on foil.
Drizzle with olive oil, season with salt and pepper.
Seal packets and bake until salmon is cooked.`,
      imgUrl: null,
      views: 176,
      likes: 105,
      totalTime: '30 minutes',
      totalKcal: '350 calories per serving',
      totalPrice: 'Moderate',
      category: 'Protein' as RecipeCategory,
      createdAt: '2023.12.18',
      ingredients: [
        'Salmon fillets',
        'Asparagus spears',
        'Lemon slices',
        'Dill',
        'Olive oil',
        'Salt',
        'pepper',
      ],
    },
    {
      boardId: 3,
      author: 'Oliver Miles',
      title: 'Greek Yogurt Parfait',
      body: `Layer Greek yogurt, berries, and granola.
Repeat layers.
Drizzle with honey before serving.`,
      imgUrl: null,
      views: 64,
      likes: 42,
      totalTime: '10 minutes',
      totalKcal: 'Budget-friendly',
      totalPrice: '250 calories per serving',
      category: 'Healthy' as RecipeCategory,
      createdAt: '2023.12.18',
      ingredients: ['Greek yogurt', 'Mixed berries', 'Granola', 'Honey'],
    },
    {
      boardId: 4,
      author: 'Charlotte Paige',
      title: 'Turkey and Veggie Stir-Fry',
      body: `Brown turkey in a pan with ginger and garlic.
Add chopped veggies and stir-fry until tender.
Mix in soy sauce and serve over brown rice.`,
      imgUrl: null,
      views: 198,
      likes: 77,
      totalTime: '15 minutes',
      totalKcal: '350 calories per serving',
      totalPrice: 'Budget-friendly',
      category: 'Protein' as RecipeCategory,
      createdAt: '2023.12.24',
      ingredients: [
        'Ground turkey',
        'Broccoli florets',
        'Carrots',
        'Snap peas',
        'Soy sauce',
        'Ginger',
        'Garlic',
      ],
    },
    {
      boardId: 5,
      author: 'Henry Alexander',
      title: 'Sweet Potato and Black Bean Quesadillas',
      body: `Roast sweet potatoes and mash with black beans, cumin, and paprika.
Spread mixture on tortillas, add cheese, and fold in half.
Grill until cheese is melted.`,
      imgUrl: null,
      views: 234,
      likes: 149,
      totalTime: '25 minutes',
      totalKcal: '300 calories per serving',
      totalPrice: 'Budget-friendly',
      category: 'World' as RecipeCategory,
      createdAt: '2023.12.27',
      ingredients: [
        'Sweet potatoes',
        'Black beans',
        'Whole wheat tortillas',
        'Cheese',
        'Cumin',
        'Paprika',
      ],
    },
    {
      boardId: 6,
      author: 'Sophia Claire',
      title: 'Avocado and Chickpea Salad Wraps',
      body: `Mash avocado and mix with chickpeas, tomatoes, onion, and cilantro.
Add lime juice and spoon into wraps.`,
      imgUrl: null,
      views: 392,
      likes: 321,
      totalTime: '15 minutes',
      totalKcal: '320 calories per serving',
      totalPrice: 'Budget-friendly',
      category: 'Diet' as RecipeCategory,
      createdAt: '2023.12.29',
      ingredients: [
        'Avocado',
        'Chickpeas',
        'Cherry tomatoes',
        'Red onion',
        'Cilantro',
        'Lime juice',
        's',
      ],
    },
    {
      boardId: 7,
      author: 'Liam Benjamin',
      title: 'Cauliflower Fried Rice',
      body: `Sauté shrimp or tofu, add vegetables and cauliflower rice.
Push ingredients to the side, scramble egg in the pan.
Mix everything, add soy sauce, and stir well.`,
      imgUrl: null,
      views: 57,
      likes: 28,
      totalTime: '20 minutes',
      totalKcal: '280 calories per serving',
      totalPrice: 'Moderate',
      category: 'World' as RecipeCategory,
      createdAt: '2023.12.29',
      ingredients: [
        'Cauliflower rice',
        'Peas and carrots',
        'Shrimp',
        'tofu',
        'Scallions',
        'Egg',
        'Soy sauce',
      ],
    },
  ];

  const [recipeData, setRecipeData] = useState<Recipe[]>(initRecipeData);

  return {
    recipeData,
    setRecipeData,
  };
};

export { useRecipes };
