import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white bg-opacity-60 sticky top-0 bg-blur">
      <nav className="mx-auto max-w-7xl py-4 mb-2 px-2">
        <Link href="/">
          <a className="font-serif font-black text-xl">Dawid's Journal</a>
        </Link>
      </nav>
    </header>
  )
}
