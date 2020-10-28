import React from "react"
import DashHeader from "components/Headers/DashHeader"
import { Card, CardHeader, Container, Row, Col } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { dataTable } from "variables/general"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className='dataTables_length' id='datatable-basic_length'>
      <label>
        Show{" "}
        {
          <select
            name='datatable-basic_length'
            aria-controls='datatable-basic'
            className='form-control form-control-sm'
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
})

const Dashboard = () => {
  const { SearchBar } = Search

  return (
    <>
      <DashHeader />
      <Container className='mt--6' fluid>
        <Row>
          <Col lg='12'>
            <Card>
              <CardHeader>
                <h3 className='mb-0'>Account Holder's Information</h3>
                <p className='text-sm mb-0'>
                  You can start searching for a particular user by typing in the
                  search box .
                </p>
              </CardHeader>
              <ToolkitProvider
                data={dataTable}
                keyField='name'
                columns={[
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "position",
                    text: "Occupation",
                    sort: true,
                  },
                  {
                    dataField: "office",
                    text: "Office",
                    sort: true,
                  },
                  {
                    dataField: "age",
                    text: "Age",
                    sort: true,
                  },
                  {
                    dataField: "start_date",
                    text: "Start date",
                    sort: true,
                  },
                  {
                    dataField: "salary",
                    text: "Loan",
                    sort: true,
                  },
                ]}
                search
              >
                {(props) => (
                  <div className='table-responsive mt-3 '>
                    <Container fluid>
                      <Row>
                        <Col md={10}>
                          <div
                            id='datatable-basic_filter'
                            className='dataTables_filter pb-1'
                          >
                            <label>
                              Search:
                              <SearchBar
                                className='form-control-sm'
                                placeholder=''
                                {...props.searchProps}
                              />
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      id='react-bs-table'
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
