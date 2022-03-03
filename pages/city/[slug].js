import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'
import PageHeader from '../../components/global/PageHeader'
import Container from '../../components/global/Container/Container'

export default function CityPost({post}) {
    console.log({post})
    return (
        <>
        <Header />
        <PageHeader />
        <main>
            <Container type="grid" width="wide">
                <p>Hello world</p>
            </Container>
        </main>

        <Footer />
        </>
    )
}

// Get a list of all the blog posts...
export async function getStaticPaths() {

  // Call an external API endpoint to get posts.
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/')

  // Turn the response into JSON.
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts.
  const paths = posts.map((post) => ({
    params: {
      slug: post.city.toString()
    }
  }))

  // Return a list of blog posts.
  return {
    paths,
    fallback: false // Means other routes should 404.
  }
}
// Query a single blog post...
export async function getStaticProps({ params }) {

  // Query blog post, based on `params.id`, generated from getStaticPaths()
  const res = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=200&offset=0&query=${params.slug}`)

  // Turn the response into JSON.
  const post = await res.json()

  // Pass data to the <Post /> component.
  return {
    props: { post }
  }
}
