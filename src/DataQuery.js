import React from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client'


const GET_DATA = gql`
query {
  characters {
    results {
        id
        name
        image
    }
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
                        <div key={character.id}>
                            <h3>{character.name}</h3>
                            <img src={character.image} alt={character.name}/>
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