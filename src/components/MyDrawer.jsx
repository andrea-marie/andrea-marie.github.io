import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const MyDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <Button type="primary"  className ='bg-pink-700' onClick={showDrawer}>
        Open
      </Button> */}
      <img className="w-[400px]" src="/images/cne/cne-child.jpg" onClick={showDrawer} />
      <Drawer
        title="CNE Website Redesign"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        size="default"
        placement="right"
        open={open}
      >
        <p>Happy Juneteenth!</p>
        <p>Happy Holiday!</p>
        <p>Time for rest</p>
      </Drawer>
    </>
  );
};
export default MyDrawer;