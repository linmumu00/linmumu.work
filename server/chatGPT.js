// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
// app.use(express.json());
//配置解析表单数据的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const OPENAI_API_KEY = '';

app.post('/chat', async (req, res) => {
    const data = req.body;
    const email2 = req.headers.email;
    if (email2 === '1457049484@qq.com') {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/completions',
                {
                    //   prompt:"说一句你好",
                    prompt: data.map(msg => `${msg.role}: ${msg.content}`).join('\n'),
                    temperature: 0.7,
                    top_p: 1,
                    model: "text-davinci-003",
                    max_tokens: 204,
                    frequency_penalty: 0,
                    presence_penalty: 0.6,
                    stop: ["Human:", "AI:"]
                },
                {
                    headers: {
                        'Authorization': `${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const reply = response.data.choices[0].text;

            res.json({ reply });
            console.log(reply)
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else {
        res.json({
            reply: '你无权访问Linai，请联系工作人员:13825863547'
        })
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
