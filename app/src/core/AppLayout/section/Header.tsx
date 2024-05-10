import { useContext } from 'react';
import { SessionContext } from '../../../hooks/context/SessionContext';

function Header() {
  const useSession = useContext(SessionContext);

  const logout = (): void => {
    useSession && useSession.logout();
  }

    return (
      <header>
        <h1>Header</h1>
        <button onClick={logout} >Déconnexion</button>
      </header>
    );
  }
  export default Header;