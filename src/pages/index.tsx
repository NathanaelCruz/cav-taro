import Card from "../components/Card";
import { HomeTitle, SubTitle } from '../styles/pages/home'
import Stars from '../components/Stars'

export default function Home() {
  return (
    <>
      <HomeTitle className="l-home__title">CAV TARÔ</HomeTitle>
      <SubTitle className="c-subtitle">Veja qual sua armadura destinada!</SubTitle>
      <Card></Card>
      <Stars></Stars>
    </>
  )
}
