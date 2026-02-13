"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [show, setShow] = useState(false);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

   
    if (!res.ok) {
      alert(result.error || "Failed to send message");
      return;
    }

    
    alert("Message sent successfully 🚀");

   
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
}

  return (
    <main className="bg-zinc-950 text-zinc-500 pt-24">


      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-3 h-auto sm:h-screen bg-[url('https://i.pinimg.com/736x/c8/f7/bd/c8f7bdd3e52c315dafb9641f92672498.jpg')] bg-cover bg-center bg-no-repeat">

       
        <section className="relative overflow-hidden py-10 px-6 text-center sm:text-left sm:w-2/3 w-full mr-2 ml-10">
          <div className="relative z-10 max-w-6xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-400 tracking-tight mt-10 sm:mt-24">
              <span className="text-zinc-50">Eyerusalem</span>
              <span className="text-indigo-400"> Abebe</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-zinc-400 mb-6 mt-4">
              Aspiring Full-Stack Web Developer
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto sm:mx-0 mb-2 mt-2">
              Computer Science student building modern, responsive web applications with React and Next.js.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
              Passionate about creating efficient, scalable web solutions while pursuing Computer Science at Bahir Dar University.
            </p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-6 sm:mt-10 relative z-20 mb-10">
              <button
                className="bg-zinc-800 px-6 py-3 text-xl rounded-2xl text-zinc-100 cursor-pointer 
                           hover:bg-indigo-400 hover:text-zinc-50 hover:scale-105 
                           transition-all duration-300 transform text-center" onClick={()=>setShow(!show)}>
                Explore
              </button>
            </div>
          </div>
        </section>

        <section className="flex justify-center mb-8">
         <img
  src="https://i.pinimg.com/736x/19/e4/a2/19e4a2cad8d43690a70eb971740d75b2.jpg"
  alt="my photo"
  className="w-70 h-70 mr-10 rounded-full object-cover border-2 border-indigo-400/50 shadow-[0_0_20px_rgba(129,140,248,0.5)] "
/>

          
        </section>

      </div>


       {show &&(

      <section className={`py-24 px-6 max-w-3xl  mx-auto bg-transparent rounded-xl animate-fade-in
  transform transition-all duration-500
`}>
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-10 border border-zinc-700 shadow-md 
                          transform transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-6 text-zinc-100 text-center">Education</h3>
            <p className="text-zinc-400 text-center text-lg">B.Sc. in Computer Science</p>
            <p className="text-zinc-500 text-center mt-2">
              Bahir Dar University · Expected 2027
            </p>
          </div>
        </div>
       
        
      </section>
)}

{show &&(
      <section className={`text-center py-24 px-6 max-w-10xl mx-auto bg-zinc-900 animate-fade-in`} >
        <h3 className="text-3xl text-center font-semibold  text-white font-bold underline decoration-indigo-400 decoration-4 underline-offset-8 mb-14 ">About Me</h3>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-transparent max-w-md mx-auto border border-indigo-400 p-10 rounded-xl shadow text-center hover:translate-y-2 transform transition-all duration-300 ease-out ">
                   <h2 className="text-xl font-semibold mb-4 text-white"> <span className="mr-1">✨</span> Who I am</h2>
        <p className="text-zinc-300 leading-relaxed">
          I am a 3rd-year Computer Science student at Bahir Dar University. 
          <br />

          I learn best by doing — turning ideas into real projects. 
         <br />
          I care deeply about writing clear code, creating intuitive layouts, and continuously improving my skills. 
        </p>
</div>


<div className="bg-transparent max-w-md mx-auto border border-indigo-400 p-10 rounded-xl shadow-md text-center hover:translate-y-2 transform transition-all duration-300 ease-out">
  <h2 className="text-xl font-semibold mb-4 text-white"><span className="mr-1">❤️</span> What I Love</h2>
        <p className="text-zinc-300 leading-relaxed">
           I love clean layouts, clear design, and simple user experiences that feel natural and easy to use.
              <br />
            I enjoy learning new programming languages, exploring modern tools. 
           <br />
            I am a hardworking and focused person, but I also value balance. 
        </p>
        </div>

        <div className="bg-transparent max-w-md mx-auto border border-indigo-400 p-10 rounded-xl shadow-md text-center hover:translate-y-2 transform transition-all duration-300 ease-out">
          <h2 className="text-xl font-semibold mb-4 text-white"><span className="mr-1">☀️</span> Sunlight side</h2>
          <p className="text-zinc-300 leading-relaxed">I am naturally curious, disciplined, and optimistic about growth.
            <br />
            I enjoy solving problems and learning from mistakes. 
             <br />
           I try to bring clarity, patience, and positive energy into everything I do.
            </p>
        </div>
        </div>
      </section>
)}

{show &&(
<section className={`py-10 px-6 text-center w-full `}>
  <div className="max-w-md mx-auto">
    <h3 className="text-3xl font-semibold mb-6 text-zinc-100">Skills</h3>
    
    <div className="flex flex-col items-center gap-4">
      {[
        { name: "HTML & CSS", color: "bg-red-500 text-white" },
        { name: "JavaScript (ES6+)", color: "bg-yellow-400 text-black" },
        { name: "React", color: "bg-blue-500 text-white" },
        { name: "Next.js", color: "bg-black text-white" },
        { name: "Tailwind CSS", color: "bg-sky-500 text-white" },
        { name: "Git & GitHub", color: "bg-gray-800 text-white" },
      ].map((skill, index) => (
        <div
          key={index}
          className={`${skill.color} rounded-md px-4 py-2 w-64 text-center font-medium transform transition-all duration-500 hover:scale-105`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  </div>
</section>

)}




    </main>
  );
}
