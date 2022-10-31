import React from "react";
import "./AddEvent.css";
import { CKEditor } from "ckeditor4-react";
import styled from "styled-components";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
const Input = styled.input`
  width: 1200px;
  margin: 15px 0px 5px 0px;
  height: 34px;
  border: 0.2px solid rgb(85, 26, 129);
  border-radius: 0;
`;

class AddEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tenSK: "",
      moTa: "",
      thoiGian_BD: "",
      thoiGian_KT: "",
      dCs: "",
    };
    this.onEditorChange = this.onEditorChange.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  onEditorChange(evt) {
    this.setState({
      moTa: evt.editor.getData(),
    });
    console.log(this.state);
  }

  handleChangeData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  checkTokenExpirationMiddleware = (store) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    if (jwt_decode(token).exp < Date.now() / 1000) {
      localStorage.clear();
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let token = localStorage.getItem("accessToken");
      token = "Bearer " + token.substring(1, token.length - 1);
      const config = {
        headers: { Authorization: token },
      };
      console.log(this.state);
      const res = await axios.post(
        "https://localhost:44369/api/SuKienHienMau",
        this.state,
        config
      );
      if (res && res.data) {
        this.handleSuccess();
        this.setState({
          tenSK: "",
          moTa: "",
          thoiGian_BD: "",
          thoiGian_KT: "",
          dCs: "",
        });
        NotificationManager.success(
          "Thêm sự kiện thành công",
          "BloodBank System"
        );
      } else {
        NotificationManager.warning(
          "Dữ liệu khởi tạo bị lỗi",
          "BloodBank System",
          3000
        );
      }
    } catch (error) {
      NotificationManager.warning(
        "Không thành công, có lỗi xảy ra",
        "BloodBank System",
        3000
      );
      console.log(error);
    }
  };

  setTimeZoneLocal = () => {
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };
  handleSuccess = () => {
    document.getElementById("dCs").value = "";
    document.getElementById("thoiGian_KT").value = this.setTimeZoneLocal();
    document.getElementById("thoiGian_BD").value = this.setTimeZoneLocal();
    document.getElementById("tenSK").value = "";
  };

  render() {
    return (
      <div className="content-main">
        <form className="form-add-event">
          <div className="form-element-title">TẠO SỰ KIỆN HIẾN MÁU</div>
          <table className="table-main">
            <tbody>
              <tr>
                <td>
                  <label htmlFor>Tên sự kiện:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    placeholder="Tên sự kiện"
                    name="tenSK"
                    id="tenSK"
                    onChange={this.handleChangeData}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor>Thời gian bắt đầu:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    type="datetime-local"
                    name="thoiGian_BD"
                    id="thoiGian_BD"
                    onChange={this.handleChangeData}
                    value={this.setTimeZoneLocal()}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor>Thời gian kết thúc:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    type="datetime-local"
                    name="thoiGian_KT"
                    id="thoiGian_KT"
                    onChange={this.handleChangeData}
                    value={this.setTimeZoneLocal()}
                  />
                </td>
              </tr>
              <tr id="dc">
                <td>
                  <label htmlFor>Địa chỉ tổ chức:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    placeholder="Những địa điểm tổ chức"
                    name="dCs"
                    id="dCs"
                    defaultValue={""}
                    onChange={this.handleChangeData}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Mô tả:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <CKEditor
                    id="moTa"
                    data="<p>Nội dung không quá 2000 ký tự</p>"
                    onChange={this.onEditorChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="submit"
                    type="submit"
                    defaultValue="Tạo sự kiện"
                    onClick={this.handleSubmit}
                  />
                  <NotificationContainer />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default withRouter(AddEvent);
