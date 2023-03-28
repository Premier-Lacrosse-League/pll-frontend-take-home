import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system'
import { colors, statsAsTitles } from '../../consts';
import Avatar from '@mui/material/Avatar';
import Button  from '@mui/material/Button';

type Props = {
  statsToShow: string[];
  clear: boolean;
  onClear: () => void;
};

const Wrapper = styled(Box)({
  textAlign: 'center',
  verticalAlign: 'middle',
});

const Title = styled(Box)({
  height: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Stats = styled(Box)({
  paddingTop: '2rem',
});

const Logo = styled(Avatar)({
  alignSelf: 'top'
})

const ResetButton = styled(Button)({
  color: colors.text,
  background: colors.yellow,
  '&:hover': {
    color: colors.yellow,
    background: colors.black,
  }
});

export const StatDisplay: React.FC<Props> = ({ statsToShow, clear, onClear }) => {
  return (
    <>
      <Wrapper>
        <Title >
          <Logo alt='pll_logo' src="/images/pll_logo.png" sx={{height: 56, width: 56 }}/>
          {
            !clear ? <ResetButton onClick={onClear}  color="primary" size="small">Clear</ResetButton> : ''
          }
        </Title>
        <Stats>
          {statsToShow.map((stat) => (
            <Typography variant='body1' sx={{ padding: '.25rem', borderBottom: 1, borderColor: colors.white }}>
              {statsAsTitles[stat]}
            </Typography>
          ))}
        </Stats>
      </Wrapper>
    </>
  )
}