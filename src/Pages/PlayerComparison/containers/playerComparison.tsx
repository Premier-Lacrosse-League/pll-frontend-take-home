import React, { useState, useEffect } from 'react'
import { Player, Stats } from '../models'
import { playerSampleData } from '../../../playerSampleData'

import { PlayerComparisonHeader } from '../components/PlayerComparisonHeader'

const statFilters = {
    'Offensive Stats': [
        {fieldName: 'points', title: 'Points', tooltip: 'Goals plus assists.'},
        {fieldName: 'goals', title: 'Goals', tooltip: 'Total goals scored.'},
        {fieldName: 'assists', title: 'Assists', tooltip: 'Passed to scorer.'},
        {fieldName: 'onePointGoals', title: '1 Point Goals', tooltip: 'Goals from inside 2 point arc.'},
        {fieldName: 'twoPointGoals', title: '2 Point Goals', tooltip: 'Goals from behind 2 point arc.'},
        {fieldName: 'shots', title: 'Shots', tooltip: 'Shots taken.'},
        {fieldName: 'shotsOnGoal', title: 'SOG', tooltip: 'Shots on cage.'},
        {fieldName: 'shotPct', title: 'Shot %', tooltip: 'Percentage of shots that scored.'},
        {fieldName: 'twoPointShots', title: '2 Point Shots', tooltip: 'Shots from behind 2 point arc.'},
        {fieldName: 'twoPointShotsOnGoal', title: '2 Point SOG', tooltip: 'Shots from behind 2 point arc on cage.'},
        {fieldName: 'twoPointShotsOnGoalPct', title: '2 Point %', tooltip: 'Percentage of shots from behind 2 point arc that scored.'},
        {fieldName: 'powerPlayGoals', title: 'PP Goals', tooltip: 'Power Play goals scored.'},
        {fieldName: 'powerPlayShots', title: 'PP Shots', tooltip: 'Power Play shots taken.'},
        {fieldName: 'shortHandedGoals', title: 'SH Goals', tooltip: 'Short Handed goals scored.'},
        {fieldName: ''}
    ],
    'Defensive Stats': [
        {fieldName: 'causedTurnovers', title: "Caused TO's", tooltip: 'Caused turnovers.'},
        {fieldName: 'groundBalls', title: 'Ground Balls', tooltip: 'Ground balls picked up.'}
    ],
    'Assorted Stats': [
        {fieldName: 'gamesPlayed', title: 'Games', tooltip: 'Games Played.'},
        {fieldName: 'gamesStarted', title: 'Games Started', tooltip: 'Games Started.'},
        {fieldName: 'plusMinus', title: '+ / -', tooltip: 'Differential between goals received and goals given while on the field.'},
        {fieldName: 'pim', title: 'PIM', tooltip: 'Penalty minutes.'},
        {fieldName: 'numPenalties', title: '# of Penalties', tooltip: 'Number of penalties received.'},
        {fieldName: 'turnovers', title: "TO's", tooltip: 'Turnovers.'},
    ],
    'Faceoff Stats': [
        {fieldName: 'foRecord', title: 'W - L', tooltip: 'Faceoff record (wins - losses).'},
        {fieldName: 'faceoffs', title: 'Faceoffs', tooltip: 'Faceoffs taken.'},
        {fieldName: 'faceoffsWon', title: 'Faceoffs Won', tooltip: 'Faceoffs won.'},
        {fieldName: 'faceoffsLost', title: 'Faceoffs Lost', tooltip: 'Faceoffs lost.'},
        {fieldName: 'faceoffPct', title: 'Faceoff %', tooltip: 'Percentage of faceoffs won.'}
    ],
    'Goalie Stats': [
        {fieldName: 'gamesPlayed', title: 'Games', tooltip: 'Games played.'},
        {fieldName: 'gamesStarted', title: 'Games Started', tooltip: 'Games started.'},
        {fieldName: 'goalieWins', title: 'Wins', tooltip: 'Games won.'},
        {fieldName: 'goalieLosses', title: 'Losses', tooltip: 'Games lost.'},
        {fieldName: 'goalieTies', title: 'Ties', tooltip: 'Games tied.'},
        {fieldName: 'GAA', titles: 'GAA', tooltip: 'Average goals against per game.'},
        {fieldName: 'goalsAgainst', title: 'GA', tooltip: 'Total goals scored against.'},
        {fieldName: 'saves', title: 'Saves', tooltip: 'Total saves.'},
        {fieldName: 'saa', title: 'SAA', tooltip: 'Average saves made per game.'},
        {fieldName: 'savePct', title: 'Save %', tooltip: 'Save percentage.'},
        {fieldName: 'powerPlayGoalsAgainst', title: 'PPGA', tooltip: 'Power play goals against.'},
        {fieldName: 'shortHandedGoalsAgainst', title: 'SHGA', tooltip: 'Short handed goals against.'},
        {fieldName: 'twoPointGoalsAgainst', title: '2PGA', tooltip: 'Total 2 point goals scored against.'},
        {fieldName: 'twoPtGaa', title: '2PGAA', tooltip: 'Average 2 points goals scored against per game.'}
    ]
}

export const PlayerComparison: React.FC = () => {

    const [first, setFirst] = useState<Player | null>(null);
    const [second, setSecond] = useState<Player | null>(null);

    useEffect(() => {
        setFirst(playerSampleData[0])
        setSecond(playerSampleData[1])
    }, [])

    return (
        <div>
            <PlayerComparisonHeader player={first} />
            <PlayerComparisonHeader player={second} />
        </div>
    )
}