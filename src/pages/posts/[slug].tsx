import Post, { PostProps } from '@/layout/post'
import { getPrismicClient } from '@/services/prismic'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { RichText } from 'prismic-dom'

export default function PostPage({ post }: PostProps) {
  return <Post post={post} />
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req })
  const { slug } = params

  // if(!session) {

  // }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }

  return {
    props: {
      post,
    },
  }
}
