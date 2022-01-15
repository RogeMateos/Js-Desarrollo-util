
const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);



const catchAndPrint = (err) => {
  console.log(err);
  return 1;

}
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              resolve(req.responseText);
            }
            else{
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};


 const call = async (url)  =>{

let response,response2;

   try  {
     response = await request (url);
  } catch (error){
   catchAndPrint (error);
   //response = null;
   response = 7;
  }

  try {
     response2 = await request (url);
  } catch (error){
    catchAndPrint (error);
    response2 = 8;
   }
     const n1 =toNumber (response);
  
     const n2 =toNumber (response2);
  
     print(n1 *n2);

     catchAndPrint(error);
 

};

call('./js/numer2o.txt');//56

