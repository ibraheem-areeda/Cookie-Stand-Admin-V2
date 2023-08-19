export default function Data(props) {
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