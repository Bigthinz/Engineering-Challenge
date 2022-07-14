import './App.css';
import { useState } from 'react'
// import DataQuery from './DataQuery';



function App() {
  const [searchQuery, setSearchQuery ] = useState('')





  return (
    <div className="app">
      {/* <DataQuery/> */}

      <div className='search'>
        <input 
        type='text'
        onChange={(e)=> setSearchQuery(e.target.value)}
         />
        <input type='submit'value='search' />
        
      </div>
      <div className='filter-box'>
        <button>type</button>
        <button>name</button>
        <button>status</button>
        <button>date</button>
      </div>
      <div>
        
        <div>
            <h2>Date</h2>
        </div>

        <table>
          <tr>
            <td>1</td>
            <td>data info</td>
          </tr>
          <tr>
            <td>1</td>
            <td>data info</td>
          </tr>
        </table>
        

      </div>

      <div>
        
        <div>
            <h2>Date</h2>
        </div>

        <table>
          <tr>
            <td>1</td>
            <td>data info</td>
          </tr>
          <tr>
            <td>1</td>
            <td>data info</td>
          </tr>
        </table>
        

      </div>
    </div>
  );
}

export default App;
