import React, { useState, useEffect } from 'react'
import { Player } from '../models'
import { playerSampleData } from '../../../playerSampleData'

import { styled } from '@mui/material'

import { PlayerComparisonHeader } from '../components/PlayerComparisonHeader'
import { PlayerComparisonStats } from '../components/PlayerComparisonStats'

export const PlayerComparison: React.FC = () => {

    const [first, setFirst] = useState<Player | null>(null);
    const [second, setSecond] = useState<Player | null>(null);
    const [players, setPlayers] = useState<Array<Player> | null>(null);

    useEffect(() => {
        setFirst(playerSampleData[0])
        setSecond(playerSampleData[1])
        setPlayers([playerSampleData[0], playerSampleData[1]])
    }, [])

    const PlayerCardContainer = styled('div')({
        backgroundColor: 'white',
        maxHeight: '90vh',
        height: '90vh',
        maxWidth: '90vw',
        width: '80vw',
        borderRadius: '10px'
    })

    return (
        <PlayerCardContainer>
            <PlayerComparisonHeader players={players}/>
            <PlayerComparisonStats first={first} second={second} />
        </PlayerCardContainer>
    )
}