import React from 'react';
import useFetch from "../Hooks/useFetch.js";
import IsLoading from "./IsLoading.jsx";

const LocationList = () => {
    const {data, isLoading}=useFetch('http://localhost:5000/hotels')
    console.log(data)
    console.log(isLoading)
    return (
        <div className={'LocationList'}>
            {isLoading ? <IsLoading/>: null}
            {data.map((item)=>(
                <Location__card key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default LocationList;


function Location__card ({item}) {
    console.log(item)
    return (
        <div className="Location__card">
            <img src={item.picture_url.url} alt={item.name}/>
            <div className="card__description">
                <p>{item.id} </p>
                <p>{item.smart-location} </p>
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
        </div>
    )
}