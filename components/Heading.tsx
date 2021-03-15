import React from "react"

interface Props {
  children: string
  as: "h1" | "h2" | "h3" | "h4"
  className?: string
}

export function Heading({ children, as = "h1", className = "" }: Props) {
  const Component = as
  const hashes = "".padStart(Number(as.match(/\d/)[0]), "#")

  return (
    <Component className={"font-black inline-block " + className}>
      <span className="font-mono font-semibold italic">{hashes}</span>{" "}
      {children}
    </Component>
  )
}

function LinkedHeading({ children, ...props }: Props) {
  const id = children.replace(/\s/g, "-")

  return (
    <a id={id} href={`#${id}`} className="no-underline block">
      <Heading
        {...props}
        className="hover:bg-gradient-to-r hover:text-gradient border-b-4 border-gradient-to-r from-green-400 to-blue-500"
      >
        {children}
      </Heading>
    </a>
  )
}

export const Headings = {
  H1: ({ children }) => <LinkedHeading as="h1">{children}</LinkedHeading>,
  H2: ({ children }) => <LinkedHeading as="h2">{children}</LinkedHeading>,
  H3: ({ children }) => <LinkedHeading as="h3">{children}</LinkedHeading>,
  H4: ({ children }) => <LinkedHeading as="h4">{children}</LinkedHeading>,
}
