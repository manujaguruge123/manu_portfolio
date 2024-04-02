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

        
        
      </section>
    </main>
  );
}
