const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

async function processLineByLine() {
            try{                   
    
                    async function run() {          
                            const rs = createReadStream(__filename)
                            // otherwise createReadStream() err are not handled
                            rs.on('error', () => {          
                                console.log('HandleReadStreanErr')
                            })     
    
                            const rl = createInterface({    
                              input: rs,                      
                              crlfDelay: Infinity             
                            })
                            
                            return new Promise((resolve, reject) => {
                            rl.on('line', (line) => {       
                                 try {                           
                                    throw new Error("error while attempting to process json.")
                                    resolve(console.log(line.toString()))
    
                                 } catch(e) {                    
                                    reject(e)                       
                                 }                               
    
                            })
                            })
                            
                            // handle specificaly the rl stream error
                            rl.on('error', () => console.log('errr rl stream'))
      
    
                            await once(rl, 'close');        
                            console.log('File processed.'); 
                    }
                    // async the overall execution for the catch() to wait
                    await run()
            
        } catch(e) {
                    // only rejected err reach here or the one happening synchronously
                    console.error('eeeeeee')        
        }
    }
processLineByLine()

// or

async function processLineByLine() {
        try{

           async function run() {

            return new Promise(async (resolve, reject) => {

                const rs = createReadStream('khg.jk')
                rs.on('error', () => {
                    reject('HandleReadStreanErr')
                })

                const rl = createInterface({
                  input: rs,
                  crlfDelay: Infinity
                })

                rl.on('line', (line) => {
                     try {
                        // uncomment following err
                        // throw new Error("error while attempting to process json.")
                        resolve(console.log(line.toString()))

                     } catch(e) {
                        reject(e)
                     }

                })

                rl.on('error', () => reject('errr rl stream'))


                await once(rl, 'close');
                console.log('File processed.');

            })
           }
           await run()

           } catch(e) {
                console.error('set error handler: ', e)
           }
   }
   processLineByLine()
