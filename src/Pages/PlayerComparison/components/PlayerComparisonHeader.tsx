import React, { PropsWithChildren } from 'react'
import { Player } from '../models'

interface PlayerComparisonHeaderProps {
    players: Array<Player> | null;
}

export const PlayerComparisonHeader: React.FC<PropsWithChildren<PlayerComparisonHeaderProps>> = ({players}) => {

    function getInjuryStatus(status: string) {
        switch(status){
            case 'H':
                return 'Healthy';
                break;
            default:
                return 'No News'
                break;
        }
    }

    return (
        <div>
            <div>
                {players?.map(player => {
                    return (
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <img src={`${player?.profileUrl}`} alt={`${player?.lastName}`} />
                                    </div>
                                    <div>
                                        <div>{player.firstName} {player.lastName}</div>
                                        <div>{player.jerseyNum} | {player.country}</div>
                                    </div>
                                </div>
                                <div>
                                    <h4>PROFILE</h4>
                                    <div>
                                        Position: {player.positionName}
                                        College: {player.college} ({player.collegeYear})
                                        Height/Weight: {player.height} / {player.weight}
                                        Injury Status: {getInjuryStatus(`${player.injuryStatus}`)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}