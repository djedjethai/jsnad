'use strict'

const { spawn, exec, execSync } = require('child_process')

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  
  // OK
  // return spawn(process.argv[0], ['child.js'],
  //         {
  //       	  env: {MY_ENV_VAR: 'is set'}
  //         }
  // )

  // OK
  // return exec(`${process.argv[0]} 'child.js'`,
  //         {
  //       	  env: {MY_ENV_VAR: 'is set'}
  //         }
  // )

  // OK	
  return execSync(`${process.argv[0]} 'child.js'`,
          {
        	  env: {MY_ENV_VAR: 'is set'}
          }
  )


  // OK
  // return require('child_process').spawnSync(process.argv[0], ['child.js'], {env:{MY_ENV_VAR:'is set'}})
}

module.exports = exercise
