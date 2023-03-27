import * as React from 'react';
import { styled } from '@mui/system'
import { ControlBar } from '../ControlBar/ControlBar';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Player, colors } from '../../consts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type Props = {
  players: any;
};

const Wrapper = styled(Card)({
  backgroundColor: colors.white,
  width: '64rem',
  minHeight: '32rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2rem',
});

const CompareGrid = styled(Box)({
  flexGrow: 1,
  width: '100%',
});

export const PlayerCompare: React.FC<Props> = ({players}) => {
  const [playerA, setPlayerA] = React.useState<Player>({});
  const [playerB, setPlayerB] = React.useState<Player>({});
  const [statsToShow, setStatsToShow] = React.useState<string[]>([]);

  const handlePlayerSelected = (player: Player, position: string) => {
    switch(position){
      case('A'):
        setPlayerA(player)
        break;
      case('B'):
        setPlayerB(player)
        break;
      default:
        break
    }
  }

  const handleStatsChange = (newStats: string[]) => {
    setStatsToShow(newStats);
  }

  return (
    <>
      <Wrapper>
        <ControlBar 
          players={players} 
          onPlayerSelected={handlePlayerSelected} 
          onStatsChange={handleStatsChange}
        />
        <CompareGrid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant='h6'>
                {playerA.firstName} {playerA.lastName}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {statsToShow.map((stat) => (
                <Typography variant='body1'>
                  {stat}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h6'>
                {playerB.firstName} {playerB.lastName}
              </Typography>
            </Grid>
          </Grid>
        </CompareGrid>
      </Wrapper>
    </>
  )
}
