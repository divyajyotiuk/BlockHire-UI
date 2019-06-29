import React, { Component } from "react";
import {
  Button,
  Grid,
  Image,
  Segment,
  Label,
  Modal,
  Step,
  Header,
  Icon
} from "semantic-ui-react";

class Experience extends Component {
  state = {};
  render() {
    return (
      <Segment size="large" style={{ marginTop: 50 }}>
        <Button>Add Experience</Button>
        <AddExperience />
      </Segment>
    );
  }
}

const AddExperience = () => (
  <Grid>
    <Grid.Column width={11}>
      <Modal
        trigger={<Label as="a" attached="top right" icon="edit outline" />}
      >
        <DocUpload />
      </Modal>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Grid.Column>
    <Grid.Column width={5}>
      <Stepper />
    </Grid.Column>
  </Grid>
);

const DocUpload = () => (
  <Segment placeholder>
    <div>
      <Header icon>
        <Icon name="pdf file outline" />
        No documents are listed for this customer.
      </Header>
    </div>
    <div>
      <Button primary>Add Document</Button>
    </div>
  </Segment>
);

class Stepper extends Component {
  state = {};
  render() {
    return (
      <Step.Group ordered vertical>
        <Step completed>Requested</Step>
        <Step disabled>Validated</Step>
      </Step.Group>
    );
  }
}

export default Experience;
