import React, { useState } from 'react';

const ModalWithForm = (props) => {
  const [email, setEmail] = useState('');
  const [exampleSelect, setExampleSelect] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSelectChange = (e) => {
    setExampleSelect(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
        Schedule Demo
      </button>

      {showModal? (
        <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form inside the modal */}
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={exampleSelect} onChange={handleSelectChange}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWithForm;