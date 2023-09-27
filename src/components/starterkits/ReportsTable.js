import React from "react";
import { Table } from "reactstrap";
import { differenceInMilliseconds } from "date-fns";

function getDuration(timeStamps) {
  const salida = new Date(timeStamps.salida);
  const entrada = new Date(timeStamps.entrada);
  const duration = differenceInMilliseconds(salida, entrada);
  const seconds = Math.floor(Math.floor(duration / 1000) % 60);
  const minutes = Math.floor(Math.floor(duration / (1000 * 60)) % 60);
  const hours = Math.floor(Math.floor(duration / (1000 * 60 * 60)));
  const formatedDuration = `${hours}:${minutes}:${seconds}`;

  return formatedDuration;
}

const ReportsTable = ({ reports }) => {
  return (
    <Table bordered borderless responsive striped>
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
        {reports.map((report) => {
          return (
            <tr key={report.nombreUnidad}>
              <td>{report.nombreUnidad}</td>
              <td>{report.nombreGeocerca}</td>
              <td>{report.tipoDeGeocerca}</td>
              <td>{report.timeStamps.entrada}</td>
              <td>{report.timeStamps.salida}</td>
              <td>{getDuration(report.timeStamps)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ReportsTable;
