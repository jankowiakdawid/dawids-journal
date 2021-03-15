import hydrate from "next-mdx-remote/hydrate"
import Image from "next/image"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import readingTime from "reading-time"

import { readdir, readFile } from "fs/promises"
import { join } from "path"
import { Metadata } from "../../components/Metadata"
import { Heading, Headings } from "../../components/Heading"
import { Tweet } from "../../components/Tweet"
import { Link } from "../../components/Link"

const components = {
  img: Image,
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  a: Link,
  Tweet,
}

export default function Entry({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components,
  })

  return (
    <article className="prose lg:prose-xl mx-auto px-2">
      <h1 className="font-black">{frontMatter.title}</h1>
      <Metadata journal={frontMatter} />
      <div>{content}</div>
    </article>
  )
}

const root = process.cwd()

export async function getStaticPaths() {
  const files = await readdir(join(root, "journal"))

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const source = await readFile(
    join(root, "journal", params.slug + ".mdx"),
    "utf-8",
  )
  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components,
  })

  return {
    props: {
      mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        slug: params.slug,
        ...data,
      },
    },
  }
}
