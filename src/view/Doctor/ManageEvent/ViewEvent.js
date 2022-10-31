import React from "react";
import "./ViewEvent.css";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import axios from "axios";
import moment from "moment";
import { withRouter } from "react-router-dom";
class ViewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],
      resState: [],
      pageCurrent: [],
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
        "https://localhost:44369/api/SuKienHienMau?page=" + this.state.page,
        config
      );
      this.setState({
        data: res.data[1],
        resState: res.data[0],
        pageCurrent: res.data[2],
      });
      console.log(res.data[2]);
    } catch (err) {
      console.log(err);
    }
  };
  handleChangePage = (event) => {
    console.log(event.target.textContent);
    this.setState({
      page: event.target.textContent,
    });
    this.getData();
  };
  handleDetailButton = (event) => {
    console.log(event.target)
  }
  render() {
    
    var date;
    return (
      <div className="content-main">
        <div>
          <div id="table-name">DANH SÁCH SỰ KIỆN</div>
          <table className="ve-table">
            <thead className="ve-thead">
              <tr>
                <th class="ve-th" id="stt">
                  ID Sự kiện
                </th>
                <th class="ve-th" id="tensk">
                  Tên sự kiện
                </th>
                <th class="ve-th" id="nbd">
                  Ngày bắt đầu
                </th>
                <th class="ve-th" id="nkt">
                  Ngày kết thúc
                </th>
                <th class="ve-th" id="sltg">
                  Số lượng tham gia
                </th>
                <th class="ve-th" id="tuychinh">
                  Tùy chỉnh
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <tr className="ve-tr" key={index}>
                  <td className="ve-td">{item.iD_SK}</td>
                  <td className="tensk ve-td">{item.tenSK}</td>
                  <td className="time ve-td">
                    {
                      (date = moment(
                        new Date(item.thoiGian_BD.substring(0, 10))
                      ).format("DD/MM/YYYY"))
                    }
                  </td>
                  <td className="time ve-td">
                    {
                      (date = moment(
                        new Date(item.thoiGian_KT.substring(0, 10))
                      ).format("DD/MM/YYYY"))
                    }
                  </td>
                  <td className="ve-td">{item.tongSoLuongThamGia}</td>
                  <td className="ve-td">
                    <AiIcons.AiOutlineEye  className="ve-icon" color="blue" onClick={() => {
                        this.props.history.push('/doctor/view-event/'+item.iD_SK);
                    }}/>
                    <AiIcons.AiFillEdit className="ve-icon" color="orange" />
                    <BsIcons.BsTrash className="ve-icon" color="black" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="ve-btn-div">
            {[...Array(this.state.resState.data)].map((page, index) => 
              this.state.pageCurrent.page == (index + 1) ?
                <div key={index} className="ve-btn-page ve-active" onClick={this.handleChangePage} >
                {index + 1}
              </div> :
              <div key={index} className="ve-btn-page " onClick={this.handleChangePage} >
                {index + 1}
              </div>
            )
            }
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ViewEvent);
