// if not exist, create path and file
// if(!fs.exists("views")){
fs.access('views', fs.constants.F_OK, (err) => {
	if(err) {
    		fs.mkdir("views", (err)=>{

    		    if(err) {
    		    	consolle.error(err)
    		    	return;
    		    }

    		    fs.writeFile("./views/new.html", 'this is a new dir and data', (err)=>{

    		        if (err) return err;

    		        console.log('Directory and File saved!')
    		    })
    		})
	}
	else {
		console.error('the file exist already')
	}
})


// 
const fd = await fs.open('/opt/app/tmp/token.txt', 'w', (err, fd) => {
	fs.appendFile(fd, token, 'utf8', (err) => {
	    fs.close(fd, (err) => {
	     	if (err) throw Error('err in close: ', err)
	    })
	    if(err) throw Error('err in append: ', err)
	})
})

const fs =require('fs').promises
const path = require('path')

async function as() {

	// resolve relative normalize format
	const file = await fs.readFile(__filename, 'utf8')
	await fs.writeFile('out.txt', file.toUpperCase(), {flag:'a'})
	
	console.log(await fs.readFile('out.txt', 'utf8'))
	
	await fs.chmod(path.join(__dirname,'out.txt'), 0o000)
	
	try{
		console.log(await fs.readFile('out.txt', 'utf8'))
	} catch(e) {
		console.log('catched err: ', e)
	}
	
	await fs.chmod(path.join(__dirname,'out.txt'), 0o777)
}

as()
