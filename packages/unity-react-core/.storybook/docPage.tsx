import { DocsContainer, Title, Heading, Subtitle, Description, Controls, Canvas, Source } from '@storybook/blocks';
import renderToHTML from './renderToHTML.jsx'
import React from 'react';


export const Container = ({ children, context, ...props }) => {
  console.log("props")
  console.log(props)
  console.log("context")
  console.log(context)
  console.log(context.store.globals.globals);
  return <DocsContainer context={context} {...props}>
    <Title />
    <Subtitle />
    <Description />

    <Canvas layout="padded" sourceState="none" withToolbar={true}/>
    <Heading>Props</Heading>
    <Controls sort="requiredFirst" />
    <Heading>HTML</Heading>
    <Source dark={true} transform={renderToHTML} />
    <Heading>React</Heading>
    <Source dark={true} />
    </DocsContainer>;
};

export const DocPage = () => {

      return (
      <>



      </>
    )}
