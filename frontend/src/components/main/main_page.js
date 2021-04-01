import React from 'react';
import '../../styles/main_page.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  render() {
    const { openModal } = this.props;

    return (
      <div className="main-page">
        <div className="main-page-div">
          <div className="main-page-top-buttons-div">
            <div className="main-page-top-buttons">
              {/* <div className="top-buttons"> */}
              <button onClick={() => openModal("login")}>Already a member?</button>
              <button onClick={() => { }} disabled>Business Login</button>
              {/* </div> */}
            </div>
          </div>
            <div className="main-page-logo-pic">
            </div>


          <div className="main-page-bottom-buttons">
              <button onClick={() => openModal("under21")}>Under 21</button>
              <button onClick={() => openModal("signup")}>21+ Older</button>
          </div>

        </div>
      </div>
    );
  }
}

export default MainPage;