const iniS={
    videos:[],
    error:null,
}
const Areducer=(storeData=iniS,action)=>{

    switch(action.type){
        case "Success":
            return {...storeData,videos:action.payload,error:null}
        case "Error":
            return {...storeData,videos:[],error:action.error}
        default:
            return storeData
    }
//  return storeData
}
export default Areducer