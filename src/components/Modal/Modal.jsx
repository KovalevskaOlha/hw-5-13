import React, { Component } from "react";


class Modal extends Component {
  state = {
    isOpen: this.props.isOpen,
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.closeModal();
    }
  };

  closeModal = () => {
    this.setState({ isOpen: false });
    this.props.onClose();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    if (!this.state.isOpen) return null;

    return (
      <div className="modal-overlay" onClick={this.closeModal}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Modal window</h2>
          <img src="https://i.pinimg.com/1200x/06/7a/9b/067a9be78604a82983c7c405f0c9e109.jpg" alt="img-modal"></img>

          <button
            className="modal-close-btn"
            onClick={this.closeModal}
          >
            close!!👹
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
