
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function() {
  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);

  const  handleClose = async () => setShow(false);
 
 


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Thêm nhân viên
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhân viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã số nhân viên</Form.Label>
            <Form.Control
              type="number"
              placeholder="1234"
              autoFocus
  
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="nguyen van a"
              autoFocus
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gm.uit.edu.vn"
              autoFocus
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="1234"
              autoFocus
             
            />
          </Form.Group>

						<div className="form-group">
  <div className="input-group">
   
    <select className="form-control" id="chucvu" >
      <option>Chọn chức vụ</option>
      <option>Sếp</option>
      <option>Trưởng phòng</option>
      <option>Nhân viên</option>
    </select>
  </div>
  <span className="sp-thongbao" id="tbChucVu" />
            </div>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  )
}
