import React from "react";
import "./profile-styles.scss";
import { PROFILE_INFO } from "./profile-data";

class ProfilePage extends React.Component {
  constructor() {
    super();

    this.state = {
      employeeData: PROFILE_INFO.Employees,
    };
  }

  render() {
    return (
      <div>
        <table>
          {this.state.employeeData.map((data, id) => {
            return (
              <tr>
                <td>{data.userId}</td>
                <td>{data.jobTitleName}</td>
                <td>{data.phoneNumber}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default ProfilePage;
