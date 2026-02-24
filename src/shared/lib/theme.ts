export const colors = {
    white: '#fff',

    primary: '#4a90e2',
    primaryHover: '#357abd',

    danger: '#e74c3c',
    dangerHover: '#c0392b',

    textPrimary: '#333',
    textSecondary: '#999',

    backgroundLight: '#f9f9f9',
    backgroundHover: '#f0f0f0',

    border: '#ddd',
    borderLight: '#e0e0e0',

    completedOpacity: 0.6,
} as const

export type Colors = typeof colors
