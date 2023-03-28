import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Player } from '../../consts';
import { styled } from '@mui/system'
import { colors } from '../../consts';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

type Props = {
  player: Player;
  statsToShow: string[];
};

const Wrapper = styled(Box)({
  
});

const PlayerInfo = styled(Card)({
  background: colors.yellow,
  marginBottom: '1rem',
});

const PlayerStats = styled(Box)({
  textAlign: 'center',
  verticalAlign: 'middle',
});

export const PlayerCard: React.FC<Props> = ({ player, statsToShow }) => {
  const [skeleton, setSkeleton] = React.useState(true)

  React.useEffect(() => {
    setSkeleton(player.firstName === '');
  }, [player]);


  const getPlayerName = () => {
    if(player) {
      return player.firstName + ' ' +  player.lastName;
    } else {
      return '';
    }
  }

  const getPlayerInfo = () => {
    if(player.jerseyNum && player.positionName) {
      let playerInfo = '#' + player.jerseyNum + ' | ' +  player.positionName;
      if(player.isCaptain) playerInfo += ' | Captain';
      return playerInfo;
    } else {
      return '';
    }
  }

  const renderStats = () => {
    
  }

  return (
    <>
      <Wrapper>
        <PlayerInfo>
          <CardHeader
            avatar={
              skeleton ? (
                <Skeleton animation="wave" variant="circular" width={48} height={48} />
              ) : (
                <Avatar alt={player.slug} src={player?.profileUrl} sx={{ width: 48, height: 48, backgroundColor: colors.white }}/>
              )
            }
            title={
              skeleton ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                getPlayerName()
              )
            }
            subheader={
              skeleton ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                getPlayerInfo()
              )
            }
          />
        </PlayerInfo>
        <PlayerStats>
          {
            skeleton ? (
              <Box>
                {statsToShow.map((stat) => (
                  <Skeleton
                    animation="wave"
                    height={25}
                    width="80%"
                    style={{ marginBottom: '.5rem' }}
                  />
                ))}
              </Box>
            ) : (
              <Box>
                {statsToShow.map((stat) => (
                  <Typography key={stat} variant='body1' sx={{ marginBottom: '.5rem', borderBottom: 1 }}>
                    {player.stats[stat]}
                  </Typography>
                ))}
              </Box>
            )
          }
        </PlayerStats>
      </Wrapper>
    </>
  )
}