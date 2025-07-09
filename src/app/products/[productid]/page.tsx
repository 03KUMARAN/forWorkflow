'use client'
import {  GetServerSidePropsContext } from "next"


 
import { useRouter } from "next/navigation"
import { useRouter } from "next/router"

export default function Prodid({params}:{params:{productid:string}}){
  
    return(
        <h1>{params.productid}</h1>
    )
}

