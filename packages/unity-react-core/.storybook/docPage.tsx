import { Title, Subtitle, Description, Controls, Canvas, Source } from '@storybook/blocks';
import renderToHTML from './renderToHTML.jsx'
import React from 'react';

export const DocPage = () => {

      return (
      <>
        <Title />
        <Description />

        <Canvas layout="padded" sourceState="none" withToolbar={true}/>

        <Controls sort="requiredFirst" />
        <Subtitle>HTML</Subtitle>
        <Source dark={true} transform={renderToHTML} />

        <Subtitle>React</Subtitle>
        <Source dark={true} />
      </>
    )}
