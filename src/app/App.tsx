import { FormPage } from '../pages/FormPage';
import { MainPage } from '../pages/MainPage';
import { WorkArea } from './WorkArea';

function App() {
  return (
    <WorkArea>
      <MainPage />
      <FormPage />
    </WorkArea>
  );
}

export default App;
