import NextLink from "next/link"

export function Link(props) {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))
  const className =
    "no-underline leading-5 border-b-2 hover:bg-gradient-to-r hover:text-gradient border-gradient-to-r from-green-400 to-blue-500 inline-block"

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} className={className} />
      </NextLink>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={className}
    />
  )
}
