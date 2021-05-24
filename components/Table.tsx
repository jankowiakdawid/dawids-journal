type Props = {
  children: React.ReactNode
}

export function Table({ children }: Props) {
  return (
    <div className="overflow-x-scroll">
      <table>{children}</table>
    </div>
  )
}
