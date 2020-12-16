import React from 'react'

export const THEME_GREEN: React.CSSProperties = {
    backgroundColor: '#ebfffc',
    color: '#00947e'
}

export const THEME_BLUE: React.CSSProperties = {
    backgroundColor: '#eef3fc',
    color: '#2160c4',
}

export const DEFAULT_STYLE: React.CSSProperties = {
    padding: '8px',
    position: 'relative',
    width: 'auto',
    height: 'auto',
    opacity: 0.9,
    fontFamily: 'sans-serif',
    fontSize: 14,
    borderRadius: 4,
    border: '1px solid rgba(49, 49, 49, 0.2)',
    lineHeight: 1.4,
    ...THEME_BLUE
}
