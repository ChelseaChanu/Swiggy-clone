import { RESTAURANTS_API_URL } from "../utils/constants";
import {useState, useEffect, createContext} from "react"

export const DataContext = createContext();

export const DataContextProvider = ({children})=>{

  const[userName, setUserName] = useState("");
  const[loginStatus, setLoginStatus] = useState("Login");
  const[data, setData] = useState([]);
  const[filteredRestau, setFilteresRestau] = useState([]);
  const[apiAddress, setApiAddress] = useState("Koramangala, Bengaluru, Karnataka, India");
  const[latitude,setLatitude] = useState("12.9351929");
  const[longitude,setLongitude] = useState("77.62448069999999");

  const updateName = (name)=>{
    setUserName(name);
  }

  const updateLoginStatus = (newStatus)=>{
    setLoginStatus(newStatus);
  }

  useEffect(()=>{
    fetchData();
  },[latitude, longitude]);

  const fetchData = async ()=>{
    try{
      const data = await fetch(`${RESTAURANTS_API_URL}lat=${latitude}&lng=${longitude}`);
      
      if(!data.ok){
        throw new Error(`API call failed: ${data.status}`);
      }
      const json = await data.json();
      setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteresRestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error){
      console.error("Fetching data failed:", error.message);
    }
  };
  const handleFilter = (filteredRestau)=>{
    setFilteresRestau(filteredRestau);
  };

  return(
    <DataContext.Provider 
    value={{
      data, filteredRestau, handleFilter, userName, updateName, loginStatus, 
      updateLoginStatus,setLatitude, setLongitude,latitude,longitude, apiAddress,
      setApiAddress
    }}>
      {children}
    </DataContext.Provider>
  )
};