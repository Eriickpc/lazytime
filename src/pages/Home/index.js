import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import Container from "../../components/Container";
import DivCards from "../../components/DivCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => {
          return (
            <Category category={category}>
              <DivCards>
                <Carousel>
                  {filterCategory(index).map((el) => (
                    <Card id={el.id} key={el.id}></Card>
                  ))}
                </Carousel>
              </DivCards>
            </Category>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
