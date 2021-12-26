import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Lawal",
        phone: "123-456",
        Address: { City: "Kano" },
        photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 2,
        name: "Lanre",
        phone: "657-456",
        Address: { City: "Ilorin" },
        photo: "https://picsum.photos/id/1050/60",
      },
      {
        id: 3,
        name: "Peter",
        phone: "396-456",
        Address: { City: "Ibadan" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 4,
        name: "Paul",
        phone: null,
        Address: { City: "Lokoja" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        Address: { City: "Lagos" },
        photo: "https://picsum.photos/id/1029/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-3 p-3">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2 bg-dark">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody> {this.getCustomerRow()} </tbody>
        </table>
      </div>
    );
  }
  // Executes when user make command
  onRefreshClick = () => {
    // Update the state using setState method- so that react can update from the DOM automatically
    this.setState({
      customersCount: 7,
    });
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return (
        <div className="bg-warning p-2" text-center>
          No Phone
        </div>
      );
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key="{cust.id}">
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.Address.City}</td>
        </tr>
      );
    });
  };
  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives he "Customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    // update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
