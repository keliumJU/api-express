import Section from "./Section"
import MenuButton from "./MenuButton"

function Menu () {
  return (
    <>
      <Section title="ETV">
        <MenuButton title="Leishmaniasis" />
        <MenuButton title="Malaria" />
        <MenuButton title="Changas" />
      </Section>
      <Section title="ZOONOSIS"></Section>
      <Section title="MICOBACTERIAS"></Section>
    </>
  )
}

export default Menu
