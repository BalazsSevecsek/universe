import { Stack, Typography, IconButton } from '@mui/material';
import { CgArrowsExpandRight, CgCompressRight } from 'react-icons/cg';
import SettingsDialog from './Settings';
import useAppStateStore from '../../../store/appStateStore';

function Heading() {
  const { sidebarOpen, setSidebarOpen } = useAppStateStore((state) => ({
    sidebarOpen: state.sidebarOpen,
    setSidebarOpen: state.setSidebarOpen,
  }));
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h3">Tari Universe</Typography>
      <Stack direction="row" spacing={0.5}>
        <SettingsDialog />
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <CgCompressRight size={16} />
          ) : (
            <CgArrowsExpandRight size={16} />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Heading;