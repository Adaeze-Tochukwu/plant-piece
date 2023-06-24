import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Steps from '../components/steps/Steps';
import BestSelling from '../components/bestSelling/BestSelling';
import Categories from '../components/categories/Categories';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Steps />
      <BestSelling />
      <Categories />
    </div>
  );
}
