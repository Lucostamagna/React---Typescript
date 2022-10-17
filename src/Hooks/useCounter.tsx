import React from 'react'
import { useState } from 'react';

const useCounter = (inicial: number =10) => {
    const [valor, setValor]= useState(10);

    const acumular = (numero: number)=>{
     setValor(valor + numero);
    }


    return {
        valor,
        acumular
    }
}

export default useCounter

//un hooks es una funcion