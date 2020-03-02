import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container
} from "@material-ui/core";

const Import = props => {
  return (
    <div>
      <Container>
        <h2 style={{ color: "blue" }}>COUNT: {props.makes.length}</h2>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">
          Import
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Make/Model</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, index) => {
              return (
                <TableRow key={make.MakeId}>
                  <TableCell align="right">{make.MakeId}</TableCell>
                  <TableCell align="right">{make.MakeName}</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Import;
