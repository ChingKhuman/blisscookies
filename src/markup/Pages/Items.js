import React from 'react'
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';

const Items = ({description, title, img, price, amount}) => {
    return (
        <div>
            <table>
                <tbody>

                    <tr className="alert">

                        <td className="product-item-img">
                            <img src={img} alt="" />
                        </td>
                        <td className="product-item-name">{title}</td>
                        <td className="product-item-price">{price}</td>
                        <td className="product-item-quantity">
                            <div className="quantity btn-quantity max-w80">
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">

                                        <Form.Control as="select" custom>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>

                        </td>

                        <td className="product-item-totle">$28.00</td>
                        <td className="product-item-close">
                            <Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Items