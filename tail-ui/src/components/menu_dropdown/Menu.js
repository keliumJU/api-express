import Section from "./Section"
import MenuButton from "./MenuButton"
import caretDownIcon from './drop-down-icons/caretDownIcon.svg'
import transmitedByVectorsIcon from './drop-down-icons/transmitedByVectorsIcon.svg'
import mycobacteriaIcon from './drop-down-icons/mycobacteriaIcon.svg'
import zoonosesIcon from './drop-down-icons/zoonosesIcon.svg'
import fordwardIcon from './drop-down-icons/fordwardIcon.svg'

function Menu () {
  //for dumb here make the translations :) and send the child components only for rendering data
  return (
    <>
      <Section title="ETV" iconName={transmitedByVectorsIcon} iconRight={caretDownIcon}>
        <MenuButton title="Leishmaniasis" icon={fordwardIcon} />
        <MenuButton title="Malaria" icon={fordwardIcon} />
        <MenuButton title="Changas" icon={fordwardIcon} />
      </Section>
      <Section title="ZOONOSIS" iconName={zoonosesIcon} iconRight={caretDownIcon}></Section>
      <Section title="MICOBACTERIAS" iconName={mycobacteriaIcon} iconRight={caretDownIcon}></Section>
    </>
  )
}

export default Menu
