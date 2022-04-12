import React, {useState} from 'react'



export const City = () => {
const [cities, setCities] = useState(['delhi','haryana', 'punjab']);
//  console.log(cities)
const UpdateCities = (e) => {
    if(e.key === "Enter"){
      let city = e.target.value;
      setCities([city, ...cities]);
      e.target.value = "";
     }
    };
    const renderCities = () => {
        return (
          <ul>
            {cities.map(city => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        );
      };

    

  return (
    <div>
        <input type="text" placeholder="Enter City" onKeyUp={UpdateCities} style={{marginLeft:"30px"}} />
        <div>{renderCities()}</div>
    </div>
  )
}
