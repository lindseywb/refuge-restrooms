import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'
import PageHeader from '../../components/global/PageHeader'
import Container from '../../components/global/Container/Container'
import CityCard from '../../components/Cards/CityCard'

export default function City({posts}) {
    const cities = ['Philadelphia', 'New York', 'Boston', 'Chicago', 'Portland', 'Seattle']
    return (
        <>
        <Header />
        <PageHeader />
        <main>
            <Container width="wide">
                <h3>Select a city below:</h3>
            </Container>
            <Container type="grid" width="wide">
            {cities.map((city, index) => (
                <CityCard city={city} key={index} />
            ))}
            </Container>

            <Container>
                <h3>Most Recent:</h3>

                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>{post.name}</li>
                    ))}
                </ul>
            </Container>
        </main>

        <Footer />
        </>
    )
}

// Get a list of all the blog posts...
export async function getStaticProps() {

  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
