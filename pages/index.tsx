import Link from "next/link"
import { readdir, readFile } from "fs/promises"
import matter from "gray-matter"
import { join } from "path"
import readingTime from "reading-time"
import { Metadata } from "../components/Metadata"

export default function Index({ journals }) {
  return (
    <div className="max-w-prose mx-auto px-2 text-xl">
      {journals.map((journal) => (
        <div className="mb-20" key={journal.title}>
          <Link href={`/journal/${journal.slug}`}>
            <a>
              <article>
                <h4 className="font-black text-2xl">{journal.title}</h4>
                <Metadata journal={journal} />
              </article>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

const root = process.cwd()

export async function getStaticProps() {
  const filePaths = await readdir(join(root, "journal"))

  const promisedFiles = filePaths.map(async (path) => {
    const source = await readFile(join(root, "journal", path), "utf-8")
    const { data, content } = matter(source)

    return {
      ...data,
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: path.replace(".mdx", ""),
    }
  })

  const journals = await Promise.all(promisedFiles)
  journals.sort((left, right) => (left.slug < right.slug ? 1 : -1))

  return { props: { journals } }
}
