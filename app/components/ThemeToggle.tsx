'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/[.08] bg-white transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
        aria-label="Toggle theme"
      />
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )
    } else if (theme === 'dark') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="4" height="4" x="2" y="2" rx="1" />
          <rect width="4" height="4" x="10" y="2" rx="1" />
          <rect width="4" height="4" x="18" y="2" rx="1" />
          <rect width="4" height="4" x="2" y="10" rx="1" />
          <rect width="4" height="4" x="10" y="10" rx="1" />
          <rect width="4" height="4" x="18" y="10" rx="1" />
          <rect width="4" height="4" x="2" y="18" rx="1" />
          <rect width="4" height="4" x="10" y="18" rx="1" />
          <rect width="4" height="4" x="18" y="18" rx="1" />
        </svg>
      )
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/[.08] bg-white text-black transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
      aria-label={`Current theme: ${theme}. Click to cycle theme`}
      title={`Current theme: ${theme}`}
    >
      {getIcon()}
    </button>
  )
}
