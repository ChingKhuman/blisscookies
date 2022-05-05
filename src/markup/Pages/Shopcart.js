import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';
import { products } from './products';
import Items from './Items';

var img = require('./../../images/banner/bnr3.jpg');

const Shopcart =() => {

	const [item, setItem] = useState(products);
		return(
			<>
			<Header />
			
			 <div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Cart</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Shop Cart</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="table-responsive m-b50">
									<table className="table check-tbl">
										<thead>
											<tr>
												<th>Product</th>
												<th>Product name</th>
												<th>Unit Price</th>
												<th>Quantity</th>
												<th>Total</th>
												<th>Close</th>
											</tr>
										</thead>
										<tbody>
										{
												item.map((curItem)=> {
													return<Items key={curItem.id } {...curItem}/>
												})}
											{/*
											<tr className="alert">
												 												
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/cakeimg16.jpg')} alt="" />
												</td>
												<td className="product-item-name">Butter Cake</td>
												<td className="product-item-price">$28.00</td>
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
												*/}
										
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='cart-total'>
							<h3> Cart TOtal: <span> 2000</span></h3>
							<button>Checkout</button>
						</div>
						<div className="row">
							
							<div className="col-lg-6 col-md-6">
								<h3>Cart Subtotal</h3>
								<table className="table-bordered check-tbl">
									<tbody>
										<tr>
											<td>Order Subtotal</td>
											<td>$125.96</td>
										</tr>
										<tr>
											<td>Shipping</td>
											<td>Free Shipping</td>
										</tr>
										<tr>
											<td>Coupon</td>
											<td>$28.00</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>$506.00</td>
										</tr>
									</tbody>
								</table>
								<div className="form-group">
									<button className="btn btnhover" type="button">Proceed to Checkout</button>
								</div>
							</div>
						</div>
				   </div>
					
				</div>
				
			</div>
			
			<Footer  />
			</>
		)
	}
 


export default Shopcart;