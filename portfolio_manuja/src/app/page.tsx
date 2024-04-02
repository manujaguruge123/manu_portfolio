import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import profileImage from "../../public/manuja.jpg";
import graphisDesign from "../../public/design.png";
import codeImage from "../../public/code.png";

export default function Home() {
  return (
    <main className="font-poppins bg-yellow-50 min-h-screen px-10">

      {/* nav and hero */}
      <section>
        {/* nav */}
        <nav className="py-10 flex justify-between">
          <h1 className="text-sm ">Developed by Manuja Guruge</h1>
          <ul className="flex items-center">
            {/* icon */}
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-xl mx-5 " />
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
            <AiFillGithub  />
          </a>
          <a href="https://www.linkedin.com/in/manuja-guruge-94a19b276/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/mr._manu_03/">
            <AiFillInstagram/>
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
    </main>
  );
}
