import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const option = ["DELETE"];

const Import = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = index => {
    props.deleteMake(index);
    handleClose();
  };

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
              <TableCell align="left">Make/Model</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, index) => {
              return (
                <TableRow key={make.MakeId}>
                  <TableCell align="right">{make.MakeId}</TableCell>
                  <TableCell align="left">{make.MakeName}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={handleClick}>
                      <MoreVert />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem onClick={handleDelete}>{option}</MenuItem>
                    </Menu>
                  </TableCell>
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
