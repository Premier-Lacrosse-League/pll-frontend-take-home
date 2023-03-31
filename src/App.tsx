import './App.css'
// import { Home } from './Pages/Home/Home'
import { colors, fontSizes } from './consts'
import { PlayerComparison } from './Pages/PlayerComparison/containers/playerComparison'
import { styled } from '@mui/material'

const App: React.FC<React.PropsWithChildren<unknown>> = () => {

  const PlayerCardBackground = styled('div')({
    backgroundColor: `${colors.pageBackground}`,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'hidden'
  })

  return(
    <>
      {/* <Home /> */}
      <PlayerCardBackground>
        <PlayerComparison />
      </PlayerCardBackground>
    </>
  )

}

export default App
