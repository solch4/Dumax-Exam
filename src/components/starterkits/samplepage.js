import React, { Fragment } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import {
  Container,
  Row,
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
import { useGetReport } from "../../hooks/useGetReport";
import UnitsDropdown from "./UnitsDropdown";
import GeofencesDropdown from "./GeofencesDropdown";
import CreateGeofence from "./CreateGeofence";
import ReportsTable from "./ReportsTable";

const dates = ["Q1", "Q2", "Q3", "Q4"];
const nOfEntries = [10, 15, 20];

const Samplepage = () => {
  const { data: reports, isLoading, error, fetchData } = useGetReport();

  const generateReport = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fields = Object.fromEntries(formData);
    await fetchData(fields);
  };

  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Sample Page" title="Sample Page" />
      <Container fluid={true}>
        {/* generar reporte */}
        <Card>
          <Form onSubmit={generateReport}>
            <Row>
              <Col md="3">
                <UnitsDropdown />
              </Col>

              <Col md="3">
                <GeofencesDropdown />
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label htmlFor="dates">Rangos de fechas *</Label>
                  <Input id="dates" name="dates" type="select" required>
                    {dates.map((date) => (
                      <option key={date}>{date}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                <Button disabled={isLoading} type="submit">
                  Generar reporte
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>

        <Row>
          {/* crear geocerca */}
          <CreateGeofence />
          {/* tabla reporte */}
          <Col md="8">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="4">
                    <Button>CSV</Button>
                    <Button>Excel</Button>
                    <Button>PDF</Button>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label for="nOfEntries" className="d-inline-flex">
                        Mostrar
                        <Input id="nOfEntries" name="nOfEntries" type="select">
                          {nOfEntries.map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </Input>
                        entradas
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label for="search">Buscar</Label>
                      <Input id="search" name="search" type="search" />
                    </FormGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {isLoading ? (
                  <h3>Cargando...</h3>
                ) : error ? (
                  <h3>Error:{error}</h3>
                ) : !reports ? (
                  <h3>Debes generar un reporte</h3>
                ) : (
                  <ReportsTable reports={reports} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Samplepage;
