import TweetEmbed from "react-tweet-embed"

interface Props {
  id: string
}

export function Tweet({ id }: Props) {
  return <TweetEmbed id={id} placeholder={Placeholder} />
}

function Placeholder() {
  return <div className="w-14 h-14 animate-pulse rounded-lg bg-gray-300" />
}
