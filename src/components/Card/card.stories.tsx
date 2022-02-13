import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {Card, ICardProps} from "./card";

export default {
  title: 'New/Card',
  component: Card
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args}/>

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  avatar: 'https://img1.baidu.com/it/u=970557741,210992709&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=284',
  description: '这是一段description，这个例子用来演示。这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示'
}

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    size: 'middle',
    avatar: 'https://img1.baidu.com/it/u=970557741,210992709&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=284',
    description: '这是一段description，这个例子用来演示。这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示'
}