import {Link, useNavigate, useParams, useLocation} from 'react-router-dom';
import { Form ,Row, Col, Image, ListGroup, Card, Button, FormControl } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const addToCartHandler = (item, qty) => {
        dispatch(addToCart({ ...item, qty }));
    }
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping');
    }

return (
    <Row>
    <Col md={8}>
        <h1 style={{ marginBottom: '20px'}}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
            <Message>Your cart is empty <Link to='/'>Go Back</Link></Message>
        ) : (
            <ListGroup variant='flush'>
                {cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                        <Row className='align-items-center'>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col md={3}>
                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                            </Col>
                            <Col md={2}>${item.price}</Col>
                            <Col md={2}>
                                <Form.Control
                                    as='select'
                                    value={item.qty}
                                    onChange={(e) =>
                                      addToCartHandler(item, Number(e.target.value))
                                    }
                                >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHandler(item._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )}
    </Col>
    <Col md={4}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>
                        Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                    </h2>
                    $
                    {cartItems
                        .reduce((acc, item) => acc + item.price * item.qty, 0)
                        .toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed to Checkout
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Col>
</Row>
);
};

export default CartScreen;
