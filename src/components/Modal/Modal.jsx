import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
// app {showModal && <Modal closeModal={this.toggleModal}>Children</Modal>}
export default function Modal({ closeModal, children }) {
  const modalRoot = document.querySelector('#modal-root');
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', handlePressESC);
    return () => {
      console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        {children}
        <button onClick={handleBackdropClick}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}

// export default class Modal extends Component {
//     componentDidMount() {
//       console.log('Modal componentDidMount');
//       window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//       console.log('Modal componentWillUnmount');
//       window.removeEventListener('keydown', this.handleKeyDown);
//     }

//     handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         console.log('Нажали ESC, нужно закрыть модалку');
//         this.props.onClose();
//       }
//     };

//     handleBackdropClick = event => {
//       if (event.currentTarget === event.target) {
//         this.props.onClose();
//       }
//     };

//     render() {
//       return createPortal(
//         <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
//           <div className="Modal__content">
//             {this.props.children}
//             <button onClick={this.handleBackdropClick}>Close</button>
//           </div>
//         </div>,
//         modalRoot
//       );
//     }
//   }
