import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>&lt;Coding Club/&gt;</title>
          <meta
            name="description"
            content="Generated and created by next app"
          />
          <meta
            name="keywords"
            content="nextjs,huntingCoder blog,hunting coder"
          />
          <link rel="icon" href="/logo.webp" />
        </Head>
      </div>

      <div className=" mt-[60px] grid grid-cols-4 grid-rows-3 gap-2 h-screen p-4">
        <div className="relative col-span-2 row-span-2 bg-blue-200 flex items-center justify-center h-full">
          <img
            src="code.webp"
            alt="Image 1"
            className="object-cover w-full h-full opacity-80"
          />
          {/* <div className="absolute text-white text-xl font-bold">
            100% CUSTOMER SUPPORT
          </div> */}
        </div>

        {/* Regular-sized image */}
        <div className="relative col-span-2 row-span-1 bg-blue-300 flex items-center justify-center h-full">
          <img
            src="code2.png"
            alt="Image 2"
            className="object-cover w-full h-full opacity-80"
          />
          
        </div>

        {/* Tall image spanning two rows */}
        <div className="relative col-span-1 row-span-2 bg-blue-400 flex items-center justify-center h-full">
          <img
            src="code3.webp"
            alt="Image 3"
            className="object-cover w-full h-full opacity-80"
          />
          
        </div>
        <div className="relative col-span-1 row-span-2 bg-blue-400 flex items-center justify-center h-full">
          <img
            src="code4.jpg"
            alt="Image 3"
            className="object-cover w-full h-full opacity-80"
          />
          
        </div>
        <div className="relative col-span-2 row-span-1 bg-blue-200 flex items-center justify-center h-full">
          <img
            src="code5.jpg"
            alt="Image 1"
            className="object-cover w-full h-full opacity-80"
          />
          
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4 mt-10">
        <p className="fixed text-5xl font-bold left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &lt;Coding Club/&gt;
        </p>
        <p className="mt-8 text-2xl mb-10">
          A bolg for Hunting Coders by Coding Club
        </p>

        <h2 className="text-4xl font-bold my-8 text-cyan-600">&lt;Popular Blogs &gt;</h2>
        <div className="mb-4 ml-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left lg:gap-6">
          <a
            href="/blogpost/web-dev"
            className="group rounded-lg bg-slate-50 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-[28px] font-semibold`}>
              Start Web Devekopment in 2024{" "}
              
            </h2>
            <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
            New to Web development? Our beginner's guide covers everthing you need to know!...
            </p>
          </a>

          <a
            href="/blogpost/deploy-static-website"
            className="group bg-slate-50 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-[28px] font-semibold`}>
              Deploy Your Static Website{" "}
              
            </h2>
            <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
            Static websites are now used to bootstrap lots of websites...
            </p>
          </a>

          <a
            href="/blogpost/start-github"
            className="group bg-slate-50 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-[28px] font-semibold`}>
              Start Using Github To ShowCase Projects{" "}
              
            </h2>
            <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
            Unlock the Power of Github: Learn the basics and Boost Your Development Workflow
            </p>
          </a>

          <a
            href="/blogpost/dsa-start"
            className="group bg-slate-50 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-[28px] font-semibold`}>
              RoadMap to Start DSA{" "}
              
            </h2>
            <p className={`m-0 max-w-[30ch] text-md opacity-50 text-balance`}>
            Explore the world of coding and discover new possibilities.
            </p>
          </a>
        </div>
      </div>


      <Image
        className="ml-56 mt-10"
        src="/welcome.webp"
        width={1400}
        height={100}
        alt="Picture of the author"
      />

      <button className=" flex gap-4 mt-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-[230px]">
        <a href="/blog" className="text-3xl mx-auto">Start Exploring Now</a>
        <img src="/explore.jpeg" className="w-[40px] rounded-full" alt="" />
      </button>
      <div className="mt-20 bg-indigo-600 text-white rounded-lg p-8 w-full max-w-8xl mx-auto my-10">
        <h2 className="text-5xl my-10 font-semibold text-center mb-4">
          Subscribe to the latest offer
        </h2>
        <p className="text-center text-2xl mb-12 mt-14">
          Join our community of subscribers and receive regular updates
          delivered straight to your inbox. It's quick, easy, and free.
        </p>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email.."
            className="text-xl p-3 px-12 rounded-l-full text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-800 hover:bg-indigo-900 text-white p-3 px-5 text-xl rounded-r-full focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
