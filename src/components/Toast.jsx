import { useEffect } from 'react'

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast-notification">
      <div className="toast-icon-success">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="toast-text">
        <strong>Formulário enviado com sucesso!</strong>
        <p>{message}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>×</button>
    </div>
  )
}

export default Toast