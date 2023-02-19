import Section from "./Section"
import MenuButton from "./MenuButton"
import downIcon from './drop-down-icons/downIcon.svg'
import byVectorsIcon from './drop-down-icons/byVectorsIcon.svg'
import mycobacteriaIcon from './drop-down-icons/mycobacteriaIcon.svg'
import zoonosesIcon from './drop-down-icons/zoonosesIcon.svg'
import leftIcon from './drop-down-icons/leftIcon.svg'

function Menu () {
  //for dumb here make the translations :) and send the child components only for rendering data
  return (
    <>
      <Section title="ETV" iconName={byVectorsIcon} iconRight={downIcon}>
        <MenuButton title="Leishmaniasis" icon={leftIcon} />
        <MenuButton title="Malaria" icon={leftIcon} />
        <MenuButton title="Changas" icon={leftIcon} />
      </Section>
      <Section title="ZOONOSIS" iconName={zoonosesIcon} iconRight={downIcon}></Section>
      <Section title="MICOBACTERIAS" iconName={mycobacteriaIcon} iconRight={downIcon}></Section>
    </>
  )
}

export default Menu
