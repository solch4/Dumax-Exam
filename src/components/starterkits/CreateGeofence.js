import React from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
} from "reactstrap";
import { useCreateGeofence } from "../../hooks/useCreateGeofence";
import GeofencesDropdown from "./GeofencesDropdown";
import UnitsDropdown from "./UnitsDropdown";

const CreateGeofence = () => {
  const { isLoading, postData } = useCreateGeofence();

  const createGeofence = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fields = Object.fromEntries(formData);
    await postData(fields);
  };

  return (
    <Col md="4">
      <Card>
        <Form onSubmit={createGeofence}>
          <CardHeader>
            <h5>Crear geocerca</h5>
          </CardHeader>
          <CardBody>
            <GeofencesDropdown />

            <UnitsDropdown />

            <FormGroup>
              <Label htmlFor="unitName">Nombre de la unidad</Label>
              <Input id="unitName" name="unitName" type="text" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="license">Licencia del chofer</Label>
              <Input id="license" name="license" type="text" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email chofer</Label>
              <Input id="email" name="email" type="email" />
            </FormGroup>

            <Button disabled={isLoading} type="submit">
              Crear geocerca
            </Button>
          </CardBody>
        </Form>
      </Card>
    </Col>
  );
};

export default CreateGeofence;
