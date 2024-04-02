'use client';

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import profileImage from "../../public/manuja.jpg";
import graphisDesign from "../../public/design.png";
import codeImage from "../../public/code.png";

import project1 from "../../public/web1.png";
import project2 from "../../public/web2.png";
import project3 from "../../public/web3.png";
import project4 from "../../public/web4.png";
import project5 from "../../public/web5.png";

import { useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10">

        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm ">Developed by Manuja Guruge</h1>
            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-xl mx-5 " />
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1efEGh1TBDf1CEwesxEskZm6RlwlJthm1/view?usp=sharing" download={"CV"} className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400 ">Manuja Guruge</h1>
            <h3 className="text-2xl py-4 md:text-3xl ">Mobile App and Website Developer</h3>
            <p className="text-sm py-4 text-gray-400 leading-5 max-w-xl mx-auto ">Presently, I'm an undergraduate student at the University of Westminster in Software Engineering and passionate about software development. I'm interested in learning new IT technologies and searching for an internship to enhance my professional network and knowledge.</p>
          </div>

          {/* Socials */}
          <div className="cursor-pointer text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://github.com/manujaguruge123">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/manuja-guruge-94a19b276/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/mr._manu_03/">
              <AiFillInstagram />
            </a>
          </div>

          {/* Profile */}

          <div className="m-auto relative bg-gradient-to-b from-yellow-100 w-80 h-80 p-5 mt-20 rounded-full">
            <Image
              src={profileImage}
              alt="Manuja Guruge"
              // layout="responsive"
              // objectFit="cover"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>

        </section>

        {/* Services */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">Services I Offer</h2>
            <p className="text-sm py-2 text-gray-400 leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rerum quibusdam aspernatur eveniet voluptatum minima, sequi porro excepturi? Ad reprehenderit repellat distinctio cupiditate eius voluptate!
            </p>
          </div>

          {/* Services Cards */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* Card 1 */}

            <div className="bg-yellow-300 p-5 text-center shadow-sm my-10 rounded-xl">
              <Image
                src={graphisDesign}
                alt="Grapic Design"
                width={100}
                height={100}
                className="inline"
              />
              <h2 className="text-2xl font-bold">Graphic Designing</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, fugiat cumque nobis ipsam esse ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, recusandae.</p>
            </div>


            {/* Card 2 */}

            <div className="bg-yellow-300 p-5 text-center shadow-sm my-10 rounded-xl">
              <Image
                src={codeImage}
                alt="Grapic Design"
                width={100}
                height={100}
                className="inline"
              />
              <h2 className="text-2xl font-bold">Application Development</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, fugiat cumque nobis ipsam esse ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, recusandae.</p>
            </div>


            {/* Card 3 */}

            <div className="bg-yellow-300 p-5 text-center shadow-sm my-10 rounded-xl">
              <Image
                src={graphisDesign}
                alt="Grapic Design"
                width={100}
                height={100}
                className="inline"
              />
              <h2 className="text-2xl font-bold">Web Development</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, fugiat cumque nobis ipsam esse ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, recusandae.</p>
            </div>


          </div>
        </section>

        {/* My Work */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60 dark:text-white">Portfolio</h2>
            <p className="text-sm py-2 text-gray-400 leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rerum quibusdam aspernatur eveniet voluptatum minima, sequi porro excepturi? Ad reprehenderit repellat distinctio cupiditate eius voluptate!
            </p>
          </div>
          {/* Images of projects */}
          <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">

              <Image
                src={project1}
                alt="Project 1"
                //layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>

            <div className="basis-1/3 flex-1">

              <Image
                src={project2}
                alt="Project 2"
                //layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>

            <div className="basis-1/3 flex-1">

              <Image
                src={project3}
                alt="Project 3"
                // layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>

            <div className="basis-1/3 flex-1">

              <Image
                src={project4}
                alt="Project 4"
                //layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>

            <div className="basis-1/3 flex-1">

              <Image
                src={project5}
                alt="Project 5"
                //layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>

            <div className="basis-1/3 flex-1">

              <Image
                src={project1}
                alt="Project 6"
                //layout="responsive"
                className="rounded-lg obejct-cover"
              />

            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 ">
          <div>
            <h3 className="text-base mb-2"> Contact me for more Details</h3>
            <p className="opacity-40">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, tenetur dolor soluta quae veritatis ullam odio voluptatum. Amet, minus voluptas?</p>
            <p className="opacity-60 ">Copyright © 2022 Manuja</p>
          </div>
          <div className="cursor-pointer text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://github.com/manujaguruge123">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/manuja-guruge-94a19b276/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/mr._manu_03/">
              <AiFillInstagram />
            </a>
          </div>
        </footer>
      </main>
    </div>
      );
}
