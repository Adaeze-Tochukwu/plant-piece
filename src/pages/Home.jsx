import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Steps from '../components/steps/Steps';
import BestSelling from '../components/bestSelling/BestSelling';
import Categories from '../components/categories/Categories';
import Summer from '../components/summer/Summer';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Steps />
      <BestSelling />
      <Categories />
      <Summer />
    </div>
  );
}
