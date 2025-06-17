import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl underline'>Welcome to my Saas App</h1>
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
