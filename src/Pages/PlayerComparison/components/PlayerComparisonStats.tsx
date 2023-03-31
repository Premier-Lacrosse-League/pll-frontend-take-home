import React, { useState, useEffect, useCallback } from 'react'
import { Player, Stats, StatFilter, ButtonsType } from '../models'

import { styled } from '@mui/material'
import { colors, fontSizes } from '../../../consts'

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

const buttons = [
    {title: 'Offensive Stats', name: 'offensiveStats'},
    {title: 'Defensive Stats', name: 'defensiveStats'},
    {title: 'Assorted Stats', name: 'assortedStats'},
    {title: 'Faceoff Stats', name: 'faceoffStats'},
    {title: 'Goalie Stats', name: 'goalieStats'}
]

interface PlayerComparisonStatsProps {
    first: Player | null;
    second: Player | null;
}

export const PlayerComparisonStats: React.FC<PlayerComparisonStatsProps> = ({first, second}) => {

    const [selectedFilter, setSelectedFilter] = useState<Array<StatFilter>>()
    const [selectedStat, setSelectedStat] = useState<String>()
    const [primeButtons, setPrimeButtons] = useState<Array<ButtonsType>>()

    const getInitialStats = useCallback(() => {
        if (first?.position === 'G'){
            setSelectedStat('Goalie Stats');
            setSelectedFilter(statFilters.goalieStats)
            setPrimeButtons([buttons[0], buttons[1], buttons[2], buttons[4]])
        } else if (first?.position === 'FO'){
            setSelectedStat('Faceoff Stats');
            setSelectedFilter(statFilters.faceoffStats)
            setPrimeButtons([buttons[0], buttons[1], buttons[2], buttons[3]])
        } else if (
            (first?.position === 'D') ||
            (first?.position === 'SSDM') ||
            (first?.position === 'LSM')
        ) {
            setSelectedStat('Defensive Stats');
            setSelectedFilter(statFilters.defensiveStats)
            setPrimeButtons([buttons[0], buttons[1], buttons[2]])
        } else if (first?.position === 'M'){
            setSelectedStat('Offensive Stats');
            setSelectedFilter(statFilters.offensiveStats)
            setPrimeButtons([buttons[0], buttons[1], buttons[2], buttons[3]])
        } else if (first?.position === 'A'){
            setSelectedStat('Offensive Stats');
            setSelectedFilter(statFilters.offensiveStats)
            setPrimeButtons([buttons[0], buttons[1], buttons[2]])
        }
    }, [first, second])

    useEffect(() => {
        getInitialStats();
    }, [getInitialStats])

    const handleClick = (selected: string) => {
        switch(selected) {
            case 'goalieStats':
                setSelectedStat('Goalie Stats');
                setSelectedFilter(statFilters.goalieStats);
                break;
            case 'faceoffStats':
                setSelectedStat('Faceoff Stats');
                setSelectedFilter(statFilters.faceoffStats);
                break;
            case 'defensiveStats':
                setSelectedStat('Defensive Stats');
                setSelectedFilter(statFilters.defensiveStats);
                break;
            case 'assortedStats':
                setSelectedStat('Assorted Stats');
                setSelectedFilter(statFilters.assortedStats);
                break;
            case 'offensiveStats':
                setSelectedStat('Offensive Stats');
                setSelectedFilter(statFilters.offensiveStats);
                break;
            default:
                setSelectedStat('Offensive Stats');
                setSelectedFilter(statFilters.offensiveStats);
                break;
        }
    }

    const ButtonBar = styled('div')({
        width: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    })

    const ButtonContainer = styled('div')({
        position: 'sticky',
        top: '20px',
        marginTop: '15px',
        height: '60px',
        width: '100%',
        backgroundColor: `${colors.gray.gray20}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        border: `1px ${colors.yellow[400]} solid`
    })

    const Buttons = styled('button')({
        background: 'transparent',
        border: 'none',
        color: 'black',
        height: '60px',
        padding: '5px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        ":hover": {
            color: `${colors.yellow}`
        }
    })

    const Table = styled('table')({
        width: '100%',
        height: 'fit-content'
    })

    const TableDataCenter = styled('td')({
        textAlign: 'center',
        width: '100px'
    })

    const TableDataLeft = styled('td')({
        textAlign: 'right',
        width: '80px'
    })

    const TableDataRight = styled('td')({
        textAlign: 'left',
        width: '80px'
    })

    const TableRow = styled('tr')({
        borderBottom: `1px ${colors.yellow[400]} solid`,
        height: '30px'
    })

    const StatsContainer = styled('div')({
        width: '100%',
        height: '75%',
        overflow: 'auto',
    })

    const SelectedStatContainer = styled('div')({
        position: 'sticky',
        top: '80px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'

    })

    return (
        <StatsContainer>
            <ButtonContainer>
                <ButtonBar>
                    {primeButtons?.map(({title, name}) => {
                        return <Buttons onClick={() => handleClick(name)}>{title}</Buttons>
                    })}
                </ButtonBar>
            </ButtonContainer>
            <SelectedStatContainer>{selectedStat}</SelectedStatContainer>
            <Table>
                <tbody>
                    {selectedFilter?.map(({fieldName, title, tooltip}) => {
                        return (
                            <TableRow key={fieldName}>
                                <TableDataLeft>{fieldName.slice(-3) !== 'Pct' ? first?.stats?.[fieldName as keyof Stats] : `${Number(first?.stats?.[fieldName as keyof Stats])?.toFixed(2)}%`}</TableDataLeft>
                                <TableDataCenter title={tooltip}>{title}</TableDataCenter>
                                <TableDataRight>{fieldName.slice(-3) !== 'Pct' ? second?.stats?.[fieldName as keyof Stats] : `${Number(second?.stats?.[fieldName as keyof Stats])?.toFixed(2)}%`}</TableDataRight>
                            </TableRow>
                        )
                    })}
                </tbody>
            </Table>
        </StatsContainer>
    )
}