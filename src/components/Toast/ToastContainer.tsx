import { useEffect, useState } from 'react';
import { ToastItem } from './ToastItem';
import { setAddToast } from './ToastManager';

type Toast = {
  id: number;
  message: string;
};

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    setAddToast((message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 3000);
    });
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none',
        flexDirection: 'column',
      }}
      
    >
      {toasts.map(toast => (
        <ToastItem key={toast.id} message={toast.message} />
      ))}
    </div>
  );
}
