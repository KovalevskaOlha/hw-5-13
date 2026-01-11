import React, {Component} from "react";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = { showModal: false };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div className="App">
        <button className="open-btn" onClick={this.openModal}>
          Open!!!
        </button>

        <Modal isOpen={this.state.showModal} onClose={this.closeModal} />
      </div>
    );
  }
}

export default App;