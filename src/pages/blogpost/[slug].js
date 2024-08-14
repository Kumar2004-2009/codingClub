import { useRouter} from 'next/router'
import Image from "next/image";
import { useState,useEffect } from 'react';
export default function slug(props) {
  function createMarkup(c) {
    return {__html: c};
  }
  
  const router = useRouter()
  const [post, setpost] = useState(props.myBlog)
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const {slug}=router.query
  //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setpost(data);
  //     });
  // }, [router.isReady]);
  return <>
    <div className='flex mt-32 mx-60 flex-col justify-center items-center  max-w-[1400px]'>
      <div className='mb-10 text-4xl font-bold underline'>{post && post.title}</div>
      {/* <div className='flex gap-5 mb-10 mt-4'>
        <Image
          className="border-4 border-emerald-400"
          src={post && post.image1}
          width={550}
          height={50}
          alt="Picture of the author"
        />
        <Image
          className=" border-4 border-emerald-400"
          src={post && post.image2}
          width={550}
          height={50}
          alt="Picture of the author"
        />
      </div> */}
      {post && <div dangerouslySetInnerHTML={createMarkup(post.content)}
       className='text-xl font-normal'></div>}
      
    </div>
  </>
}
export async function getServerSideProps(context) {
  
  const {slug}=context.query
  let data=await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  let myBlog=await data.json()
  return{
    props:{myBlog},
  }
}
