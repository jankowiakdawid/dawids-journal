interface Props {
  journal: {
    summary: string
    wordCount: number
    readingTime: {
      text: string
    }
    published: string
  }
}

export function Metadata({ journal }: Props) {
  return (
    <>
      <p className="font-mono my-3 text-base text-gray-700">
        {journal.summary}
      </p>
      <p className="font-mono text-sm text-gray-600 flex justify-between">
        <span>
          {journal.wordCount} words, {journal.readingTime.text}
        </span>
        <time dateTime={journal.published}>{journal.published}</time>
      </p>
    </>
  )
}
