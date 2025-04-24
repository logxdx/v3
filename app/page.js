import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Volunteering from "@/components/volunteering/volunteering";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';
import GlowEffect from '@/components/glow';
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-20 lg:px-28">
      <GlowEffect />
      <div className="z-2 w-full max-w-8xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className='lg:pl-[50%]'>
          <About data={data.general}></About>
          <Projects data={data.projects}></Projects>
          <Education data={data.education}></Education>
          {/* <Experiences data={data.experiences}></Experiences> */}
          {/* <Volunteering data={data.volunteering}></Volunteering> */}
          <Credits data={data.general}></Credits>
        </div>
      </div>
      <SpeedInsights />
    </main>
  )
}
