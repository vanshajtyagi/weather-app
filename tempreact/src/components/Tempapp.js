import React ,{useEffect,useState} from 'react';
import "./css/style.css";
const Tempapp =()=>{
    const [city,setCity]=useState('');//----error
    const [search,setSearch]=useState('');
    useEffect(() => {
       const fetchApi= async ()=>{
           const url=`https://api.weatherapi.com/v1/forecast.json?key=f1c7ed51f8e348148f7181211211206&q=${search}&days=1&aqi=no&alerts=no
           `;
           const response = await fetch(url,{
               headers: {'method':'GET','Content-Type':'application/json'}
           });
           //console.log(response);
           const resJson = await response.json();
            setCity(resJson.current);
       }
        fetchApi(); 
    },[search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" placeholder="Enter the place" onChange={ (event) => {setSearch(event.target.value)
                    } } value ={search}
                    />
                </div>
                {!city?(                                  //ternary operator.
                    <p className="errorMsg">No Data found</p>
                ) :( <><div className="info">
                        <h2 className="location" ><i className="fas fa-street-view"></i>{search}</h2>
                        <h1 className="temp">{city.temp_c} °C</h1>

                        { (city.temp_c >= city.feelslike_c)?<h3 className="tempmin_max">Min:{city.feelslike_c}°C | Max:{city.temp_c}°C</h3>
                        :<h3 className="tempmin_max">Min:{city.temp_c}°C | Max:{city.feelslike_c}</h3>
                        }

                    
                       </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>
                    )
                }
                
            </div>
        </>
    )
}
export default Tempapp;