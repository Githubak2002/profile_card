import React from "react";

const links = [
    {
        name:"Portfolio",
        url:"https://githubak2002.github.io/akportfolio"
    },
    {
        name:"LinkedIn",
        url:"https://www.linkedin.com/in/anuraglohar"
    },
    {
        name:"GitHub",
        url:"https://github.com/Githubak2002"
    },
    {
        name:"Resume",
        url:"https://drive.google.com/file/d/1poVfS2VI5X7n5i50RBdLuL3E-i6PMqrl/view?usp=sharing"
    }
]
const Info = () => {
  return (
    <main className="text-xl max-w-[620px] mt-20 mx-auto flex flex-col px-6 sm:px-10 text-semibold gap-y-4">

    <ul className="mb-4 flex flex-col gap-y-2">
    <h2 className=" text-2xl font-bold">All links</h2>
        {
            links.map((link) => (
                <li className="hover:scale-125 transition-all w-fit">
                    <a href={link.url} target="blank">{link.name} →</a>
                </li>
            ))
        }
    </ul>

    <h2 className="hover:scale-125 transition-all w-fit">
        <a target="blank" href="https://cdn.discordapp.com/attachments/667463013443305512/1175943918941130833/Display_Profile.jpg"
        > API Provided (UI) → </a>
    </h2>

      <h2> <span className="font-bold">NOTE - </span> Page is fully responsive.</h2>
      <h2>Command used to get react template faster → <br />
        npm create vite@latest my-project -- --template react
      </h2>

      <h2> PROFILE IMG → 
        The webpage design is responsive, ensuring that any profile images
        seamlessly fit without disrupting the website's responsiveness.
        Regardless of the image size or dimensions, the layout adjusts smoothly
        to accommodate the profile images without compromising the overall
        design.
      </h2>

     
    </main>
  );
};

export default Info;
