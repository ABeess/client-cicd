import { styled } from '@mui/material';
import { ReactElement } from 'react';
import DashboardLayout from './dashboard';
import LogoOnly from './LogoOnly';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const MainStyle = styled('main')(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(15),
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));

type Variants = 'dashboard' | 'logoOnly' | 'main';
interface ILayout {
  children: ReactElement;
  variants?: Variants;
}

export default function Layout({ children, variants = 'dashboard' }: ILayout) {
  if (variants === 'logoOnly') {
    return <LogoOnly>{children}</LogoOnly>;
  }

  if (variants === 'main') {
    return <>{children}</>;
  }
  return (
    <RootStyle>
      <DashboardLayout />
      <MainStyle>{children}</MainStyle>
    </RootStyle>
  );
}
