export const pagesPath = {
  gomoku: {
    $url: (url?: { hash?: string }) => ({ pathname: '/gomoku' as const, hash: url?.hash })
  },
  sanmoku: {
    $url: (url?: { hash?: string }) => ({ pathname: '/sanmoku' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
