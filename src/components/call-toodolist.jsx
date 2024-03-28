import { Container, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardBody, CardFooter, Card} from "react-bootstrap";
import { useState } from "react";
import "../style/todolist.css";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";



function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div className="header-logo">
                        <h1>Aplikasi To-do List</h1>
                        <InputGroup>
                            <InputGroup.Text></InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder="Masukkan Task"
                            />
                            <Button variant="dark" onClick={addTask}>Submit</Button>
                        </InputGroup>
                        <div className="llist-update">
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                    {task}
                                    <Button onClick={() => removeTask(index)} variant="dark" size="sm">Done</Button>
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>
    
</>
    );
}

export default Todolist;
