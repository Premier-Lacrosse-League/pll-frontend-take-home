import { getPlayerInfo, getPlayerName, defaultPlayer } from './consts';

const Lyle = {
  firstName: 'Lyle',
  lastName: 'Thompson',
  jerseyNum: 4,
  positionName: 'Attack',
  stats: [],
  slug: 'lyle-thompson',
  isCaptain: true,
}

const Jeff = {
  firstName: 'Jeff',
  lastName: 'Teat',
  jerseyNum: 7,
  positionName: 'Attack',
  stats: [],
  slug: 'jeff-teat',
  isCaptain: false,
}

describe('getPlayerName', () => {
  it('returns the full name if a Player object is provided: Player A', () => {
    expect(getPlayerName(Lyle)).toEqual('Lyle Thompson');
  });

  it('returns the full name if a Player object is provided: Player B', () => {
    expect(getPlayerName(Jeff)).toEqual('Jeff Teat');
  });

  it('returns an empty string if no Player object is provided', () => {
    expect(getPlayerName(defaultPlayer)).toEqual('');
  });
});

describe('getPlayerInfo', () => {
  it('returns the full player info if a Player object is provided: Player A', () => {
    expect(getPlayerInfo(Lyle)).toEqual('#4 | Attack | Captain');
  });

  it('returns the full player info if a Player object is provided: Player B', () => {
    expect(getPlayerInfo(Jeff)).toEqual('#7 | Attack');
  });

  it('returns an empty string if no Player object is provided', () => {
    expect(getPlayerInfo(defaultPlayer)).toEqual('');
  });
});