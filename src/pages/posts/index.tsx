import Posts, { PostsProps } from '@/layout/posts'
import { getPrismicClient } from '@/services/prismic'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'

export default function PostsPage({ posts }: PostsProps) {
  return <Posts posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    { fetch: ['post.title', 'post.content'], pageSize: 100 }
  )

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(
          (content) => content.type === 'paragraph'
        )?.text ?? '',
      updatedAt: new Date(
        post.last_publication_date
      ).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return {
    props: {
      posts,
    },
  }
}
