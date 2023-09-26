import React from "react";
import { Table } from "reactstrap";

const ReportsTable = ({ reports }) => {
  return (
    <Table bordered borderless hover responsive striped>
      <thead>
        <tr>
          <th>Nombre de la unidad</th>
          <th>Geocerca</th>
          <th>Tipo de geocerca</th>
          <th>Fecha de entrada</th>
          <th>Fecha de salida</th>
          <th>Duración</th>
        </tr>
      </thead>

      <tbody>
        {reports.map((report) => (
          <tr key={report.nombreUnidad}>
            <td>{report.nombreUnidad}</td>
            <td>{report.nombreGeocerca}</td>
            <td>{report.tipoDeGeocerca}</td>
            <td>{report.timeStamps.entrada}</td>
            <td>{report.timeStamps.salida}</td>
            <td>---</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReportsTable;
