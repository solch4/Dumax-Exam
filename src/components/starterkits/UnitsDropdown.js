import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const units = ["Base 1525", "Base 1458", "Base 1258"];

const UnitsDropdown = () => {
  return (
    <FormGroup>
      <Label htmlFor="units">Unidades *</Label>
      <Input id="units" name="units" type="select" required>
        {units.map((unit) => (
          <option key={unit}>{unit}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default UnitsDropdown;
