import Image from "next/image";
import Heart from "./icons/Heart";
import ArrowDown from "./icons/ArrowDown";
import Regalo from "./components/Regalo";

export default function Home() {
  return (
    <div className="relative flex flex-col p-10  md:p-20 items-center w-full h-fit bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-white  via-pink-100  to-pink-100 fixed brightness-100 saturate-150 overflow-hidden">
    
    <Image src={'/rosa.svg'} alt="rosa" width={100} height={100} style={{filter:"drop-shadow(0px 10px 5px rgb(0 0 0 / 0.4))"}} className="absolute z-10 -top-[35vw] left-[10vw] w-[80vw] h-[80vw] md:-top-[25vw] md:left-[30vw] md:w-[40vw] md:h-[40vw] opacity-80 "/>
    <Image src={'/adornos.svg'} alt="rosa" width={100} height={100} className="absolute  -right-1/4 w-full h-full top-0  opacity-10 "/>
    <Image src={'/adornos.svg'} alt="rosa" width={100} height={100}  className="absolute   -left-1/4  w-full h-full top-0  opacity-10 "/>
    
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center ">
     
      <div className="relative p-10 py-20 md:p-40  border-8 border-white border-dashed w-fit h-fit flex flex-col items-center justify-center ">
      <Image src={'/rosas2.svg'} alt="rosas" width={100} height={100} className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[70%] -left-[80px]  md:-left-[150px] -rotate-45"/>
      <Image src={'/rosas1.svg'} alt="rosas" width={100} height={100} className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bottom-[70%] -right-[100px] md:-right-[150px] rotate-45"/>
      
        <h1 className="text-7xl font-bold text-red-700 text-center">Feliz cumpleaños mi niña preciosa! </h1>
      <Heart className="w-[35px] h-[35px] text-red-700" />
      </div>
      
    </section>
    <section className="relative w-full h-min-[100vh] h-fit flex flex-col md:flex-row items-center justify-center p-10 ">
    <p className="text-3xl text-red-700 font-bold">
      <span className="text-4xl">Feliz cumpleaños</span> mi minion favorito jajaja{'<3'}, espero que sigas cumpliendo muchos años, que tengas mucha <span className="text-4xl">Salud, Vida y Prosperidad</span>. Pido a dios que nos de un largo tiempo juntos, asi como tambien que te ayude a cumplir todas tus metas y deseos, Te quiero mucho bby!!<br/> <span className="text-2xl">Se que el nos va a permitir tener nuestro ranchito de amor en bocono jajajaj </span>   
    </p>
    <Image src={'/joda.svg'} alt="rosas" width={100} height={100} className=" w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] "/>
      
    </section>
    <Regalo/>
    <div className="fixed lg:left-[47vw] left-[40vw] top-[90vh] flex flex-col gap-2 items-center">
      <span className="text-red-700 text-2xl font-bold">Continua...</span>
      <ArrowDown className=" w-[8vw] h-[8vw] lg:w-[2vw] lg:h-[2vw] animate-bounce text-red-700 "/>
    </div>
    
    </div>
  );
}
