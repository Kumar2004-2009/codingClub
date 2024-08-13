import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.",
    image: "/icon-1.png",
  },
  {
    text: "Pagedone has revolutionized how I handle my daily tasks. It's so simple and efficient. The reminders and notifications ensure that I never miss an important deadline. I highly recommend it to anyone looking to stay organized!",
    image: "/icon-2.png",
  },
  {
    text: "The best tool I've ever used! Pagedone is the perfect companion for both my personal and professional life. The seamless integration with other tools I use makes it indispensable. My productivity has increased significantly since I started using it.",
    image: "/icon-3.png",
  },
];

const about = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <>
      <div className="mt-24">
        <h1 className="text-5xl font-bold max-w-[700px] text-center mx-auto leading-[58px]">
          Get Latest Coding Blogs With{" "}
          <span className="text-cyan-500">Coding Club</span>
        </h1>
        <p className="max-w-[700px] mx-auto my-5 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eos
          obcaecati magnam voluptas, expedita suscipit eius fuga officia, minima
          similique aut?{" "}
        </p>
        <div className="my-28 flex gap-10 justify-center">
          <section>
            <Image src="/logo.webp" width={580} height={360} />
          </section>
          <section className="max-w-[700px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-8">About US</h1>
            <p className="text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, rerum nisi! Dicta eos voluptate accusamus, impedit
              delectus culpa dolorem molestias consequatur aspernatur autem
              ducimus in repellendus ex molestiae excepturi mollitia fugit est
              rem sit, harum, porro cumque. Quibusdam provident commodi in
              assumenda necessitatibus. Molestiae aliquam ipsa incidunt ipsam
              tenetur veniam.
            </p>
          </section>
        </div>

        <div className="my-28 flex gap-16 justify-center">
          <section className="max-w-[600px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-8">
              We are Creative Since 2005
            </h1>
            <p className="text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, rerum nisi! Dicta eos voluptate accusamus, impedit
              delectus culpa dolorem molestias consequatur aspernatur autem
              ducimus in repellendus ex molestiae excepturi.
            </p>
          </section>
          <section>
            <Image src="/img-1.png" width={580} height={360} />
          </section>
        </div>

        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="mb-16 text-4xl my-5 font-bold">
            Our Result in Numbers
          </h1>
          <div className="flex gap-12">
            <div class="flex gap-6 bg-white p-6 rounded-lg shadow-md text-center max-w-md">
              <h1 class="text-4xl font-bold text-purple-600">240%</h1>
              <div>
                <h2 class="text-2xl font-semibold mt-2">Company growth</h2>
                <p class="text-gray-600 mt-2">
                  Company's remarkable growth journey as we continually innovate
                  and drive towards new heights of success.
                </p>
              </div>
            </div>

            <div class="flex gap-6 bg-white p-6 rounded-lg shadow-md text-center max-w-md">
              <h1 class="text-4xl font-bold text-purple-600">100+</h1>
              <div>
                <h2 class="text-2xl font-semibold mt-2">Blogs Posted</h2>
                <p class="text-gray-600 mt-2">
                  Our very talented team members are the powerhouse of pagedone
                  and pillars of our success.
                </p>
              </div>
            </div>

            <div class="flex gap-6 bg-white p-6 rounded-lg shadow-md text-center max-w-md">
              <h1 class="text-4xl font-bold text-purple-600">50+</h1>
              <div>
                <h2 class="text-2xl font-semibold mt-2">Projects Completed</h2>
                <p class="text-gray-600 mt-2">
                  We have accomplished more than 625 projects worldwide and we
                  are still counting many more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 w-full mt-40 max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-14">
            What our happy users say!
          </h2>

          <div className="text-2xl text-gray-700 text-center mb-14 max-w-3xl mx-auto">
            <p>{testimonials[currentTestimonial].text}</p>
          </div>

          <div className="flex justify-center space-x-14">
            {testimonials.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.image}
                alt={`User ${index + 1}`}
                className={`w-16 h-16 rounded-full cursor-pointer ${
                  index === currentTestimonial ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-40 bg-indigo-600 text-white rounded-lg p-8 w-full max-w-8xl mx-auto my-10">
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
      </div>
    </>
  );
};

export default about;
