import { Details } from '../pages/Details';
import { DressCode } from '../pages/DressCode';
import { FinalForm } from '../pages/FinalForm';
import { Header } from '../pages/header';
import { Inspiration } from '../pages/Inspiration';
import { Location } from '../pages/Location';
import { NamedStatement } from '../pages/NamedStatement';
import { Programm } from '../pages/Programm';
import { RefsForMen } from '../pages/RefsForMen';
import { RefsForWomen } from '../pages/RefsForWomen';

function App() {
  return (
    <>
      <Header />
      <Inspiration />
      <NamedStatement />
      <Programm />
      <Location />
      <DressCode />
      <RefsForWomen />
      <RefsForMen />
      <Details />
      <FinalForm />
    </>
  );
}

export default App;
