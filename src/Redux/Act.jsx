const fetchData=(ele)=>async(dispatch)=>{
 try{
    await fetch("https://spotify23.p.rapidapi.com/search/?q=${q}&type=multi",
     {
        headers: {
        'X-RapidAPI-Key': '6f4ee5128dmshbbaddf1a7bee7a3p1f2bcfjsnecbca5a3c680',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    })
    const data= await res.json();
    dispatch({type:"Success",payload:data.playlists.items.map((ele)=>{
        ele.data.name
    })})
 }
 catch{
    dispatch({type:"Error",error})
 }
}