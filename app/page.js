import Image from 'next/image';
import AddTidalGates from './components/AddTidalGates/AddTidalGates';

export default function Home() {
  return (
    <>
      <AddTidalGates />
      <main>
        <h3>Main</h3>
      </main>
    </>
  );
}
