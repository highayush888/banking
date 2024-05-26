import React from 'react';

const DemoModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Schedule Demo</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Your form elements */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />

                <label htmlFor="mobile">Mobile</label>
                <input type="text" className="form-control" id="mob" />

                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" />

                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" id="country" />

                <label htmlFor="state">Name</label>
                <input type="text" className="form-control" id="state" />
              </div>
              {/* Add more form fields as needed */}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
