import React, { useState, useEffect } from 'react'
import { Player } from '../models'
import { playerSampleData } from '../../../playerSampleData'

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

    return (
        <div>
            <div>
                <PlayerComparisonHeader players={players}/>
            </div>
            <div>
                <PlayerComparisonStats first={first} second={second} />
            </div>
        </div>
    )
}