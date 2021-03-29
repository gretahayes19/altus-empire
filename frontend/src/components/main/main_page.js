import React from 'react';
import './main_page.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { openModal } = this.props;
    debugger;

    return (
      <div className="main-page">
        <div className="main-page-div">
          <h1 className="main-page-logo">Altus Empire</h1>
          <div className="main-page-top-buttons">
            <button onClick={() => openModal('login')}>Already a member?</button>
            <button onClick={() => {}}>Business Login</button>
          </div>
          <div className="main-page-bottom-buttons">
            <button onClick={() => {}}>Under 21</button>
            <button onClick={() => openModal('signup')}>21+ Older</button>
          </div>
        </div>
        <footer className="main-page-footer">
          <div>

          </div>
          <div className="main-page-copyright">
            <p>Privacy Policy</p>    
            <p>Sitemap</p>
            <p>Copyright &copy; 2021 AE</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;