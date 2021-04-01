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
          <div className="main-page-logo">
            <div className="main-page-logo-pic">
            </div>
          </div>
          <div className="main-page-top-buttons-div">
            <div className="main-page-top-buttons">
              <button onClick={() => openModal("login")}>Already a member?</button>
              <button onClick={() => {}} disabled>Business Login</button>
            </div>
          </div>
          <div className="main-page-bottom-buttons">
              <button onClick={() => {}}>Under 21</button>
              <button onClick={() => openModal("signup")}>21+ Older</button>
          </div>
          <div className="developer-profiles">
            <h2 className="sentence">Start your journey with
            <div className="slidingVertical">
                <a href="https://www.linkedin.com/in/greta-hayes-4a5b4559/" target="_blank">Greta</a>
                <a href="https://www.linkedin.com/in/hank-chen-0846841b6/" target="_blank">Hank</a>
                <a href="https://www.linkedin.com/in/christine-yang-4204a67b/" target="_blank">Christine</a>
                <a href="https://www.linkedin.com/in/kevinxmao/" target="_blank">Kevin</a>
              </div>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;