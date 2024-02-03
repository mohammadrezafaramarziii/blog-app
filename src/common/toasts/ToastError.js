import toast from "react-hot-toast";

function ToastError(msg) {
    toast.error(msg, {
        style: {
          border: '2px solid rgba(220, 38, 38, 1)',
          padding: '16px',
          borderRadius: '20px',
          color: 'rgba(220, 38, 38, 1)',
        },
        iconTheme: {
          primary: 'rgba(220, 38, 38, 1)',
          secondary: '#FFFAEE',
        },
    });
}

export default ToastError;