import React from 'react'
import RootLayout from './layout';

function Home() {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>
        <p className="desc text-center">Prompt Maker Pro is an open-source prompting tool
            for anyone to begin utilizing AI technology efficiently,
            competently and in a safe manner
        </p>
    </section>
  )
}

export default Home
