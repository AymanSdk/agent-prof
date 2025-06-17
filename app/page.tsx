import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl underline'>Welcome to my new application</h1>
      <h2>By : Aymane Sadiki</h2>
      <Link href='/sign-in'>
        <Button variant='default'>Get started</Button>
      </Link>
      <Link href='/'>
        <Button variant='default'>Go Home</Button>
      </Link>
    </div>
  );
};

export default Page;
