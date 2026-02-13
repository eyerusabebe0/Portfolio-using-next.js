   
      export default function About(){
        return(
      <section className="min-h-screen  text-center py-24 px-6 max-w-10xl mx-auto bg-zinc-900  ">
        <h3 className="text-3xl text-center font-semibold  text-white font-bold underline decoration-indigo-400 decoration-4 underline-offset-8 mb-14 ">About Me</h3>

        
     

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center">
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
      );
      }