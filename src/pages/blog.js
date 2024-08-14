import React, { useEffect ,useState} from "react";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';

const blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setblogs(data);
  //     });
  // }, []);
  return (
    <section class="bg-white dark:bg-gray-900 mt-12">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p class="font-light text-gray-500 sm:text-xl text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          {blogs.map((blogItem) => {
            return (
              <article key={blogItem.slug} class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <img src="/icon.png" className="w-4 mr-2" alt="" />
                    Blog
                  </span>
                  <span class="text-sm">14 days ago</span>
                </div>
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`/blogpost/${blogItem.slug}`}>
                    {blogItem.title}
                  </Link>
                </h2>
                <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {blogItem.short}
                </p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <span class="font-medium dark:text-white">
                      Kumar Piyush
                    </span>
                  </div>
                  <a
                    href="#"
                    class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      class="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}

          
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  let data=await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`)
  let allBlogs=await data.json()
  return{
    props:{allBlogs},
  }
}

export default blog;
