# React lifecycle কি?

React এর মাধ্যমে আমারা আমাদের DOM কে manipulate করতে পারি। এখন এই DOM কে manipulate করতে গেলে আমাদের এমন সিচুয়েশন আসতে পারে যে আমরা চাই আমাদের component আমাদের DOM এ ইন হলে তারপর আমরা কোন একটা কাজ করবো অথবা আমাদের component আপডেট হলে কিছু একটা করবো অথবা আমাদের component DOM থেকে চলে গেলে কোন একটা কাজ করবো। এখন এই যে, DOM এ আমাদের component ইন হওয়া বা আপডেট হওয়া বা ডিলিট হওয়া এগুলো আমরা কীভাবে বুঝব হয়েছে আমাদের DOM এ? এজন্য react আমদেরকে কিছু lifecycle events অথবা lifecycle hooks দিয়েছে যেগুলো ব্যাবহার করে আমরা জানতে পারবো আমাদের DOM এর অ্যাকশন এর ব্যাপারে।
<br/>
আমরা জানি যে, React এ দুই ধরনের component আছে

1. Functional Component
2. Class Component

<br/><br/>

## React Class Component Lifecycle

React তার class component এর জন্য আমাদেরকে কিছু lifecycle methods বা events দিয়েছে। আমরা যখন আমাদের class কে React এর class থেকে extend করি তখন React.Component আমাদেরকে এই মেথডগুলো বা ইভেন্টগুলো দেয়।

- componentDidMount
- componentDidUpdate
- componentWillUnmount

### componentDidMount

আমাদের component DOM এ লোড হয়েছে কি না, তা বুঝার জন্য আমরা componentDidMount() এর ব্যাবহার করি। এই মেথড ব্যাবহার করলে যখনি আমাদের component টা প্রথমবার DOM এ লোড হবে এবং লোড হওয়ার পরে এই মেথডটা কল হয়ে যাবে এবং এই মেথডের ভিতরের লজিক রান করবে।
<br/>
আমরা যদি চাই, কোন component লোড হওয়ার আগেই বা componentDidMount হওয়ার আগেই কোন ভ্যারিয়েবলকে বা state বা ডাটা কে ইনিশিয়ালাইজ করতে, তাহলে সেটা আমরা করতে পারবো React.Component class এর state property এর মাধ্যমে। যেহেতু আমরা আমাদের class Clock কে React এর component class থেকে extends করেছি, তাই আমরা আমাদের class থেকে এই property কে অ্যাক্সেস করতে পারবো।
<br/>
React এর component class থেকে extends করার কারণে আমরা React এর component class এর আরও property আক্সেস করতে পারবো। যেমন নিচের কোডে ব্যাবহৃত state, useState, componentDidMount, componentDidUpdate, componentWillUnmount ইত্যাদি এগুলো হচ্ছে React.Component class এর প্রোপার্টি বা মেথড।

```
import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
```

এই কোডে আমাদের লক্ষ্য হলো, সবার প্রথমে আমরা একটা state নিব যা আমাদের বর্তমান সময়টাকে দেখাবে এবং প্রতি এক সেকেন্ড পর পর আমাদের state আপডেট হতে থাকবে। তাই আমরা আমাদের component লোড হওয়ার আগেই এই state এ একটা ভ্যালু দিয়ে দিব যাতে তাকে আমরা আমাদের কোড লোড হওয়ার পরে বা component আমাদের DOM এ রেন্ডার হওয়ার পরে আমরা এর state চেঞ্জ করতে পারি। তাই আমরা constructor() এর ভিতরে this.state = {currentTime: new Date() } নিয়েছি এবং এটাকে আমাদের component এর p element এর মধ্যে bind করে দিয়েছি।

> যদি আমাদের state কে ইনিশিলাইজ করতে props এর প্রয়জন না পরে তাহলে আমরা constructor() টিকে স্কিপ করতে পারি। সেক্ষেত্রে শুধু state = { currentTime: new Date() } এভাবে লিখলেও কাজ হবে। অর্থাৎ, আমাদেরকে constructor() ও super() টিও লিখতে হবে না।

আর যদি আমরা props পাঠাই তাহলে আমাদেরকে constructor() ও super() টি লিখতে হবে।

```
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString(this.props.locale)}</p>
      </div>
    );
  }
}

export default Clock;
```

এই কোডে আমরা props পাঠিয়েছি যেখান থেকে আমরা এই Clock component টিকে কল করেছি। আমরা এখানে App component থেকে props পাথিয়েছি।

```
function App() {
  return (
    <div className="App">
      <Clock locale="bn-BD"></Clock>
    </div>
  );
}
```

<br/>
তো এই কোড টা রান করার সময় এটি তার রান হওয়ার সময়টাকে state এর মধ্যে ইনিশিয়ালিয়াজ করে রেখেছে। এবং প্রথমবার এই ইনিশিয়ালিয়াজড state দিয়ে আমাদের component কে রেন্ডার করেছে। যেহেতু আমাদের এই component টা DOM এ লোড হয়েছে, তাই আমরা লোড হওয়ার পরে এই currentTime টাকে আপডেট করার লজিক লিখবো। আর যখনি আমাদের state চেঞ্জ বা আপডেট হবে তখনি সাথে সাথে আমাদের render() টা কল হবে তারপর এই render() আমাদের পরিবর্তিত state টাকে আমাদের DOM এ রেন্ডার করে দিবে। এভাবে আমরা আমাদের currentTime টাকে আপডেট করতে থাকবো যার ফলে আমাদের এই Clock() টা চলতে থাকবে।
<br/>
এই কোডে আমরা আমাদের currentTime টাকে setInterval() মাধ্যমে আপডেট করবো।
<br/> <br/>

### componentDidUpdate

আমাদের component আপডেট হলে React আমাদেরকে componentDidUpdate() ফাংশনটিকে কল করে দেয়। আমাদের component আপডেট হওয়ার পর যদি আমরা কোন কাজ করতে চাই তাহলে সেই কোড এখানে লিখবো। এখন আমরা আমাদের আগে কোডে currentTime state টাকে ১ সেকেন্ড পরপর আপডেট করছিলাম। যেহেতু ১ সেকেন্ড পরপর আপডেট হচ্ছে তাই আমরা এই component এর মধ্যেই আমাদের component আপডেট হওয়ার মেথডটা চেক করে দেখি।
<br/>
এজন্য আমরা componentDidUpdate() এর মধ্যে কনসোলে একটি string দিলাম, যেন আমাদের state আপডেট হলে এই string টি আমাদের কনসোলে প্রিন্ট হয়। যেহেতু, প্রতি ১ সেকেন্ড পর আমাদের state আপডেট হচ্ছে তাই প্রতি ১ সেকেন্ড পরপর আমাদের কনসোলে এই string টি প্রিন্ট হবে।

```
import React, { Component } from "react";

class Clock extends Component {
  state = {
    currentTime: new Date(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CurrentTime updated");
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
```

### componentWillUnmount

এখন React যেহেতু single page এর অ্যাপ, আমরা যদি অন্য পেজে যাই বা যখন এই টাইমার UI টা আমাদের চোখের সামনে থাকবেনা তখনও এই টাইমারটা আমাদের অ্যাপে চলতে থাকবে। যা আমাদের অ্যাপের performance এ প্রভাব ফেলবে। তাই আমরা যখন এই পেজে থাকবো না তখন অবশ্যই এই টাইমার টাকে থামানোর প্রসেস করবো বা থামিয়ে যাব। এজন্য React আমাদেরকে আরেকটা lifecycle event componentWillUnmount দিয়েছে।
<br/>

কোন component আমাদের DOM থেকে চলে যাওয়ার ঠিক আগ মুহূর্তে React componentWillUnmount() কে কল করে দেয় পরে না। অর্থাৎ আমাদের component টা DOM থেকে চলে যাবে ঠিক তার আগে কল হবে।
<br/>
তাহলে আমরা আমাদের আগের কোডটাকে যদি এভাবে লিখি, আমাদের টাইমারটা বন্ধ হয়ে যাবে।

```
import React, { Component } from "react";

class Clock extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.clockTime = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CurrentTime updated");
  }

  componentWillUnmount() {
    clearInterval(this.clockTime);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
```

render() নিজেও একটা lifecycle event

## React Function Component Lifecycle
