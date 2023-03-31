import React, { useState, useEffect } from 'react'
import { Player, Stats, StatFilter, ButtonsType } from '../models'

const statFilters = {
    offensiveStats: [
        {fieldName: 'points', title: 'Points', tooltip: 'Goals plus assists.'},
        {fieldName: 'goals', title: 'Goals', tooltip: 'Total goals scored.'},
        {fieldName: 'assists', title: 'Assists', tooltip: 'Passed to scorer.'},
        {fieldName: 'onePointGoals', title: '1 Pt Goals', tooltip: 'Goals from inside 2 point arc.'},
        {fieldName: 'twoPointGoals', title: '2 Pt Goals', tooltip: 'Goals from behind 2 point arc.'},
        {fieldName: 'shots', title: 'Shots', tooltip: 'Shots taken.'},
        {fieldName: 'shotsOnGoal', title: 'SOG', tooltip: 'Shots on cage.'},
        {fieldName: 'shotPct', title: 'Shot %', tooltip: 'Percentage of shots that scored.'},
        {fieldName: 'twoPointShots', title: '2 Pt Shots', tooltip: 'Shots from behind 2 point arc.'},
        {fieldName: 'twoPointShotsOnGoal', title: '2 Pt SOG', tooltip: 'Shots from behind 2 point arc on cage.'},
        {fieldName: 'twoPointShotsOnGoalPct', title: '2 Pt %', tooltip: 'Percentage of shots from behind 2 point arc that scored.'},
        {fieldName: 'powerPlayGoals', title: 'PP Goals', tooltip: 'Power Play goals scored.'},
        {fieldName: 'powerPlayShots', title: 'PP Shots', tooltip: 'Power Play shots taken.'},
        {fieldName: 'shortHandedGoals', title: 'SH Goals', tooltip: 'Short Handed goals scored.'}
    ],
    defensiveStats: [
        {fieldName: 'causedTurnovers', title: "Caused TO's", tooltip: 'Caused turnovers.'},
        {fieldName: 'groundBalls', title: 'Ground Balls', tooltip: 'Ground balls picked up.'}
    ],
    assortedStats: [
        {fieldName: 'gamesPlayed', title: 'Games', tooltip: 'Games Played.'},
        {fieldName: 'gamesStarted', title: 'Games Started', tooltip: 'Games Started.'},
        {fieldName: 'plusMinus', title: '+ / -', tooltip: 'Differential between goals received and goals given while on the field.'},
        {fieldName: 'pim', title: 'PIM', tooltip: 'Penalty minutes.'},
        {fieldName: 'numPenalties', title: '# of Penalties', tooltip: 'Number of penalties received.'},
        {fieldName: 'turnovers', title: "TO's", tooltip: 'Turnovers.'},
    ],
    faceoffStats: [
        {fieldName: 'foRecord', title: 'W - L', tooltip: 'Faceoff record (wins - losses).'},
        {fieldName: 'faceoffs', title: 'Faceoffs', tooltip: 'Faceoffs taken.'},
        {fieldName: 'faceoffsWon', title: 'Faceoffs Won', tooltip: 'Faceoffs won.'},
        {fieldName: 'faceoffsLost', title: 'Faceoffs Lost', tooltip: 'Faceoffs lost.'},
        {fieldName: 'faceoffPct', title: 'Faceoff %', tooltip: 'Percentage of faceoffs won.'}
    ],
    goalieStats: [
        {fieldName: 'gamesPlayed', title: 'Games', tooltip: 'Games played.'},
        {fieldName: 'gamesStarted', title: 'Games Started', tooltip: 'Games started.'},
        {fieldName: 'goalieWins', title: 'Wins', tooltip: 'Games won.'},
        {fieldName: 'goalieLosses', title: 'Losses', tooltip: 'Games lost.'},
        {fieldName: 'goalieTies', title: 'Ties', tooltip: 'Games tied.'},
        {fieldName: 'GAA', title: 'GAA', tooltip: 'Average goals against per game.'},
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

interface PlayerComparisonStatsProps {
    first: Player | null;
    second: Player | null;
}

export const PlayerComparisonStats: React.FC<PlayerComparisonStatsProps> = ({first, second}) => {

    const [selectedFilter, setSelectedFilter] = useState<Array<StatFilter>>()
    const [selectedStat, setSelectedStat] = useState<String>()
    const [buttons, setButtons] = useState<ButtonsType>()

    const getInitialStats = () => {
        if (first?.position === 'G'){
            setSelectedStat('Goalie Stats')
            setSelectedFilter(statFilters.goalieStats)
        } else if (first?.position === 'FO'){
            setSelectedStat('Faceoff Stats')
            setSelectedFilter(statFilters.faceoffStats)
        } else if (
            (first?.position === 'D') ||
            (first?.position === 'SSDM') ||
            (first?.position === 'LSM')
        ) {
            setSelectedStat('Defensive Stats')
            setSelectedFilter(statFilters.defensiveStats)
        } else {
            setSelectedStat('Offensive Stats')
            setSelectedFilter(statFilters.offensiveStats)
        }
    }

    // const handleClick = (event: Event) => {
    //     let selected: String = event?.target?;

    //     switch(selected) {
    //         case 'Goalie Stats':
    //             setSelectedStat('Goalie Stats');
    //             setSelectedFilter(statFilters.goalieStats);
    //             break;
    //         case 'Faceoff Stats':
    //             setSelectedStat(selected);
    //             setSelectedFilter(statFilters.faceoffStats);
    //             break;
    //         case 'Defensive Stats':
    //             setSelectedStat(selected);
    //             setSelectedFilter(statFilters.defensiveStats);
    //             break;
    //         case 'Assorted Stats':
    //             setSelectedStat(selected);
    //             setSelectedFilter(statFilters.assortedStats);
    //             break;
    //         case 'Offensive Stats':
    //             setSelectedStat(selected);
    //             setSelectedFilter(statFilters.offensiveStats);
    //             break;
    //         default:
    //             setSelectedStat('Offensive Stats');
    //             setSelectedFilter(statFilters.offensiveStats);
    //             break;
    //     }
    // }

    useEffect(() => {
        getInitialStats()
    })

    return (
        <div>
            <div>
                {/**
                 * offense button
                 * defense button
                 * assorted button
                 * faceoff button
                 * goalie button
                 */}
            </div>
            <table>
                <tbody>
                    {selectedFilter?.map(({fieldName, title, tooltip}) => {
                        return (
                            <tr key={fieldName}>
                                <td>{fieldName.slice(-3) !== 'Pct' ? first?.stats?.[fieldName as keyof Stats] : `${Number(first?.stats?.[fieldName as keyof Stats])?.toFixed(2)}%`}</td>
                                <td title={tooltip}>{title}</td>
                                <td>{fieldName.slice(-3) !== 'Pct' ? second?.stats?.[fieldName as keyof Stats] : `${Number(second?.stats?.[fieldName as keyof Stats])?.toFixed(2)}%`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}