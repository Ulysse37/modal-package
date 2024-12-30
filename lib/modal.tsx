import React from 'react';
import './modal.css';

interface CloseCrossProps {
  // Pas de props nécessaires pour ce composant
}

const CloseCross: React.FC<CloseCrossProps> = () => {
  // Svg de la croix permettant de fermer la modal
  return (
    <svg viewBox="0 0 60 60" version="1.1" width="30px" height="30px">
      <g>
        <path fill="#010101" d="M 21.5,-0.5 C 26.8333,-0.5 32.1667,-0.5 37.5,-0.5C 42.065,1.4539 46.3983,3.9539 50.5,7C 54.4151,11.3435 57.4151,16.1768 59.5,21.5C 59.5,26.8333 59.5,32.1667 59.5,37.5C 57.5461,42.065 55.0461,46.3983 52,50.5C 47.6565,54.4151 42.8232,57.4151 37.5,59.5C 32.1667,59.5 26.8333,59.5 21.5,59.5C 16.935,57.5461 12.6017,55.0461 8.5,52C 4.58492,47.6565 1.58492,42.8232 -0.5,37.5C -0.5,32.1667 -0.5,26.8333 -0.5,21.5C 1.4539,16.935 3.9539,12.6017 7,8.5C 11.3435,4.58492 16.1768,1.58492 21.5,-0.5 Z" />
      </g>
      <g>
        <path fill="#f7f7f7" d="M 20.5,19.5 C 23.7485,21.4033 26.7485,23.7366 29.5,26.5C 31.9837,24.517 34.3171,22.3504 36.5,20C 38.6667,19.5 39.5,20.3333 39,22.5C 36.6496,24.6829 34.483,27.0163 32.5,29.5C 34.483,31.9837 36.6496,34.3171 39,36.5C 39.5,38.6667 38.6667,39.5 36.5,39C 34.3171,36.6496 31.9837,34.483 29.5,32.5C 27.0163,34.483 24.6829,36.6496 22.5,39C 20.3333,39.5 19.5,38.6667 20,36.5C 22.3504,34.3171 24.517,31.9837 26.5,29.5C 24.517,27.0163 22.3504,24.6829 20,22.5C 19.5304,21.4232 19.6971,20.4232 20.5,19.5 Z" />
      </g>
    </svg>
  );
};

interface ModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, message, onClose }) => {
  return (
    <>
      {open && (
        <div className="modal-overlay">
          <dialog open={open} className="validation-modal">
            <p>{message}</p>
            <button onClick={onClose}>
              <CloseCross />
            </button>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Modal;