import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

function content() {
  return (
    <div>
      <br>
      </br>
      <br>
      </br>
    <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Why should you join us?</Tab>
    <Tab>How to get started?</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      
        <h1>Hello world</h1>
      
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default content