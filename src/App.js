import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import { createUser } from './api/api';
import './App.css';
import CreateUser from './createUser/CreateUser';
import UsersBox from './usersBox/UsersBox.js';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <UsersBox />
        <CreateUser />
      </div>
    </QueryClientProvider>
  );
}

export default App;
