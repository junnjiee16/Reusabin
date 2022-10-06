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
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <div>
        <h1>Hello world</h1>
        
      </div>
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