import {React, useContext} from 'react'
import {context} from './App'

const Home = () => {
  const {dispatch} = useContext(context);
  dispatch({type:"USER",payload:true})
  return (
    <>
      <div className='container mt-3'>
        <h1>Welcome To Portfolio</h1>
      </div>
    </>
  )
}

export default Home