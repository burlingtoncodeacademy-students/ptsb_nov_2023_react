import "./App.css";

import { useState } from "react";

import {
  Button,
  FormGroup,
  Collapse,
  CardBody,
  Card,
  Label,
  Input,
  FormFeedback,
  FormText,
  UncontrolledPopover,
  PopoverBody,
  Spinner,
  PopoverHeader,
  Form,
  Fade,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
  ToastBody,
  UncontrolledAlert,
} from "reactstrap";

const MyCustomButton = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}</button>
  );
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleCollapse = () => setShowCollapse((prev) => !prev);
  const toggleToast = () => setShowToast((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <h1>Reactstrap</h1>
      <h2>Buttons</h2>
      {/* <MyCustomButton color="red">Click Me!</MyCustomButton>
      <MyCustomButton color="blue">Click Me!</MyCustomButton>
      <MyCustomButton color="green">Click Me!</MyCustomButton> */}

      <Button color="primary" size="sm">
        Click me!
      </Button>
      <Button color="success" outline={true}>
        Click me!
      </Button>
      <Button color="danger" size="lg">
        Click me!
      </Button>

      <Form className="form-col" onSubmit={(e) => e.preventDefault()}>
        <h2>Inputs</h2>
        <FormGroup floating>
          <Input
            required
            valid={isValid}
            invalid={!isValid}
            onKeyUp={(e) => {
              setIsValid(e.target.validity.valid);
            }}
            name="email"
            type="email"
            placeholder="Email"
            minLength={8}
            id="example1"
          />
          <Label htmlFor="example1">Email</Label>
          <FormFeedback tooltip valid>
            Will show if input is valid
          </FormFeedback>
          <div className="form-col">
            <FormText>Example help text, that remains unchanged</FormText>
            <Button type="submit" color="success">
              Submit
            </Button>
          </div>
        </FormGroup>
      </Form>
      <FormGroup>
        <Label htmlFor="exampleDate">Date</Label>
        <Input id="exampleDate" name="date" type="date" />
      </FormGroup>

      <Button onClick={toggleCollapse} color="warning">
        Toggle Collapse
      </Button>

      <Collapse isOpen={showCollapse}>
        <Card>
          <CardBody>Yay it is a card</CardBody>
        </Card>
      </Collapse>

      <Button type="button" id="UncontrolledPopover" color="success">
        Launch Popover
      </Button>

      <UncontrolledPopover placement="top" target="UncontrolledPopover">
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>I will pop up as a small message window!</PopoverBody>
      </UncontrolledPopover>

      <Button onClick={toggleToast} color="primary">
        Show/Hide Toast
      </Button>
      <Fade timeout={500} in={showToast}>
        <Toast isOpen={showToast}>
          <ToastHeader icon="primary" toggle={toggleToast}>
            New Message
          </ToastHeader>
          <ToastBody>Error signing up?</ToastBody>
        </Toast>
      </Fade>

      <UncontrolledAlert color="info">
        I am an alert and I can be dismissed
      </UncontrolledAlert>

      <h2>Spinners</h2>
      <Spinner size="lg" type="grow" className="m-5" color="primary" />

      <Spinner size="sm" type="border" className="m-5" color="success" />

      <div>
        <Button outline={true} color="info" onClick={toggleModal}>
          Toggle Modal
        </Button>
        <Modal centered={true} isOpen={showModal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>

          <ModalBody>Enter user info</ModalBody>

          <ModalFooter>
            <Button>Do something</Button>
            <Button color="danger" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default App;
