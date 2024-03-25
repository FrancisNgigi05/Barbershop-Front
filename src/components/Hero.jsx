

import img from "../assets/img/heroNew.png";


const Hero = () => {
  return (
    <div className=" h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      {/* content section  */}
      <div className=" w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className=" text-4xl lg:text-7xl font-bold leading-tight">
          Look <span className="text-yellow-500">Your Best</span> Feel
          Your BEST
        </h1>
        <p className=" text-sm lg:text-base">

          "Welcome to our barbershop, where style meets tradition. Experience expert haircuts, beard trims, and grooming services in a relaxed atmosphere. Step in, sit back, and leave looking your best. Book your appointment now for a cut above the rest!"
        </p>


      </div>

      {/* img section  */}
      <div className=" mt-14">
        <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
