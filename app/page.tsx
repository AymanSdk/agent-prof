import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brin'
          subject='Neural Networks'
          duration={45}
          color='#4A90E2'
        />
        <CompanionCard
          id='1234'
          name='Laarbi the Number wizard'
          topic='derivatives and integrals'
          subject='Calculus'
          duration={30}
          color='#E94E77'
        />
        <CompanionCard
          id='12345'
          name='zbida the chemical engineer'
          topic='Chemical Reactions'
          subject='Chemistry'
          duration={45}
          color='#F5A623'
        />
      </section>
      <section className='home-section'>
        <CompanionsList
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 mx-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
