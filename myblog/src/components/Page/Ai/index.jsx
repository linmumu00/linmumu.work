// Ai.js
import React, { useEffect, useState } from 'react';
import ChatWindow from './ChatWindow';

const Ai = () => {
    const [messages, setMessages] = useState([
        { role: 'user', content: '你好' },
        { role: 'linassistant', content: '你好' }
    ]);
    const [inputMessage, setInputMessage] = useState(''); //输入框的信息
    const [isFormEnabled, setisFormEnabled] = useState(true); //防止多次提交
    const [inputFlag, setInputFlag] = useState(false)
    const email = localStorage.getItem('email')

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
        // console.log(email);
    };

    function removePrefix(str) {
        const prefix = "linassistant:";
        const index = str.lastIndexOf(prefix);
        if (index !== -1) {
            return str.slice(index + prefix.length);
        }
        return str;
    }//出去bug，有时候gpt会补充你的问题，同时加上linassistant: 需要将其删除

    const handleSubmit = async (event) => {
        event.preventDefault();
        messages.push({ role: 'user', content: `${inputMessage}` })
        setInputFlag(true)//控制发送消息后移动到最下面
        console.log(inputFlag, '2');
        setInputMessage('wait');
        setisFormEnabled(false); //不允许继续提交
        try {
            const response = await fetch('http://43.134.250.63:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'email': email
                },
                body: JSON.stringify(messages), // JSON字符串类型

            });
            if (response) {
                const data = await response.json();
                const reply = removePrefix(data.reply);
                messages.push({ role: 'linassistant', content: `${reply}` })
                setInputMessage('');
                // 请求成功处理
                // alert('success');

                console.log('ai询问成功');
            } else {
                // 请求失败处理
                console.log('ai询问失败');
                // alert('询问失败了重新试试');
                setInputMessage(messages.pop().content); //把消息从聊天框删除，同时还原刚刚发的话在消息框里
            }
        } catch (error) {
            // 拦截错误并处理
            console.log('发生错误:', error);
            // alert('ai系统出错请联系客服或等待');
            setInputMessage(messages.pop().content); //把消息从聊天框删除，同时还原刚刚发的话在消息框里
        }
        setisFormEnabled(true);
        setInputFlag(false)
    };

    return (
        <div>
            <ChatWindow
                messages={messages}
                inputMessage={inputMessage}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isFormEnabled={isFormEnabled}
                inputFlag={inputFlag}
            />
        </div>
    );
};

export default Ai;
