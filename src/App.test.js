import { getPlayerInfo, getPlayerName, defaultPlayer, statsAsTitles, searchPlayerBySlug } from './consts';
import { playerSampleData } from './playerSampleData';

const Lyle = playerSampleData[0]
const Jeff = playerSampleData[1]

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

describe('statsAsTitles', () => {
  it('returns the correct stat as title for assists', () => {
    expect(statsAsTitles['assists']).toEqual('Assists');
  });

  it('returns the correct stat as title for short hand goals against', () => {
    expect(statsAsTitles['shortHandedGoalsAgainst']).toEqual('Short Hand Goals Against');
  });

  it('returns undefined for a stat that does not exist', () => {
    expect(statsAsTitles['fakeStat']).toEqual(undefined);
  });
});

describe('searchPlayerBySlug', () => {
  it('returns the correct player based on slug lyle-thompson', () => {
    const slug = 'lyle-thompson';
    expect(searchPlayerBySlug(slug, playerSampleData)).toEqual(Lyle);
  });

  it('returns the correct player based on slug jeff-teat', () => {
    const slug = 'jeff-teat';
    expect(searchPlayerBySlug(slug, playerSampleData)).toEqual(Jeff);
  });

  it('returns defaultPlayer for a stat that does not exist', () => {
    const slug = 'fake-slug';
    expect(searchPlayerBySlug(slug, playerSampleData)).toEqual(defaultPlayer);
  });
});
