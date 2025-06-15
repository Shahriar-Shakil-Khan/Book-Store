const getStoredBook=()=>{
     const storedBookSTR=localStorage.getItem("readList");
     if(storedBookSTR){
        const storedBookData=JSON.parse(storedBookSTR)
        return storedBookData;
     }else{
        return [];
     }

}

const addToStoredDb =(id)=>{
     
     const storedBookData=getStoredBook();

     if(storedBookData.includes(id)){
        alert("Already Exist");
     }
     else{
           storedBookData.push(id);
         
            
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
     }

}
export{addToStoredDb}