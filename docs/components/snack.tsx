'use client'

import React from 'react'
import Script from 'next/script'
import { useTheme } from 'nextra-theme-docs'

export default function Snack() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
      <Script src="https://snack.expo.dev/embed.js" async />

      <div
        data-snack-id="@ammarahmed/github.com-ammarahm-ed-rn-sheet:expo-example"
        data-snack-platform="web"
        data-snack-preview="true"
        data-snack-theme={currentTheme}
        style={{
          overflow: 'hidden',
          backgroundColor:
            currentTheme === 'dark'
              ? 'rgb(243 244 246/var(--tw-text-opacity))'
              : '#F9F9F9',
          border: `1px solid ${
            currentTheme === 'dark' ? '#2b2b2b' : '#f0f0f0'
          }`,
          borderRadius: 10,
          marginTop: 20,
          height: 600,
          width: '100%',
          touchAction: 'none',
        }}
      />
    </>
  )
}
