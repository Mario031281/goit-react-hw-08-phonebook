import { Navigation } from 'components/Navigate/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import { AppHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
};
