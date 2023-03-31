import React, { PropsWithChildren } from 'react'
import { Player } from '../models'
import { colors, styled } from '@mui/material';

interface PlayerComparisonHeaderProps {
    players: Array<Player> | null;
}

export const PlayerComparisonHeader: React.FC<PropsWithChildren<PlayerComparisonHeaderProps>> = ({players}) => {

    function getInjuryStatus(status: string) {
        switch(status){
            case 'H':
                return 'Healthy';
            default:
                return 'No News'
        }
    }

    const HeaderContainer = styled('div')({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    })

    const PlayerHeaderContainer = styled('div')({
        marginTop: '3vh',
        display: 'flex',
        alignItems: 'center',
        width: '500px'
    })

    const HeadshotContainer = styled('div')({
        height: '150px',
        width: '150px',
        borderRadius: '80px',
        marginRight: '40px',
        border: `3px ${colors.yellow[400]} solid`,
    })

    const PlayerHeadshotNameContainer = styled('div')({
        display: 'flex',
        alignItems: 'center',
    })

    const HeadshotImage = styled('img')({
        height: '100%',
        width: '100%',
        borderRadius: '50%',
    })

    const ProfileContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        width: '250px'
    })

    const PlayerName = styled('div')({
        fontSize: '28px',
    })

    const PlayerNameContainer = styled('div')({
        paddingBottom: '10px',
        fontWeight: 'bold'
    })

    const PlayerDescriptions = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })

    return (
        <HeaderContainer>
                {players?.map(player => {
                    return (
                        <PlayerHeaderContainer>
                            <PlayerHeadshotNameContainer>
                                <HeadshotContainer>
                                    <HeadshotImage src={`${player?.profileUrl}`} alt={`${player?.lastName}`} />
                                </HeadshotContainer>
                            </PlayerHeadshotNameContainer>
                            <ProfileContainer>
                                <ProfileContainer>
                                    <PlayerNameContainer>
                                        <PlayerName>{player.firstName} {player.lastName}</PlayerName>
                                        <div>{player.jerseyNum} | {player.country}</div>
                                    </PlayerNameContainer>
                                    <PlayerDescriptions>
                                        <div>Position: </div>
                                        <div>{player.positionName}</div>
                                    </PlayerDescriptions>
                                    <PlayerDescriptions>
                                        <div>College: </div>
                                        <div>{player.college} ({player.collegeYear})</div>
                                    </PlayerDescriptions>
                                    <PlayerDescriptions>
                                        <div>Height/Weight:</div> 
                                        <div>{player.height} / {player.weight}</div>
                                    </PlayerDescriptions>
                                    <PlayerDescriptions>
                                        <div>Injury Status: </div>
                                        <div>{getInjuryStatus(`${player.injuryStatus}`)}</div>
                                    </PlayerDescriptions>
                                </ProfileContainer>
                            </ProfileContainer>
                        </PlayerHeaderContainer>
                    )
                })}
        </HeaderContainer>
    )
}