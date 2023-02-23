import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/HomeCard";
import AnalyticsCard from "../components/AnalyticsCard";
import ClassTab from "../components/ClassTab";

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-300'>
      <Head>
        <title>Trading App</title>
      </Head>

      <main className='flex space-x-10'>
        <HomeCard />

        <AnalyticsCard />

        <ClassTab />
      </main>
    </div>
  );
};

export default Home;
