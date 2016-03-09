
React = null
ReactDOM = null

try{
  React = require('react')
  ReactDOM = require('react-dom')
}catch(e){
  if(Package['react-runtime']){
    React = Package['react-runtime'].React
    ReactDOM = Package['react-runtime'].ReactDOM
  }else{
    throw new Error('Missing package.  Include one of \n meteor add react-runtime \n npm install --save react react-dom')
  }
}

