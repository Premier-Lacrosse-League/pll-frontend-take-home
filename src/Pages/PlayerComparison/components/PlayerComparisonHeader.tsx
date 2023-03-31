import React, { PropsWithChildren } from 'react'
import { Player } from '../models'

interface PlayerComparisonHeaderProps {
    first: Player | null;
    second: Player | null;
}

export const PlayerComparisonHeader: React.FC<PropsWithChildren<PlayerComparisonHeaderProps>> = ({first, second}) => {
    return (
        <div>{first?.firstName + ' ' + first?.lastName} & {second?.firstName + ' ' + second?.lastName}</div>
    )
}