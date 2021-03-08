import NextLink from "next/link"

export function Link(props) {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
