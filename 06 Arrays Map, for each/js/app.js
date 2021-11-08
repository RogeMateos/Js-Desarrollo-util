

        const facturas = [
          {
              precio:23,
              cantidad:1,          //A
          },
          {
              precio:19,           //B
              cantidad:2, 
          },
          {
              precio:14,
              cantidad:4, 
          },
          {
              precio:22,
              cantidad:1, 
          }
          ]
          
  
          const total =  facturas.map(i => i.precio * i.cantidad).filter(i => i > 30) 
      
          console.log(total);







