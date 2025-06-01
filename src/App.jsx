import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // 👉 Function con được tách riêng
  function handleSendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Mô phỏng phản hồi của AI
    setTimeout(() => {
      const botReply = { sender: 'bot', text: `Bạn vừa nói: ${userMessage.text}` };
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  }


  return (
    // <div className="container mt-5">
    //   <div className="card shadow">
    //     <div className="card-header bg-primary text-white">Chatbox AI</div>
    //     <div className="card-body" style={{ height: '300px', overflowY: 'auto' }}>
    //       {messages.map((msg, i) => (
    //         <div key={i} className={`mb-2 text-${msg.sender === 'user' ? 'end' : 'start'}`}>
    //           <span className={`badge bg-${msg.sender === 'user' ? 'primary' : 'secondary'}`}>
    //             {msg.text}
    //           </span>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="card-footer d-flex">
    //       <input
    //         type="text"
    //         className="form-control me-2"
    //         placeholder="Nhập tin nhắn..."
    //         value={input}
    //         onChange={(e) => setInput(e.target.value)}
    //         onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
    //       />
    //       <button className="btn btn-success" onClick={handleSendMessage}>
    //         Gửi
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <main>
      <div class="b-example-divider"></div>

      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
        <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
          <span class="fs-5 fw-semibold">List group</span>
        </a>
        <div class="list-group list-group-flush border-bottom scrollarea">
          <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>

          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
