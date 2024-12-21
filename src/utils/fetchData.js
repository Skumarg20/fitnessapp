//connection with rapid api

 export const exerciseOptions = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3d96f990cmsh0f954c61bd86593p14e556jsn1bdbf13d4e8d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }; 
  

 export const fetchData= async(url,options) =>{
    const response = await fetch(url,options);
    const data= await response.json();
    return data;
 }