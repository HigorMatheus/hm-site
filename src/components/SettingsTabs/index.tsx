'use client';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

import { TabItem } from './TabItem';

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1');
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="My details"
          isSelected={'tab1' === currentTab}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={'tab2' === currentTab}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={'tab3' === currentTab}
        />
        <TabItem
          value="tab4"
          title="Teams"
          isSelected={'tab4' === currentTab}
        />
        <TabItem value="tab5" title="Plan" isSelected={'tab5' === currentTab} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={'tab6' === currentTab}
        />
        <TabItem
          value="tab7"
          title="Notification"
          isSelected={'tab7' === currentTab}
        />
        <TabItem
          value="tab8"
          title="Integrations"
          isSelected={'tab8' === currentTab}
        />
        <TabItem value="tab9" title="Api" isSelected={'tab9' === currentTab} />
      </Tabs.List>
      {/* <Tabs.Content value="tab1">
        <div>form</div>
      </Tabs.Content> */}
    </Tabs.Root>
  );
}
