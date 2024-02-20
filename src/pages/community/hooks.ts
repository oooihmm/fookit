import { useState } from 'react';

export type Community = {
  boardId: number;
  title: string;
  body: string;
  author: string;
  imgUrl?: string;
  createdDate: string;
  likes: number;
  views: number;
};

const useCommunity = () => {
  const initCommunity = [
    {
      boardId: 0,
      title: 'Recipe for Leftover Onions',
      createdDate: '2023.12.14',
      likes: 10,
      views: 23,
      author: 'Sophia Bennett',
      body: "Discover a delightful recipe using leftover onions! Whether it's a savory onion soup or a flavorful onion relish, make the most of your surplus onions with this creative culinary suggestion.",
    },
    {
      boardId: 1,
      title: 'Looking to Share Excess Potatoes',
      createdDate: '2023.12.14',
      likes: 12,
      views: 15,
      author: 'Noah Edwards',
      body: "Have extra potatoes and no one to share them with? Seek out someone in need or willing to accept your surplus potatoes with this heartfelt request. Let's prevent food waste and build community connections!",
    },
    {
      boardId: 2,
      title: 'Low Carb, High Protein Diet Ideas',
      createdDate: '2023.12.14',
      likes: 53,
      views: 92,
      author: 'Noah Edwards',
      body: "Share your favorite recipes for a low-carb, high-protein diet! Whether it's a protein-packed salad, a lean meat dish, or a creative veggie bowl, contribute to the community's health-conscious meal ideas and inspire others on their dietary journey.",
    },
    {
      boardId: 3,
      title: 'Recipe Suggestions for Leftover Zucchinis',
      createdDate: '2023.12.17',
      likes: 13,
      views: 15,
      author: 'Jackson Walker',
      body: 'Looking for creative ways to use up those extra zucchinis? Explore these delicious recipes that turn surplus zucchinis into tasty dishes, from savory fritters to refreshing salads.',
    },
    {
      boardId: 4,
      title: 'Any Takers for Spare Bell Peppers?',
      createdDate: '2023.12.18',
      likes: 15,
      views: 21,
      author: 'Emma Harrison',
      body: "Have a surplus of bell peppers and no one to share them with? Reach out to the community and find someone in need or willing to take those extra bell peppers off your hands. Let's minimize food waste together!",
    },
    {
      boardId: 5,
      title: 'Share Your Favorite High-Fiber Breakfasts',
      createdDate: '2023.12.21',
      likes: 18,
      views: 32,
      author: 'Mason Carter',
      body: "On the hunt for breakfast ideas that are low in carbs and high in fiber? Share your go-to recipes for a nutritious and satisfying morning meal. From chia seed puddings to fiber-rich smoothie bowls, let's swap ideas for a healthy start to the day!",
    },
    {
      boardId: 6,
      title: 'Any Takers for Spare Bell Peppers?',
      createdDate: '2023.12.21',
      likes: 33,
      views: 42,
      author: 'Olivia Mitchell',
      body: "Have a surplus of bell peppers and no one to share them with? Reach out to the community and find someone in need or willing to take those extra bell peppers off your hands. Let's minimize food waste together!",
    },
    {
      boardId: 7,
      title: 'Transforming Leftover Rice into Culinary Magic',
      createdDate: '2023.12.21',
      likes: 53,
      views: 78,
      author: 'Ethan Foster',
      body: "Got extra rice hanging around? Discover inventive ways to transform it into delightful dishes. Whether it's fried rice, rice pudding, or savory rice balls, make the most of your surplus rice with these creative recipes.",
    },
    {
      boardId: 8,
      title: 'In Search of Creative Apple Recipes',
      createdDate: '2023.12.23',
      likes: 3,
      views: 9,
      author: 'Ava Hayes',
      body: 'Have an abundance of apples and looking for unique recipes? Explore these creative ways to turn those apples into mouthwatering dishes, from cinnamon-spiced desserts to savory apple-infused main courses.',
    },
    {
      boardId: 9,
      title: 'Ideas for Leftover Roasted Vegetables',
      createdDate: '2023.12.23',
      likes: 15,
      views: 19,
      author: 'Aiden Brooks',
      body: 'Wondering what to do with those extra roasted vegetables? Check out these recipes that give new life to leftovers. From hearty vegetable soups to flavorful grain bowls, these ideas will elevate your surplus roasted veggies to a whole new level.',
    },
    {
      boardId: 10,
      title: 'Calling All Quinoa Lovers!',
      createdDate: '2023.12.28',
      likes: 38,
      views: 69,
      author: 'Harper Turner',
      body: "Share your favorite quinoa recipes with the community! Whether it's a quinoa salad, bowl, or innovative side dish, let's exchange ideas for incorporating this nutritious grain into our meals.",
    },
    {
      boardId: 11,
      title: 'Creative Uses for Leftover Cucumbers',
      createdDate: '2023.12.29',
      likes: 3,
      views: 3,
      author: 'Liam Cooper',
      body: 'Have more cucumbers than you can handle? Explore these creative recipes that turn surplus cucumbers into refreshing dishes, from cucumber salads to chilled soups.',
    },
  ];

  const [communityData, setCommunityData] =
    useState<Community[]>(initCommunity);

  return {
    communityData,
    setCommunityData,
  };
};

export default useCommunity;
