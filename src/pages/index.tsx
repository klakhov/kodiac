import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Tester from '@/components/tester';
import TesterStatic from '@/components/tester-static';
import HydrationData from "../pool-attendant-preact/lib/hydrationData";
import withHydration from "../pool-attendant-preact/lib/withHydration";

export default function Home() {
  const number = 2500;
  const elems = [];
  
  const HydratedTester = withHydration(Tester);
  for (let i=0; i<number; i++) {
    i%4!=0 ? elems.push(<HydratedTester id={i} key={i} />) : elems.push(<TesterStatic id={i} key={i} />) 
  }
  return (
    <>
      <main>
        {elems}
        <HydrationData/>
      </main>
    </>
  )
}
