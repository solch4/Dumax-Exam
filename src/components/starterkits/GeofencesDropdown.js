import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const geofences = [
  "Monterrey",
  "Ciudad de México",
  "Texas",
  "Los Angeles",
  "Laredo",
];

const GeofencesDropdown = () => {
  return (
    <FormGroup>
      <Label htmlFor="geofences">Geocerca *</Label>
      <Input id="geofences" name="geofences" type="select" required>
        {geofences.map((geofence) => (
          <option key={geofence}>{geofence}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default GeofencesDropdown;
