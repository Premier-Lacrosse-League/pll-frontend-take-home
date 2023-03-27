import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system'
import Card from '@mui/material/Card';
import { Player, statList } from '../../consts';

type Props = {
  players: Player[];
  onPlayerSelected: (player: Player, position: string) => void;
  onStatsChange: (stats: string[]) => void;
};

export const ControlBar: React.FC<Props> = ({players, onPlayerSelected, onStatsChange}) => {
  const [playerASlug, setPlayerASlug] = React.useState('');
  const [playerBSlug, setPlayerBSlug] = React.useState('');
  const [stats, setStats] = React.useState<string[]>([]);

  //From MUI Docs
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 232,
        width: 250,
      },
    },
  };

  const ActionBar = styled(Card)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    background: "white",
    marginBottom: "1rem",
  });

  const handleStatsChange = (event: SelectChangeEvent<typeof stats>) => {
    const {
      target: { value },
    } = event;
    const newStats = typeof value === 'string' ? value.split(',') : value;
    setStats(newStats);
    onStatsChange(newStats);
  };

  const handlePlayerAChange = (event: SelectChangeEvent) => {
    const newPlayerASlug = event.target.value as string
    setPlayerASlug(newPlayerASlug);
    const newPlayerA = searchPlayerBySlug(newPlayerASlug);
    onPlayerSelected(newPlayerA, "A");
  };

  const handlePlayerBChange = (event: SelectChangeEvent) => {
    const newPlayerBSlug = event.target.value as string
    setPlayerBSlug(newPlayerBSlug);
    const newPlayerB = searchPlayerBySlug(newPlayerBSlug);
    onPlayerSelected(newPlayerB, "B");
  };

  //Searching and Identifying by slug because it is much more friendly to read when logging vs officialId
  const searchPlayerBySlug = (slug: string): Player => {
    const foundPlayer = players.find((player) => player.slug === slug);
    if(foundPlayer) return foundPlayer;
    return {};
  };

  return (
    <>
      <ActionBar>
          <Box>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Player A</InputLabel>
              <Select
                value={playerASlug}
                label="PlayerA"
                input={<OutlinedInput label="Player A" />}
                onChange={handlePlayerAChange}
              >
               {players.map((player) => (
                <MenuItem key={player.slug} value={player.slug}>{player.firstName} {player.lastName}</MenuItem>
               ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Stats</InputLabel>
              <Select
                multiple
                value={stats}
                onChange={handleStatsChange}
                input={<OutlinedInput label="Stats" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {statList.map((stat) => (
                  <MenuItem key={stat} value={stat}>
                    <Checkbox checked={stats.indexOf(stat) > -1} />
                    <ListItemText primary={stat} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Player B</InputLabel>
              <Select
                value={playerBSlug}
                label="PlayerB"
                onChange={handlePlayerBChange}
                input={<OutlinedInput label="Player B" />}
              >
               {players.map((player) => (
                <MenuItem key={player.slug} value={player.slug}>{player.firstName} {player.lastName}</MenuItem>
               ))}
              </Select>
            </FormControl>
          </Box>
      </ActionBar>
    </>
  )
}
