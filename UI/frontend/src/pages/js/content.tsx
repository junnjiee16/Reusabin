import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import React from 'react'


function content() {

  return (
    <div>
      <br>
      </br>
      <br>
      </br>
    <Tabs isFitted variant='enclosed'>
  <TabList mb='2em'>
    <Tab>Why should you join us?</Tab>
    <Tab>How does it work?</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
        <ul>
        <li><h2><b>We give you money</b></h2></li>
        <li><h2><b>Vouchers galore!</b></h2></li>
        <li><h2><b>Vast network of savvy recyclers</b></h2></li>
        <li><h2><b>We'll tell you where to find our bins</b></h2></li>
        </ul>
    </TabPanel>
    <TabPanel>
    <ul>
        <li><h2><b>Just pop by to one of our bins and place a recyclable material inside
          if its good. We give you points.</b></h2></li>
          <li><h2><b>Points = Vouchers (Like 5% off your groceries!) </b></h2></li>

        </ul>

    </TabPanel>   
  </TabPanels>
</Tabs>
<Heading>COME RECYCLE WITH US TODAY!</Heading>

    </div>
  )
}

export default content