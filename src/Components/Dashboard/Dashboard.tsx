import * as React from 'react';
import { styled } from '@mui/system'
import { ControlPanel } from '../ControlPanel/ControlPanel';
import Card from '@mui/material/Card';
import { Player, colors, defaultPlayer } from '../../consts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import { StatDisplay } from '../StatDisplay/StatDisplay';

type Props = {
  players: any[];
};

const Wrapper = styled(Card)({
  backgroundColor: colors.white,
  width: '72rem',
  minHeight: '32rem',
  display: 'flex',
  alignItems: 'stretch',
  padding: '2rem',
  gap: '1rem'
});

const CompareGrid = styled(Box)({
  flexGrow: 1,
});

export const Dashboard: React.FC<Props> = ({players}) => {
  const [playerA, setPlayerA] = React.useState<Player>(defaultPlayer);
  const [playerB, setPlayerB] = React.useState<Player>(defaultPlayer);
  const [statsToShow, setStatsToShow] = React.useState<string[]>([]);
  const [clear, setClear] = React.useState(true)

  const handlePlayerSelected = (player: Player, position: string) => {
    switch(position){
      case('A'):
        setPlayerA(player)
        setClear(false);
        break;
      case('B'):
        setPlayerB(player)
        setClear(false);
        break;
      default:
        break
    }
  }

  const handleStatsChange = (newStats: string[]) => {
    setStatsToShow(newStats);
    setClear(false);
  }

  const onClear = () => {
    setPlayerA(defaultPlayer);
    setPlayerB(defaultPlayer);
    setStatsToShow([]);
    setClear(true);
  }

  return (
    <>
      <Wrapper elevation={8}>
        <ControlPanel
          players={players} 
          onPlayerSelected={handlePlayerSelected} 
          onStatsChange={handleStatsChange}
          clear={clear}
        />
        <CompareGrid>
          <Grid container columns={16}>
            <Grid item xs={6}>
              <PlayerCard player={playerA} otherPlayer={playerB} statsToShow={statsToShow}/>
            </Grid>
            <Grid item xs={4}>
              <StatDisplay statsToShow={statsToShow} clear={clear} onClear={onClear} />
            </Grid>
            <Grid item xs={6}>
              <PlayerCard player={playerB} otherPlayer={playerA} statsToShow={statsToShow}/>
            </Grid>
          </Grid>
        </CompareGrid>
      </Wrapper>
    </>
  )
}
