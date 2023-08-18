'use client';
import Head from "next/head"
import { useState } from "react"
// import {replies} from '@/data'





export default function Home() {

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

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-300 text-gray-50">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
    </header>

  )
}

function Main(props) {
  return (
    <>
    <form className="m-auto  rounded-2xl mt-8 bg-blue-500 w-3/5 p-4" onSubmit={props.handler}>
    <h1 className="text-center text-4xl ">Create Cookie Stand</h1>
    <label className="pr-1">Location</label>
    <input name="location" className=" mt-8 pr-1 rounded-2xl  w-10/12"></input>

    <section className="flex flex-justfy flex-wrap ">
      <section className="flex flex-col mr-2" >
        <label className="mt-6">minimum customers per hour</label>
        <input name="min_cus" className="  rounded-2xl  "></input>
      </section>
      <section className="flex flex-col mr-2">
        <label className="mt-6">maximum customers per hour</label>
        <input name="max_cus" className="  rounded-2xl  "></input>
      </section>
      <section className="flex flex-col mr-2">
        <label className="mt-6">average cookies per sale</label>
        <input name="avg_co" className="  rounded-2xl  "></input>
      </section>
      <section className="flex mt-8">

        <button type="submit" className="bg-blue-100 hover:bg-blue-600   px-4 rounded shadow">
          Submit
        </button>
      </section>
    </section>
  </form>
  <Data location={props.location} min_cus={props.min_cus} max_cus={props.max_cus} avg_co={props.avg_co} />
  </>
  )
}

function Footer (){
  return(

    <footer className="p-4 mt-8 bg-blue-300 text-gray-50" >
    &copy; ASAC 2023 and Ibraheem Areeda
  </footer>
  )
}

function Data(props) {
  if (props.location == ""){
    return <h2 className="text-center " >report table coming soon ... </h2>
  }
  else{

    return(
      <>
  <h2 className="text-center ">location : {props.location} minimum customers per hour : {props.min_cus} maximum customers per hour : {props.max_cus} average cookies per sale : {props.avg_co}</h2>
  </>
  )
}
  
}