import React from 'react'
import { playerSampleData } from '../../playerSampleData'
import { PlayerCompare } from '../../Components/PlayerCompare/PlayerCompare'
import { styled } from '@mui/system'
import { colors } from '../../consts';

const Wrapper = styled('div')({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.pageBackground,
});

export const Home: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <>
      <Wrapper>
        <PlayerCompare players={playerSampleData} />
      </Wrapper>
    </>
  )
}