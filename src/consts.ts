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
    instagramUrl?: string,
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

  type StatTitles = Record<string, string>;

  // Allows for easy translation between stat name and something easily readable
  export const statsAsTitles: StatTitles = {
    "GAA": 'Goals Allowed Avg.',
    "assists": 'Assists',
    "causedTurnovers": 'Caused Turnovers',
    "faceoffPct": 'Faceoff Pct.',
    "faceoffs": 'Faceoffs',
    "faceoffsLost": 'Faceoffs Lost',
    "faceoffsWon": 'Faceoffs Won',
    "foRecord": 'Faceoff Record',
    "gamesPlayed": 'Games Played',
    "gamesStarted": 'Games Started',
    "goalieLosses": 'Goalie Losses',
    "goalieTies": 'Goalie Ties',
    "goalieWins": 'Goalie Wins',
    "goals": 'Goals',
    "goalsAgainst": 'Goals Against',
    "groundBalls": 'Ground Balls',
    "numPenalties": 'Penalties',
    "onePointGoals": '1pt Goals',
    "pim": 'Penalty Minutes',
    "pimValue": 'Penalty Minutes',
    "plusMinus": 'Plus-Minus',
    "points": 'Points',
    "powerPlayGoals": 'PPG',
    "powerPlayGoalsAgainst": 'PPG Against',
    "powerPlayShots": 'Power Play Shots',
    "saa": 'Scores Against Avg.',
    "savePct": 'Save %',
    "saves": 'Saves',
    "scoresAgainst": 'Scores Against',
    "shortHandedGoals": 'Short Hand Goals',
    "shortHandedGoalsAgainst": 'Short Hand Goals Against',
    "shortHandedShots": 'Short Hand Shots',
    "shotPct": 'Shot %',
    "shotsOnGoal": 'Shots on Goal',
    "shotsOnGoalPct": 'Shots on Goal %',
    "tof": 'Turnovers Forced',
    "turnovers": 'Turnovers',
    "twoPointGoals": '2pt Goals',
    "twoPointGoalsAgainst": '2pt Goals Against',
    "twoPointShots": '2pt Shots',
    "twoPointShotPct": '2pt Shot %',
    "twoPointShotsOnGoal": '2pt Shots on Goal',
    "twoPointShotsOnGoalPct": '2pt Shots on Goal %',
    "twoPtGaa": '2pt Goals Allowed Avg.',
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

  // Assembles Player's Full Name
  export const getPlayerName = (player: Player) => {
    if(player.firstName !== '') {
      return player.firstName + ' ' +  player.lastName;
    } else {
      return '';
    }
  }
  
  // Assembles Player's Information
  export const getPlayerInfo = (player?: Player) => {
    if(player?.jerseyNum && player?.positionName) {
      let playerInfo = '#' + player.jerseyNum + ' | ' +  player.positionName;
      if(player?.isCaptain) playerInfo += ' | Captain';
      return playerInfo;
    } else {
      return '';
    }
  }

  //Searching and Identifying by slug because it is much more friendly to read when logging vs officialId
  export const searchPlayerBySlug = (slug: string, players: Player[]): Player => {
    const foundPlayer = players.find((player) => player.slug === slug);
    if(foundPlayer) return foundPlayer;
    return defaultPlayer;
  };

  //Simple, assumes all stats are numbers and that a > number is 'better'
  //returns true if playerA has a stat with a higher value than playerB, else false
  export const statCompare = (playerA: Player, playerB: Player, stat: string): boolean => {
    return (playerA.stats[stat] > playerB.stats[stat]);
  }