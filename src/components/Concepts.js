import ConceptItem from "./ConceptItem";
import Card from './UI/Card';

function Concepts(props) {
  return (
    <Card>
      <ConceptItem item={props.concepts[0]}/>
      <ConceptItem item={props.concepts[1]}/>
      <ConceptItem item={props.concepts[2]}/>
    </Card>
  );
}

export default Concepts;