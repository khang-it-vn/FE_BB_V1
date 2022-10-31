import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./DetailEvent.css";
import styled from "styled-components";
import moment from "moment";

const Button = styled.button`
  position: fixed;
  right: 42px;
  top: 15px;
  background-color: white;
  color: black;
  border-radius: none;
  height: 30px;
  text-align: center;
  padding: 8px;
`;
class DetailEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sukien: this.props.match.params.idsk,
      data: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    let token = localStorage.getItem("accessToken");
    token = "Bearer " + token.substring(1, token.length - 1);
    const config = {
      headers: { Authorization: token },
    };
    try {
      const res = await axios.get(
        "https://localhost:44369/api/SuKienHienMau/Detail?idsk=" +
          this.state.sukien,
        config
      );

      this.setState({
        data: res.data[0].data,
      });
      console.log(this.state.data);
    } catch (err) {
      console.log(err);
    }
  };
  handleBackPage = () => {
    console.log(this.props);
    this.props.history.push(`/doctor/view-event`);
  };
  render() {
    var date;
    return (
      <div className="content-main">
        <table className="dt-table">
          <thead className="dt-table-title">
            <tr>
              <th>
                Sự kiện: {this.state.data != null && this.state.data.tenSK}
              </th>
            </tr>
          </thead>
          <tbody className="dt-table-body">
            <tr>
              <td className="dt-table-td">
                <table className="dt-table-child">
                  <thead className="dt-table-child-head">
                    <tr>
                      <th className="dt-table-child-th">Ngày diễn ra</th>
                      <th className="dt-table-child-th">Khung giờ</th>
                      <th className="dt-table-child-th">Số lượng đăng ký</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="dt-table-child-tr">
                      <td className="dt-table-child-td">
                        {this.state.data != null &&
                          moment(
                            new Date(
                              this.state.data.thoiGian_BD.substring(0, 10)
                            )
                          ).format("DD/MM/YYYY")}{" "}
                        -{" "}
                        {this.state.data &&
                          moment(
                            new Date(
                              this.state.data.thoiGian_KT.substring(0, 10)
                            )
                          ).format("DD/MM/YYYY")}
                      </td>
                      <td className="dt-table-child-td">
                        {this.state.data != null &&
                          moment(
                            this.state.data.thoiGian_BD.substring(10),'h:mm a'
                          ).format("h:mm a")}{" "}
                        -{" "}
                        {this.state.data &&
                          moment(
                            this.state.data.thoiGian_KT.substring(10),'h:mm a'
                          ).format("h:mm a")}
                      </td>
                      <td className="dt-table-child-td">
                        {this.state.data != null &&
                          this.state.data.tongSoLuongThamGia}
                        (danh sách)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="dt-table-td">
                <ul>
                  Địa chỉ diễn ra: <br />
                  {this.state.data != null &&
                    this.state.data.dCs
                      .split(";")
                      .map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="dt-table-td">
                Mô tả: <br />
                {this.state.data != null && this.state.data.moTa}
              </td>
            </tr>
          </tbody>
        </table>
        <Button className="dt-back" onClick={this.handleBackPage}>
          Trở về
        </Button>
      </div>
    );
  }
}

export default withRouter(DetailEvent);
