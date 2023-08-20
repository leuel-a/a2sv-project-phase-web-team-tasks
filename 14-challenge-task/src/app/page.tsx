import React from 'react';
import Card from '../components/Card';
import { useGetAllPositionsQuery } from "@/redux/features/apiSlice";

const Page = () => {
  // @ts-ignore
  const { data, isLoading, isError } = useGetAllPositionsQuery();
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong</div>
  }
  console.log(data);

  return (
    <main>
      {/* Here there need to be a container that will hold the cards */}
      <div className='flex flex-col mx-32 mt-20 items-center'>
        <Card />
      </div>
    </main>
  )
}

export default Page;
