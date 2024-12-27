import React from 'react';
import { addons } from '@storybook/manager-api';
import BLOCKS from '@storybook/blocks';

addons.setConfig({
  sidebar: {
    renderLabel: (item) =>{
    // console.log(item)
      return <div style={{fontSize: "1rem"}}>{item.name}</div>
    }
  },
});
