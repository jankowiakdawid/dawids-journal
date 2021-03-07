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
      <p className="font-mono my-3">{journal.summary}</p>
      <p className="font-mono text-sm text-gray-600 flex justify-between">
        <span>
          {journal.wordCount} words, {journal.readingTime.text}
        </span>
        <span>{journal.published}</span>
      </p>
    </>
  )
}
