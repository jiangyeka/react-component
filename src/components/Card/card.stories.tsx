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
  avatar: 'https://wx3.sinaimg.cn/bmiddle/6c942574ly1gykeyv3591j20xc4r4njv.jpg',
  description: '这是一段description，这个例子用来演示。这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示'
}

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    size: 'middle',
    avatar: 'https://wx3.sinaimg.cn/bmiddle/6c942574ly1gykeyvyt3gj20uk7v7e81.jpg',
    description: '这是一段description，这个例子用来演示。这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示这是一段description，这个例子用来演示'
}