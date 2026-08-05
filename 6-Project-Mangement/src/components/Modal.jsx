import React, { useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  const portalTarget = document.getElementById('modal-root');

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    portalTarget
  );
});

export default Modal;