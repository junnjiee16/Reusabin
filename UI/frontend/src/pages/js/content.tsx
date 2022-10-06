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
    <Tab>Points</Tab>
    <Tab>Leaderboard</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>5 Pungol street - Bottle (+5)</p>
      <p>5 Pungol street - Bottle (+5)</p>
      <p>5 Pungol street - Bottle (+5)</p>
      <p>5 Pungol street - Bottle (+5)</p>
      <p>5 Pungol street - Bottle (+5)</p>
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