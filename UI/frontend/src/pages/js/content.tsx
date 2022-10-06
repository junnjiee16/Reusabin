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
      <h1> <b>Top Scorers</b> </h1>
      <br></br>
      <p>James - 500 points</p>
      <p>Samantha - 470 points</p>
      <p>Luke - 450 points</p>
      <p>James - 440 points</p>

    </TabPanel>   
  </TabPanels>
</Tabs>
    </div>
  )
}

export default content