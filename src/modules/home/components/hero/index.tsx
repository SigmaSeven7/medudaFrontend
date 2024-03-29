import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import HeroProducts from "../hero-products";
import heroBanner from "../../../../../public/PixelsJourney.png";
import MySwiperComponent from "../hero-carousel";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center h-[75vh] gap-4 pr-2 pl-2 mt-4">
      <div className="h-full flex-grow flex-shrink w-full md:w-4/5 border-b border-ui-border-base relative bg-ui-bg-subtle flex justify-center rounded-lg shadow-xl" >
       {/* <img src={heroBanner.src} alt="Background" className="absolute w-full h-full z-0 rounded-lg object-fit" />  */}
      <MySwiperComponent/>
        {/* <div className="relative w-3/4 inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
       
           <span className="z-10 relative">
            <Heading level="h1" className="text-3xl leading-10 text-ui-fg-base font-normal">
              Pixels Journey
            </Heading>
            <Heading level="h2" className="text-3xl leading-10 text-ui-fg-subtle font-normal">
            Where Every Pixel Tells a Story
            </Heading>
            <a className="mt-4" href="https://github.com/medusajs/nextjs-starter-medusa" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                View on GitHub
                <Github />
              </Button>
            </a>
          </span> 
        </div> */}
      </div>
      <div className="w-full sm:w-auto pl-4 h-full flex overflow-hidden flex-col float-right gap-2 shadow-xl rounded-lg">
          <HeroProducts />
        </div>
    </div>
  );
};

export default Hero;
