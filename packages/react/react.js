
if(Package['alt:react-npm']){
  React = Package['alt:react-npm'].React
  ReactDOM = Package['alt:react-npm'].ReactDOM
}else if(Package['react-runtime']){
  React = Package['react-runtime'].React
  ReactDOM = Package['react-runtime'].ReactDOM
}else{
  throw new Error('Missing package.  Include one of \n meteor add react-runtime \n meteor add alt:react-npm')
}

