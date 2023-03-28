import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system'
import Button from '@mui/material/Button';
import { colors } from '../../consts';

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
  paddingTop: '1.25rem',
});

const Stats = styled(Box)({
  marginTop: '.75rem',
});

const ResetButton = styled(Button)({
  color: colors.text,
});

export const StatDisplay: React.FC<Props> = ({statsToShow, clear, onClear}) => {
  return (
    <>
      <Wrapper>
        <Title >
          <Typography variant={'h6'}>
            VS.
          </Typography>
          {
            !clear ? <ResetButton onClick={onClear}>Clear</ResetButton> : ''
          }
        </Title>
        <Stats>
          {statsToShow.map((stat) => (
            <Typography variant='body1' sx={{ marginBottom: '.5rem', borderBottom: 1, borderColor: colors.white }}>
              {stat}
            </Typography>
          ))}
        </Stats>
      </Wrapper>
    </>
  )
}