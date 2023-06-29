import Image from 'next/image';
import AddTidalGates from './components/AddTidalGates/AddTidalGates';
import GatesList from './components/GatesList/GatesList.jsx';
export default function Home() {
  return (
    <>
      <AddTidalGates />
      <main>
        <GatesList />
      </main>
    </>
  );
}
