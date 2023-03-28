export const colors = {
    pageBackground: '#efefef',
    darkBackground: '#262626',
    darkLayout: '#3A3E40',
    white: '#fff',
    offWhite: '#FAFAFA',
    tan: '#B9B9B9',
    black: '#000',
    desc: '#A6A6A6',
    gray: {
      gray20: '#DEDEE3',
      gray40: '#B4B4B9',
      gray60: '#98989D',
      gray70: '#595959',
      gray75: '#3A3E40',
      gray80: '#313131',
      gray90: '#262626'
    },
    text: '#242424',
    helperText: 'rgba(0, 0, 0, .60)',
    yellow: '#ffcb06',
    blue: '#0764a6',
    lightBlue: '#3ba9f6',
    placeholder: '#f6f6f6',
    green: '#00c364',
    greenOpaque: 'rgba(0, 195, 100, .20)',
    red: '#FF0000',
    redOpaque: 'rgba(255, 18, 18, .20)',
    gold: '#ecbf28',
    limeGreen: '#28C101'
  }

  export const fontSizes = {
    xSmall: 10,
    small: 13, 
    medium: 17, 
    semiLarge: 20, 
    large: 30, 
    xlarge: 38, 
  }
  
  export type Player = {
    age?: number,
    firstName: string,
    height?: string,
    isCaptain?: boolean,
    jerseyNum?: number,
    lastName: string,
    officialId?: string,
    slug: string,
    bio?: string,
    position?: string,
    positionName?: string,
    profileUrl?: string,
    weight?: number,
    hometown?: string,
    stats: {
      [key: string]: any,
      GAA?: number,
      assists?: number,
      causedTurnovers?: number,
      faceoffPct?: number,
      faceoffs?: number,
      faceoffsLost?: number,
      faceoffsWon?: number,
      foRecord?: number,
      gamesPlayed?: number,
      gamesStarted?: number,
      goalieLosses?: number,
      goalieTies?: number,
      goalieWins?: number,
      goals?: number,
      goalsAgainst?: number,
      groundBalls?: number,
      numPenalties?: number,
      onePointGoals?: number,
      pim?: number,
      pimValue?: number,
      plusMinus?: number,
      points?: number,
      powerPlayGoals?: number,
      powerPlayGoalsAgainst?: number,
      powerPlayShots?: number,
      saa?: number,
      savePct?: number,
      saves?: number,
      scoresAgainst?: number,
      shortHandedGoals?: number,
      shortHandedGoalsAgainst?: number,
      shortHandedShots?: number,
      shotPct?: number,
      shots?: number,
      shotsOnGoal?: number,
      shotsOnGoalPct?: number,
      tof?: number,
      turnovers?: number,
      twoPointGoals?: number,
      twoPointGoalsAgainst?: number,
      twoPointShots?: number,
      twoPointShotPct?: number,
      twoPointShotsOnGoal?: number,
      twoPointShotsOnGoalPct?: number,
      twoPtGaa?: number,
    }
  }

  export const defaultPlayer: Player = {
    firstName: '',
    lastName: '',
    slug: '',
    stats: [],
  }

  export const statList = [
    "GAA",
    "assists",
    "causedTurnovers",
    "faceoffPct",
    "faceoffs",
    "faceoffsLost",
    "faceoffsWon",
    "foRecord",
    "gamesPlayed",
    "gamesStarted",
    "goalieLosses",
    "goalieTies",
    "goalieWins",
    "goals",
    "goalsAgainst",
    "groundBalls",
    "numPenalties",
    "onePointGoals",
    "pim",
    "pimValue",
    "plusMinus",
    "points",
    "powerPlayGoals",
    "powerPlayGoalsAgainst",
    "powerPlayShots",
    "saa",
    "savePct",
    "saves",
    "scoresAgainst",
    "shortHandedGoals",
    "shortHandedGoalsAgainst",
    "shortHandedShots",
    "shotPct",
    "shotsOnGoal",
    "shotsOnGoalPct",
    "tof",
    "turnovers",
    "twoPointGoals",
    "twoPointGoalsAgainst",
    "twoPointShots",
    "twoPointShotPct",
    "twoPointShotsOnGoal",
    "twoPointShotsOnGoalPct",
    "twoPtGaa",
  ]

  export const getPlayerName = (player: Player) => {
    if(player.firstName !== '') {
      return player.firstName + ' ' +  player.lastName;
    } else {
      return '';
    }
  }
  
  export const getPlayerInfo = (player?: Player) => {
    if(player?.jerseyNum && player?.positionName) {
      let playerInfo = '#' + player.jerseyNum + ' | ' +  player.positionName;
      if(player?.isCaptain) playerInfo += ' | Captain';
      return playerInfo;
    } else {
      return '';
    }
  }