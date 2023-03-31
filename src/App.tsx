import './App.css'
// import { Home } from './Pages/Home/Home'
import { PlayerComparison } from './Pages/PlayerComparison/containers/playerComparison'

const App: React.FC<React.PropsWithChildren<unknown>> = () => {

  return(
    <>
      {/* <Home /> */}
      <PlayerComparison />
    </>
  )

}

export default App
