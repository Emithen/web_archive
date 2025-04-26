type ToastItemProps = {
    message: string;
  };
  
  export function ToastItem({ message }: ToastItemProps) {
    return (
      <div
        style={{
          background: 'black',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          marginBottom: '8px',
          minWidth: '200px',
          textAlign: 'center', 
          display: 'flex',    
          justifyContent: 'center', 
          alignItems: 'center',    
        }}
      >
        {message}
      </div>
    );
  }
  