import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system'
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import { Player, colors, getPlayerInfo, getPlayerName, statCompare } from '../../consts';

type Props = {
  player: Player;
  otherPlayer: Player;
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

const Stat = styled('div')({
  padding: '.25rem'
})

export const PlayerCard: React.FC<Props> = ({ player, otherPlayer, statsToShow }) => {
  const [skeleton, setSkeleton] = React.useState(true)

  //Refreshes Skeleton if firstName is set to defaultPlayer value of ''
  React.useEffect(() => {
    setSkeleton(player.firstName === '');
  }, [player]);

  return (
    <>
      <Wrapper>
        <PlayerInfo>
          <CardHeader
            avatar={
              skeleton ? (
                <Skeleton animation="wave" variant="circular" width={48} height={48} />
              ) : (
                <a href={player.instagramUrl} target='_blank' rel="noreferrer">
                  <Avatar alt={player.slug} src={player?.profileUrl} sx={{ width: 48, height: 48, backgroundColor: colors.white }}/>
                </a>
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
                getPlayerName(player)
              )
            }
            subheader={
              skeleton ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                getPlayerInfo(player)
              )
            }
          />
        </PlayerInfo>
        <PlayerStats>
          {
            skeleton ? (
              <Box>
                {statsToShow.map(() => (
                  <Skeleton
                    animation="wave"
                    height={25}
                    width="100%"
                    style={{ paddingBottom: '.5rem' }}
                  />
                ))}
              </Box>
            ) : (
              <Box>
                {statsToShow.map((stat) => (
                  <Stat className={`${statCompare(player, otherPlayer, stat) ? 'GoldStat' : 'StandardStat'}`}>
                    <Typography key={stat} variant='body1'>
                      {player.stats[stat]}
                    </Typography>
                  </Stat>
                ))}
              </Box>
            )
          }
        </PlayerStats>
      </Wrapper>
    </>
  )
}