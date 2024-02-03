import toast from "react-hot-toast";

function ToastSuccess(msg) {
    toast.success(msg, {
        style: {
          border: '2px solid rgba(34, 197, 94, 1)',
          padding: '16px',
          borderRadius: '20px',
          color: 'rgba(34, 197, 94, 1)',
        },
        iconTheme: {
          primary: 'rgba(34, 197, 94, 1)',
          secondary: '#FFFAEE',
        },
    });
}

export default ToastSuccess;