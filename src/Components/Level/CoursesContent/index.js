import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class CoursesContent extends Component {
  render() {
    return (
      <div className="col-12 content-container mt-5">
        <div className="col-12 content-header">
          <div className="row">
            <div className="col-6 text-right" style={{ fontSize: "40px" }}>
              أساسيات اللغة
            </div>
            <div className="col-6 text-left">
              <button className="col-5 ml-4 content-start-btn">
                <Link
                  to={
                    this.props.levels[0].isAvailable &&
                    `/level/${this.props.levels[0].id}`
                  }
                  style={{ color: "#1fc997", textDecoration: "none" }}
                >
                  ابدأ التحدي
                </Link>
              </button>
              <Link
                to={"/levels"}
                style={{ color: "#16ab7f", textDecoration: "none" }}
              >
                <span
                  className=" mr-4"
                  style={{ fontSize: "30px", color: "#fff" }}
                >
                  رجوع
                </span>
                <button className="col-1 ml-1 content-back-btn">
                  <FontAwesomeIcon
                    style={{ color: "#fff", fontSize: "40px" }}
                    icon={faAngleLeft}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <h1 style={{ color: "#c9c9c9" }}>هنا نكتب المحتوى ..</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    levels: state.levelsReducer.levels
  };
};

export default connect(mapStateToProps)(CoursesContent);
