// ChatWindow.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from "react-bootstrap";
import "./ChatWindow.css";


const ChatWindow = ({ messages, inputMessage, handleInputChange, handleSubmit, isFormEnabled, inputFlag }) => {
    const chatMessage = useState(messages)
    useEffect(() => {
        const scrollContainer = document.querySelector('.chat-window__messages');
        // console.log(scrollContainer);
        const handleScroll = () => {
            // 在滚动事件中执行一些操作
        };

        const handleWheel = (e) => {
            e.preventDefault(); // 阻止默认的鼠标滚轮行为
            scrollContainer.scrollTop += e.deltaY; // 使用鼠标滚轮来滚动内容
        };
        scrollContainer.addEventListener('scroll', handleScroll);
        scrollContainer.addEventListener('wheel', handleWheel);
        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel)
            scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, []); // 要确保组件加载完成后才添加监听，如何卸载组件的时候把监听事件同时删除掉。
    useEffect(() => {
        const chatWindow = document.querySelector('.chat-window__messages');
        chatWindow.scrollTop = chatWindow.scrollHeight;//有消息加入的时候就会跳转到最下面
        console.log(inputFlag);
    }, [inputFlag])

    return (
        <div className='ai-background'>
            <Container className="chat-window">
                <br /><br />
                <Card className="chat-window__content">
                    <Card.Body className="chat-window__messages">
                        {messages.map((message, index) => (
                            message.role === 'user' ?
                                <div style={{ textAlign: 'right', fontFamily: 'Source Sans Pro' }} key={index} className="message user">{message.content}&nbsp;<img src="/assets/img/userlogo.png" style={{ width: '40px', height: '40px' }} alt="ailogo" /><br /><br /></div> :
                                <div tyle={{ textAlign: 'left', fontFamily: 'Playfair Display' }} key={index} className="message ai"><img src="/assets/img/ailogo.png" style={{ width: '40px', height: '40px' }} alt="ailogo" />&nbsp;{message.content}<br /><br /></div>
                        ))}
                    </Card.Body>
                    <Card.Footer className="chat-window__input">
                        <Form onSubmit={handleSubmit}>
                            <Form.Control
                                // style={{ overflow: 'left', width: "80%", display: 'inline-block' }}
                                style={{ width: '80%' }}
                                type="text"
                                placeholder="输入消息..."
                                value={inputMessage}
                                onChange={handleInputChange}
                                disabled={!isFormEnabled}
                            />
                            <Button className='aibutton' type="submit" disabled={!isFormEnabled}>发送</Button>
                        </Form>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );

};

export default ChatWindow;
