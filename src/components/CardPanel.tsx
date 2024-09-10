'use client'

import { useReducer } from "react"
import Card from "@/components/Card"

export default function CardPanel() {
  const reducer = (ratingMap:Map<string,number>,action:{type:string,hospitalName:string,rating:number})=>{
    switch(action.type) {
      case 'add': {
        return new Map(ratingMap.set(action.hospitalName,action.rating))
      }
      case 'remove':{
        const updatedMap = new Map(ratingMap);
        updatedMap.delete(action.hospitalName);
        return updatedMap;
      }
      default: return ratingMap
    }
  }

  const initialRatings = new Map<string, number>([
    ["Chulalongkorn Hospital", 0],
    ["Rajavithi Hospital", 0],
    ["Thammasat University Hospital", 0]
  ]);

  const [ratingMap,dispatchRating] = useReducer(reducer,initialRatings)

  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <Card imgSrc="/img/chula1.jpg" hospitalName="Chulalongkorn Hospital"
        onRating={(hospitalName:string,value:number)=>dispatchRating({type:'add',hospitalName:hospitalName,rating:value})}></Card>
        <Card imgSrc="/img/rajavithi.jpg" hospitalName="Rajavithi Hospital"
        onRating={(hospitalName:string,value:number)=>dispatchRating({type:'add',hospitalName:hospitalName,rating:value})}></Card>
        <Card imgSrc="/img/thammasat.jpg" hospitalName="Thammasat University Hospital"
        onRating={(hospitalName:string,value:number)=>dispatchRating({type:'add',hospitalName:hospitalName,rating:value})}></Card>
      </div>
    </div>
    <div>
      <div className="w-full text-xl font-medium">Hospital List with Ratings : {ratingMap.size}</div>
      {Array.from(ratingMap).map(([hospitalName, rating]) => (
        <div key={hospitalName} data-testid={hospitalName}
          onClick={()=>{dispatchRating({type:'remove',hospitalName:hospitalName,rating:rating})}}>
          {hospitalName} : {rating}
        </div>
      ))}
   
    </div>
    </div>
  )
}

