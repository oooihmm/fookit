import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 1900px;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

const MediumTitle = styled.div`
  font-size: 30px;
`;

const Contents = styled.div``;

const Guide = () => {
  return (
    <Container>
      <Title>
        Meal Prepping: Simplifying Your Meals, Simplifying Your Life
      </Title>
      <Contents>
        Meal prepping, also known as "meal prep," is the practice of preparing
        meals or ingredients ahead of time to streamline and simplify your
        eating routine throughout the week. It involves planning, cooking, and
        portioning out meals or components in advance, typically for several
        days ahead. This approach has gained popularity for its numerous
        benefits and time-saving advantages.
      </Contents>
      <SubTitle>Why Meal Prep?</SubTitle>
      <MediumTitle>1. Time Efficiency:</MediumTitle>
      <Contents>
        Meal prepping allows you to dedicate a block of time, usually once a
        week, to prepare meals. This upfront investment in time saves you the
        hassle of cooking every day.
      </Contents>
      <MediumTitle>2. Healthier Choices:</MediumTitle>
      <Contents>
        By planning and preparing your meals in advance, you have greater
        control over the ingredients and portion sizes, making it easier to
        stick to a balanced diet.
      </Contents>
      <MediumTitle>3. Cost Savings:</MediumTitle>
      <Contents>
        Buying ingredients in bulk and cooking in larger quantities often works
        out to be more cost-effective than buying individual meals or dining out
        regularly.
      </Contents>
      <MediumTitle>4. Reduces Stress:</MediumTitle>
      <Contents>
        Knowing that your meals are already prepared eliminates the stress of
        having to figure out what to eat or scrambling to cook when you're
        hungry and short on time.
      </Contents>
      <SubTitle>How to Meal Prep:</SubTitle>
      <MediumTitle>1. Plan Your Meals:</MediumTitle>
      <Contents>
        Decide which meals you want to prepare for the upcoming days. Consider
        your nutritional needs, dietary preferences, and any special occasions.
      </Contents>
      <MediumTitle>2. Make a Shopping List:</MediumTitle>
      <Contents>
        Based on your meal plan, create a list of ingredients you'll need. Stick
        to your list to avoid unnecessary purchases.
      </Contents>
      <MediumTitle>3. Set Aside Time for Preparing:</MediumTitle>
      <Contents>
        Choose a day and time when you can dedicate a few hours to cooking and
        prepping. Many people find Sunday afternoon or evening ideal for meal
        prepping.
      </Contents>
      <MediumTitle>4. Cook in Batches:</MediumTitle>
      <Contents>
        Prepare large batches of staple foods such as grains, proteins, and
        vegetables. You can roast veggies, grill chicken, cook rice or quinoa,
        and prepare sauces or dressings.
      </Contents>
      <MediumTitle>5. Portion Out Meals:</MediumTitle>
      <Contents>
        Divide the cooked components into individual portions or containers.
        This makes it easier to grab a meal on the go or reheat when needed.
      </Contents>
      <MediumTitle>6. Store Properly:</MediumTitle>
      <Contents>
        Store your prepped meals in airtight containers in the refrigerator or
        freezer, depending on when you plan to consume them. Label containers
        with dates and contents for easy identification.
      </Contents>
      <MediumTitle>7. Reheat and Enjoy:</MediumTitle>
      <Contents>
        When it's time to eat, simply reheat your prepped meals in the microwave
        or oven, and enjoy a nutritious and convenient meal without the hassle
        of cooking from scratch.
      </Contents>
      <SubTitle>FOOKIT Features:</SubTitle>
      <Contents>
        At FOOKIT, we provide services tailored for meal preppers like you.
      </Contents>
      <MediumTitle>1. Recipe Sharing</MediumTitle>
      <Contents>
        Find out what other meal preppers are preparing. Whether you're dieting
        and counting calories or need healthy options for managing conditions
        like diabetes, discover a variety of recipes from people in similar
        situations.
      </Contents>
      <MediumTitle>2. Community</MediumTitle>
      <Contents>
        Still confused about meal prepping even after reading articles? Use our
        community forums to interact with others, ask questions, and get
        insights.
      </Contents>
      <MediumTitle>3. Find a Crew</MediumTitle>
      <Contents>
        Join a crew to meal prep together at school or work. Sharing meals and
        maintaining a healthy diet becomes easier when you have a support group.
        If you find a crew that matches your criteria, don't hesitate to leave a
        comment expressing your interest.
      </Contents>
    </Container>
  );
};

export default Guide;
