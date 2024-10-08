import React from "react";
import ItemLayout from "./item-layout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start transition-transform transform hover:scale-105">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-extrabold text-gray-100">
            Crafting Digital Experiences with Precision & Passion
          </h2>
          <p className="text-gray-100 text-1xl sm:text-sm md:text-base">
            As a dedicated web developer, I specialize in creating user-centric
            web applications that blend performance with seamless design. My
            expertise spans cutting-edge technologies like Next.js, TypeScript,
            and React.js, enabling me to build scalable and efficient solutions
            for businesses. With a strong focus on UI/UX, I ensure that every
            project not only performs flawlessly but also offers a visually
            captivating experience. Whether it's building dynamic interfaces or
            leveraging the power of cloud computing, I thrive on pushing the
            boundaries of what's possible in web development.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent transition-transform transform hover:scale-105">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent transition-transform transform hover:scale-105">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+{" "}
            <sub className="font-semibold text-base">hours daily learning</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,ts,tailwind,react,nextjs,figma,git,github,netlify,nodejs,npm,postgres,supabase,vercel,vscode,`}
            loading="lazy"
            alt="Skills Icons"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full text-center mt-10">
          <blockquote className="italic text-gray-100">
            "Coding is not just about solving problems; it's about crafting solutions that empower users."
          </blockquote>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
