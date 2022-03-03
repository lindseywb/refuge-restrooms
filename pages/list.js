import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import PageHeader from '../components/global/PageHeader'
import Container from '../components/global/Container/Container'
import Link from 'next/link'

export default function List({posts}) {

  return (
    <>
      <Header />
      <PageHeader />
      <main>
        <Container width="wide">
          <h3>List:</h3>
        </Container>

        <div className='postsList'>

        <ul>
        {posts.map((post, index) => (
            <li key={index}>
                <Link as={`/bathroom/${post.id}`} href="bathroom/[id]">
                    <a>{post.name}</a>
                </Link>
            </li>
        ))}
        </ul>
        </div>
        </main>

      <Footer />
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/?page=1&per_page=100&offset=0')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
