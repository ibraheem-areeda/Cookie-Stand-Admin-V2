'use client';
import Head from "next/head"
import { useState } from "react"
import Header from "./Header"
import Main from "./Main";
import Footer from "./Footer";






export default function CookieStandAdmin() {

  const [location, setlocation] = useState('')
  const [min_cus, setmin_cus] = useState('')
  const [max_cus, setmax_cus] = useState('')
  const [avg_co, setavg_co] = useState('')





  function submitHandler(event){
    event.preventDefault()
    setlocation(event.target.location.value)
    setmin_cus(event.target.min_cus.value)
    setmax_cus(event.target.max_cus.value)
    setavg_co(event.target.avg_co.value)

  }


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body className=" flex flex-col min-h-screen">
        <Header />
        <Main handler={submitHandler} location={location} min_cus={min_cus} max_cus={max_cus} avg_co={avg_co}/>
      </body >
        <Footer />

    </>
  )


}




