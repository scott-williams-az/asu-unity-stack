import React, {useEffect} from "react";
/**
 *
 * TODO: Should we be using bootstrap's built in modal functionality?
 */

export const Modal: React.FC = () => {

  useEffect(() => {
      document
        ?.getElementById('openModalButton')
        .addEventListener('click', function () {
          document.getElementById('uds-modal').classList.add('open');
        });

      document
        ?.getElementById('closeModalButton')
        .addEventListener('click', function () {
          document.getElementById('uds-modal').classList.remove('open');
        });
  }, []);

  return (
    <div className="container-fluid">
      <button id="openModalButton" className="btn btn-dark">
        Show modal
      </button>

      <div id="uds-modal" className="uds-modal">
        <div className="uds-modal-container">
          <button
            id="closeModalButton"
            className="uds-modal-close-btn"
            data-ga-name="onclick"
            data-ga-event="modal"
            data-ga-action="close"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="modal name/title"
            data-ga="close cross"
          >
            <i className="fas fa-times"></i>
            <span className="visually-hidden">Close</span>
          </button>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          <button className="btn btn-primary">button</button>
        </div>
      </div>
    </div>
  );
};
