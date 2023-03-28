import React from 'react'
import { playerSampleData } from '../../playerSampleData'
import { Dashboard } from '../../Components/Dashboard/Dashboard'
import { styled } from '@mui/system'
import { colors } from '../../consts';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)({
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
        <Dashboard players={playerSampleData} />
      </Wrapper>
    </>
  )
}