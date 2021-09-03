import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { IoTrash } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoInformation } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;

const text = {
  textDecoration: "none",
};

const icons = {
  fontSize: "18px",
};

const style = {
  justifyContent: "space-evenly",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
};

const styleSearch = {
  justifyContent: "flex-end",
  display: "flex",
  paddingBottom: "8px",
};

const createBtn = {
  display: "flex",
  alignItems: "center",
};

const styleImg = {
  width: "50%",
};

const body = {
  width: "85%",
  fontSize: "12px",
};

function imgFormatter(cell) {
  return <img style={styleImg} src={cell}></img>;
}

const handleClick = (dispatch, id) => {
  console.log(id);
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data Product berhasil dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => ({
  getUserList: state.users.getUserList,
  errorUserList: state.users.errorUserList,
});

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
      align: "center",
      headerStyle: () => {
        return { width: "10%", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
      align: "center",
      headerStyle: () => {
        return { width: "10%", textAlign: "center" };
      },
    },
    {
      dataField: "qty",
      text: "Quantity",
      sort: true,
      align: "center",
      headerStyle: () => {
        return { width: "5%", textAlign: "center" };
      },
    },
    {
      dataField: "picture",
      text: "Picture",
      align: "center",
      formatter: imgFormatter,
      headerStyle: () => {
        return { width: "10%", textAlign: "center" };
      },
    },
    {
      dataField: "expiredAt",
      text: "Expired Date",
      sort: true,
      align: "center",
      headerStyle: () => {
        return { width: "15%", textAlign: "center" };
      },
    },
    {
      dataField: "isActive",
      text: "Is Active",
      align: "center",
      formatter: (cellContent, row) => (
        <div className="checkbox disabled">
          <label>
            <input type="checkbox" checked={row.isActive} />
          </label>
        </div>
      ),
      headerStyle: () => {
        return { width: "5%", textAlign: "center" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      align: "center",
      headerStyle: () => {
        return { width: "20%", textAlign: "center" };
      },
      formatter: (rowContent, row) => {
        return (
          <div style={style}>
            <Link to={"detail/" + row.id} style={text}>
              <Button color="dark" style={style} className="mr-2">
                <IoInformation style={icons} /> Detail
              </Button>
            </Link>
            <Link to={"edit/" + row.id} style={text}>
              <Button color="dark" style={style} className="mr-2">
                <IoCreate style={icons} /> Edit
              </Button>
            </Link>
            <Link to={"/"} style={text}>
              <Button
                color="dark"
                style={style}
                className="mr-2"
                onClick={() => handleClick(props.dispatch, row.id)}
              >
                <IoTrash style={icons} /> Delete
              </Button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <Container style={body}>
      {props.getUserList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUserList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col style={createBtn}>
                  <Link to="/create" style={text}>
                    <Button style={style}>
                      <IoAddCircleSharp />
                      Create Data
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div style={styleSearch}>
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Cari Nama Produk..."
                    />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                filter={filterFactory()}
                noDataIndication="Table is Empty"
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          <Spinner color="dark" />
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
