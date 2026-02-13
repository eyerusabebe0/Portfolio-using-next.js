export default function Skill(){
  return(
<section className="min-h-screen place-items-center py-28 px-6 text-center ">
        <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-16 text-center text-zinc-100">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-6">
        {["HTML & CSS",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Git & GitHub",].map((skills,index)=>(
          <div key={index} className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-6 text-center
                     text-zinc-300 font-medium
                     hover:bg-zinc-800 hover:scale-[1.03]
                     transition">
            {skills}
          </div>
        ))}
        </div>
        </div>
      </section>
  );
}