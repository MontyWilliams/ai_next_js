"use client"
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';


function Nav() {
  const isUserLoggedIn = true

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Prompt Mastery Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt Mastery</p>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">

          </div>): (
            <>

            </>
          )}
      </div>
    </nav>
  )
}

export default Nav
