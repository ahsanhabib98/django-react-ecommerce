import React from "react";
import { Container, Header, Icon, Label, Menu, Table } from 'semantic-ui-react';
import {authAxios} from "../utils";
import {orderSummaryURL} from "../constants";
import {cartFail, cartSuccess} from "../store/actions/cart";


class OrderSummary extends React.Component {

    state = {
        data: null,
        error: null,
        loading: false
    };

    componentDidMount() {
        this.handleFetchOrder();
    }

    handleFetchOrder = () => {
        this.setState({ loading: true });
        authAxios.get(orderSummaryURL)
          .then(res => {
            this.setState({ data: res.data, loading: false });
          })
          .catch(err => {
            this.setState({ error: err, loading: false });
          });
    };

    render() {

        return (
            <Container>
                <Header as='h3'> Order Summary</Header>
                <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Label ribbon>First</Label>
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                          <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                              <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                              <Icon name='chevron right' />
                            </Menu.Item>
                          </Menu>
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
        )
    }
}

export default OrderSummary;