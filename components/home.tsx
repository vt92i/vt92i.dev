"use client";

const Home = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-stone-900/25 p-8">
      <div className="flex items-center text-justify text-6xl leading-relaxed text-white/90">
        <p>
          <span className="animate-pulse border-b-2 hover:animate-none">Fila</span> is currently a{" "}
          <span className="animate-pulse border-b-2 hover:animate-none">
            Computer Science Student
          </span>{" "}
          at the{" "}
          <span className="animate-pulse border-b-2 hover:animate-none">
            University of Atma Jaya Yogyakarta
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
