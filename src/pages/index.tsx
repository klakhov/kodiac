import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Tester from '@/components/tester';
import TesterStatic from '@/components/tester-static';

export default function Home() {
  const number = 2500;
  const elems = [];
  
  for (let i=0; i<number; i++) {
    i%2==0 ? elems.push(<Tester id={i} key={i} />) : elems.push(<TesterStatic id={i} key={i} />) 
  }
  return (
    <>
      <main>
        {elems}
      </main>
    </>
  )
}
