import React from 'react';
import { Modal } from 'antd';
import Lib from '.';

const App = () => {
  return (
    <Modal visible title="Wrapper Demo" footer={null} width="95vw">
      <div
        className="app-container"
        style={{
          minHeight: '85vh',
          position: 'relative',
        }}
      >
        <Lib name="123" />
      </div>
    </Modal>
  );
};

export default App;
