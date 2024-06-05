import './App.css'
import { useGetAllPlayersQuery, useAddPlayerMutation } from './services/puppies'
import Form from './components/Form/Form'
function App() {

  const { data, error, isLoading, refetch } = useGetAllPlayersQuery()
  const [addPlayer, { isLoading: loadingPlayer }] = useAddPlayerMutation()

  const handleAddPlayer = async (newPlayerData) => {
    await addPlayer(newPlayerData)
    refetch()
  }

  return (
    <>
      <Form addPlayer={handleAddPlayer} />
      {error ? (<p>There was an error</p>)
        : isLoading ? (<p>Loading...</p>)
          : (
            <>
              {data?.data.players.map((player) => {
                return (
                  <div key={player.id}>
                    <hr key={player.id}></hr> {/* Added key to the outer fragment */}

                    <h2>{player.name}</h2>
                    <h2>{player.breed}</h2>
                    <img style={{ width: '200px' }} src={player.imageUrl} alt={player.name} /> {/* Added alt text */}

                  </div>
                )
              })}
            </>
          )}
    </>
  )
}

export default App
