import React from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client'


const GET_DATA = gql`
query {
  transactions {
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
        {/* {
            loading ? <p>Loading...</p> : <div className='app'>
                
                   { data.transactions.map(character => (
                        console.log(character)
                            )
                )
                   }
                
            </div>
        } */}
        
    </div>
  )
  
}

export default DataQuery