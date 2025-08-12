import { Herosection } from "../shared/components/Home/Herosection";
import HelmetComponent from "./HelmetComponent";


export default function Hompage() {
  return (
    <>
      <HelmetComponent title={'Home - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org'} />
      <Herosection />
    </>
  );
}
