import React from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client'


const GET_DATA = gql`
query {
  transactions {
    _id
		date
		name
		status
		type
  }
 



}

# query{
#     data{
#         id
#         emoji
#         colors
#     }
# }

`


const DataQuery = () => {
   const { error, loading, data } = useQuery(GET_DATA)

   console.log(error, loading, data)
  return (
    <div>
        {
            loading ? <p>Loading...</p> : <div className='app'>
                
                   { data.characters.results.map(character => (
                        <div key={character.date}>
                            <h3>{character.name}</h3>
                            <img src={character.status} alt={character.name}/>
                        </div>
                            )
                )
                   }
                
            </div>
        }
        
    </div>
  )
  
}

export default DataQuery