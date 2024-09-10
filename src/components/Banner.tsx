import Image from "next/image";

export default function Banner() {
     return (
          <div className="relative h-96">
               <Image
                    src="/img/hero-vaccine.jpg" // Replace with your image path
                    alt="Banner Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="z-0"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500 opacity-25"></div>
               <div className="relative z-10 flex items-center justify-center h-full text-center px-6 md:px-24">
                    <div className="text-white px-4 md:px-8">
                         <h1 className="text-4xl md:text-6xl font-bold mb-4">Vaccine Service Center</h1>
                         <p className="text-sm md:text-lg italic">Empowering Health, Safeguarding Lives—Your Trusted Vaccine Center for Comprehensive Immunization Services. Professional Care for a Healthier Future.</p>
                    </div>
               </div>
          </div>

     )
}

