
'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Regalo() {
    const [open,setOpen]=useState(true)
    const [premio,setPremio]=useState('')
    const [roled,setRoled]=useState(0)
    const premios=['Par de besos y abrazos','Chocolates varios','Noche de pasión','10$ En efectivo']

    const girar=()=>{
        let contador = 0;
        let bucle= 0;
        if(localStorage?.getItem('premio')){
            setPremio(localStorage?.getItem('premio'))
        }else{
          if(bucle < 3){
        const inter= setInterval(()=>{
            if (contador === 4) {
            setRoled(0)
            contador=0
            bucle++
            }else{
            contador++
            setRoled(contador)
            }
            if(bucle>3){
                clearInterval(inter)
                let randon=premios[Math.floor(Math.random() * premios.length)]
                setPremio(randon)
                localStorage.setItem('premio', randon);
                setOpen(true)
            }
            
            
          },500) 
        
        }  
        }
        
        
    }

 

  return (
    <>
<section className="relative w-full h-min-[100vh] h-fit flex flex-col items-center justify-center p-2 lg:p-40 gap-10">
    <div className='w-full h-3/4 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center gap-10 p-4'>
    <h3 className='text-4xl font-bold text-red-700 text-center'> Obten un regalo al azar </h3>
        <div className=' w-full h-fit lg:h-full  flex flex-wrap gap-10 items-center justify-center gap-4'>
        {
        premio === ''?
        
        premios.map((e, index)=>{
            return (
                <div key={index} className={` w-fit h-fit p-4 rounded-lg ${index===roled? ' bg-red-200': ' bg-white'} ` }>
                   <Image key={index} src={'/regaloCerrado.svg'} alt='regalo' style={{filter:"drop-shadow(0px 10px 5px rgb(0 0 0 / 0.4))"}} width={100} height={100} className={` w-[80px] h-[80px]` } />
           
                </div>
             )
        })
        :
        <div  className={`relative w-fit h-fit p-4 rounded-lg ` }>
                    <span style={{filter:"drop-shadow(0px 10px 5px rgb(0 0 0 / 0.4))"}} className='absolute top-[35%] left-[10%] z-30 bg-white text-xd font-sans text-red-800 p-4 w-fit h-fit rounded-xl text-xl font-bold'>{localStorage.getItem('premio')}</span>
                    <Image src={'/regaloAbierto.svg'} alt='regalo' style={{filter:"drop-shadow(0px 10px 5px rgb(0 0 0 / 0.4))"}} width={100} height={100} className={` w-[300px] h-[300px]` } />
            
        </div>   
        }
        </div> 
    <button onClick={()=>girar()} className='font-sans w-fit h-fit p-4 py-2 rounded-xl bg-red-600 text-white text-2xl'>{premio!== '' ?'Reclama tu premio':'Girar'}</button>
    </div>
    
   
  </section>
   
  </>
  )
}

export default Regalo