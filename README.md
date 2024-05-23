# REACT কি? REACT কেন ব্যাবহার করবো?
&#8594; React is a JavaScript library to build User Interfaces <br/>

<details>
<summary>Library</summary>
  Library মানে হচ্ছে কিছু কালেকশন অব কোডস, যেটা re-use করে আমরা আমাদের অ্যাপ্লিকেশন বানাতে পারি। <br/>
  React ও একইভাবে কিছু vanilla javascript code এর কালেকশন যেটা ব্যাবহার করে আমরা easily website, mobile application এমনকি desktop এর user interface ও বানাতে পারি।
</details>

জখনি আমরা কোন application সম্পরকে কথা বলি তখন সেখানে দুইটি পার্ট থাকে।
1. Frontend বা User Interface
2. Backend
<br/>
Frontend হলো, যেখানে user interact করে। যেমন, browse করে, click করে, form submit করে ইত্যাদি ইত্যাদি। এবং আমাদের frontend এই interaction অনুযায়ী রেসপন্স করে backend এর সহায়তা নিয়ে। আর react শুধুমাত্র user ইন্টারফেস নিয়ে concern। তার মানে user এর action এর response করা, information display করা বা render করাটাই এর কাজ।
<br/>
তাহলে React এর প্রয়োজন কেন পড়লো? প্রথমে আমরা vanilla JS দিয়ে একটা ছোট UI বানাবো এবং সেখান থেকে দেখবো কেন React useful এবং কি অতিরিক্ত সুবিধা আমরা পাচ্ছি react ব্যাবহার করার কারনে।
<img src="https://i.ibb.co/WzR2Qnn/simple-UI.png" />
এখানে আমাদের উদ্দেশ্য হলো increment + বাটনে ক্লিক করলে আমদের এই display id এর মান এক এক করে বাড়তে থাকবে। এই কাজ করার জন্য আমাদের JS কোড

```
let number = 0;
const display = document.getElementById("display");
const button = document.getElementById("increment");

button.addEventListener("click", function () {
  number++;
  display.textContent = number;
});
```

এখন আমরা browser এর increment + বাটনে ক্লিক করলে 0 এর মান 1 করে বৃদ্ধি পেতে থাকবে। এই কাজটা আমরা খুবই সহজে করলাম। কিন্তু এটা বড় অ্যাপ্লিকেশনের জন্য উপযোগী নয়। আমাদের এই কোডে একটিমাত্র counter আছে, যার কারনে এটাকে তেমন একটা সমস্যা মনে হচ্ছে না। কিন্তু বাস্তবে আমাদের এমন অনেক counter থাকতে পারে।
<br/>
ধরা যাক আমাদের এই কোডেই আরেকটা counter আছে। তাহলে আমাদের ওই counter এর জন্য HTML এ আলাদা একটা counter বাটন ও counter ডিসপ্লে যুক্ত করতে হবে। এবং তাদের সাথে interaction করার জন্য তাদেরকে আলাদা আলাদা নতুন id দিতে হবে। এরপর JS ফাইলে এই id গুলোকে ধরতে হবে এবং এই counter এর বাটনে আরেকটা event listener function দিতে হবে। তার মানে ২টা একইরকমের কাজের জন্য আমাদেরকে ২ বার কোড লিখতে হয়েছে। এরকম আরও counter থাকলে আরও কোড রিপিট করতে হত। হয়ত এই কোডকে আমরা optimization করতে পারতাম একটা single function দিয়ে এবং তার মধ্যে প্যারমিটার পাস করে। যাই করিনা কেন, এই HTML element গুলোকে কিন্তু আলাদা করে ধরতেই হবে এবং সেটা করতে গিয়ে ভুল ও হতে পারে। সেইসাথে কোড ম্যানেজ করাও কঠিন হয়ে পড়বে। আগের JS developer রা কোড কমপ্লেক্সিটির সাথে কোড ম্যানেজ করতেও এমন সমস্যার মধ্যে পড়তো।
<br/>
এই সমস্যাটা ফেসবুকের ইঞ্জিনিয়ার রাও ফেস করেছিল। কারণ, ফেসবুকের মত এত বিশাল অ্যাপ্লিকেশনের UI অনেক কমপ্লেক্স এবং সেটা শুধুমাত্র vanilla JS দিয়ে ম্যানেজ করা কঠিন হচ্ছিল। তাই তারা এটার সমাধান নিয়ে কাজ করছিল এবং ২০১১ সালে ফেসবুকের একজন ইঞ্জিনিয়ার Jordan Walke ১ম react js এর একটা প্রোটোটাইপ তৈরি করেন এবং তার নাম দেন fax js। ২০১৩ সালে fax js এর নাম পরিবর্তন করে react js রাখা হয় এবং এটিকে ওপেন সোর্স করে দেয়া হয়। বর্তমানে বেশ বড় বড় কোম্পানিতে react js ব্যাবহৃত হচ্ছে যেমনঃ Netflix, facebook, whatsapp ইত্যাদি।
<br/>
এবার আমরা আমাদের আগের প্রোগ্রামটার সমাধান টা react js দিয়ে করব।

```
<body>
  <div id="root"></div>
  <!-- এই root div তার মধ্যেই আমাদের react application টা generate হবে -->

  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <!-- এটা আমাদেরকে HTML element generate করে দিবে এবং render করে দিবে -->

  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <!-- এটা আমাদেরকে HTML কোডকে DOM এ generate করে দিবে -->

  <script src="script.js"></script>
</body>
```

আমাদের HTML file এ আর কোন HTML লিখতে হবেনা। আমরা আমাদের html file এর একদম শেষে আমাদের increment ফাইল টা যুক্ত করার কারনে এখন আমরা আমাদের increment ফাইল থেকে React ও ReactDOM কে অ্যাক্সেস করতে পারব। টেস্ট করার জন্য console.log(React) এবং console.log(ReactDOM) করে দেখা যেতে পারে।
<br/>
আমরা একটু আগেই জেনেছিলাম যে, React আমাদের html গুলোকে generate করবে অথবা create করবে। আর ReactDOM সেগুলোকে আমাদের browser এর dom এ render করবে যেন আমরা দেখতে পাই। দুইটা আলাদা হওয়ার কারণ হচ্ছে React শুধু website বানানোর জন্য তৈরি করা হয়নি। আমরা React website এর বদলে যখন mobile application তৈরি করবো তখন এই ReactDOM এর পরিবর্তে React Native নামের আরেকটা লাইব্রেরী ব্যাবহার করবো। এভাবে আমরা একই কোড দিয়ে বানানো UI কে mobile application এ render করতে পারবো। একারণেই এ দুটো প্যাকেজ কে আলাদা রাখা হয়েছে। আমরা মূলত যা করবো সবই এই React কে ব্যাবহার করে করবো। ReactDOM শুধু print করার কাজে ব্যবহৃত হবে।

```
এখানে আমরা প্রথমে এই root আইডিটাকে ধরব
const root = ReactDOM.createRoot(document.getElementById("root"));
তারপর ReactDOM এর Render method কে কল করবো। এবং এই Render method টি প্যারামিটার রিসিভ করে।
কি প্রিন্ট করবো তা এই প্যারামিটার এর মধ্যে বলে দিতে হবে।
যেমনঃ root.render("Hello World");
```
তো, ReactDOM আমাদের এই কনটেন্ট কে আমাদের root div এর মধ্যে render করে দিবে এবং আমরা screen এ Hello World লেখাটি দেখতে পাব। এখানে আমরা জাস্ট একটা টেক্সট রেন্ডার করেছি। কিন্তু আমরা চাইলে এখানে যেকোন কিছু রেন্ডার করতে পারবো। শুধু টেক্সট রেন্ডার করে তো আমাদের কোন লাভ নেই। React library দিয়ে আমরা useful জিনিস বানাতে পারি এবং সেগুলোকে রেন্ডার করতে পারি। এই জিনিসগুলোকে react element বলে। React library আমাদেরকে কিছু useful function দিয়েছে, জেগুলো ব্যাবহার করে আমরা react element বানাতে পারি। সেরকম একটা ফাংশন হলো
```
React.createElement()
```
এই React.createElement() টি ৩টি প্যারামিটার নেয়। যার মধ্যে 
1. কি বা কোন element যোগ করতে চাচ্ছি তা (যেমনঃ div, h1, p)
2. এই তৈরিকৃত element এর মধ্যে কি ডাটা পাস করতে চাচ্ছি।
3. সেই element এর ভিতরে কি কনটেন্ট থাকবে

উদাহরণ
```
const root = ReactDOM.createRoot(document.getElementById("root"));
const myElement = React.createElement("div", null, "Hello World");
root.render(myElement);
```
এবার আমরা আমাদের browser এ inspect করলে দেখতে পাব root div এর মধ্যে আরেকটা div তৈরি হয়েছে যার মধ্যে Hello World লেখাটি আছে। এখন ধরা যাক, আমরা এই div এর মধ্যে একটা p element যুক্ত করতে চাই। তাহলে

```
const root = ReactDOM.createRoot(document.getElementById("root"));
const myElement = React.createElement("div", null, React.createElement('p', null,"Hello World"));
root.render(myElement);
```

এবার আমরা আমাদের browser এ inspect করলে দেখতে পাব root div এর মধ্যে আরেকটা div তৈরি হয়েছে যার মধ্যে p element টি আছে এবং এই p element এর ভিতরে Hello World লেখাটি আছে। এখন আমরা যদি ২টা element দিতে চাই তাহলে আমরা array of elements ও দিতে পারবো। 

```
const root = ReactDOM.createRoot(document.getElementById("root"));
const paragraphs = [
  React.createElement("p", null, "Hello World"),
  React.createElement("p", null, "Hello Bangladesh"),
];
const myElement = React.createElement("div", null, [paragraphs]);
root.render(myElement);
```
এবার আমরা আমাদের browser এ inspect করলে দেখতে পাব root div এর মধ্যে আরেকটা div তৈরি হয়েছে যার মধ্যে দুটি p element আছে। প্রথম  p element এর ভিতরে Hello World লেখাটি আছে। আর ২য় p element এর ভিতরে Hello Bangladesh লেখাটি আছে। 
<br/><br/>
এখন কথা হচ্ছে এভাবে react দিয়ে element তৈরি করে আমাদের লাভ কি? উল্টো এই সিনট্যাক্স বেশ জটিল। আমরা যখন HTML markup লিখি, তখন DOM কিন্তু এভাবেই আমাদের জন্য HTML element তৈরি করে। যেমনঃ

```
const domContainer = document.getElementById("root");
let p = document.createElement("p");
p.innerHTML = "Hello World";
domContainer.appendChild(p)
```

HTML file এ আমরা যে markup লিখি, Browser তাকে ঠিক এভাবেই createElement দ্বারা কল করে করেই নিজের DOM তা বানিয়ে নেয়। HTML আমাদেরকে একটা সহজে বুঝার জন্য syntactic sugar প্রদান করে যাতে আমরা খুব দ্রুত UI বানাতে পারি। ঠিক একইভাবে React ও  createElement() এর সাহায্যে নিজের জন্যা element বানিয়ে নেয় এবং সব element কে জোড়া লাগিয়ে নিজের জন্য একটা আলাদা DOM তৈরি করে।
> এই আলাদা DOM কে react এর ভাষায় Virtual DOM বলা হয়

নরমালি আমরা HTML element বানাই, indirectly html markup syntax use করে। React ও ঠিক একইভাবে আমাদেরকে সহজে বুঝার জন্য এবং দ্রুত কোড করার জন্য তার নিজস্ব একটা  markup syntax দিয়েছে যেটা দিয়ে আমরা react এর element বানাতে পারি। সেই syntax টার নাম হচ্ছে
> JSX &#8594; JavaScript XML

এটা দেখতে HTML এর মত হলেও, এটা HTML না। এই markup syntax ব্যাবহার করে আমরা react এর element বানাতে পারি। আমরা একটু আগে যে root div এর মধ্যে একটি div এর মধ্যে দুটি p element বানিয়েছিলাম, সেটাকে এখন যদি আমরা JSX এর মাধ্যমে লিখি

```
const root = ReactDOM.createRoot(document.getElementById("root"));
const myElement = (
  <div>
    <p>Hello World</p>
    <p>Hello Bangladesh</p>
  </div>
);
root.render(myElement);
```
আমরা এই JSX এর মাধ্যমেই আমাদের HTML element লিখবো। কিন্তু আমরা এই JSX লিখছি আমাদের JS file এর মধ্যে। কিন্তু JavaScript তো এই syntax বোঝেনা। সেক্ষেত্রে আমাদেরকে একটা Transpiler ব্যাবহার করতে হবে যে আমাদের এই JSX কোডকে vanilla js code এ রুপান্তর করে দিবে।
<br/><br/>
আমরা আমাদের কোডে Transpiler হিসাবে Babel JS কে ব্যাবহার করবো। আমরা যদি Babel JS এর অফিশিয়াল সাইটে যাই এবং আমাদের এই JSX কোডকে সেখানে পেস্ট করি তাহলে দেখবো যে Babel JS আমাদের এই JSX কোডকে vanilla js এ রুপান্তর করে দিয়েছে।
<br/><br/>
এবার আমাদের কোডে JSX কে কাজ করানোর জন্য আমরা Babel JS এর CDN আমাদের কোডে বসাব এবং আমাদের JS file যুক্ত করার সময় তার টাইপ text/babel করে দিব এটা by-deafault text/javscript থাকে। তাহলে আমাদের কোডবেসে JSX কাজ করবে। যখন আমরা type="text/babel" দিব তখন আমাদের কোডটা Babel JS দিয়ে ঘুরে আসবে।

```
<body>
          <div id="root"></div>

          <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <!-- Babel JS CDN -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

          <script type="text/babel" src="script.js"></script>
</body>
```
কিন্তু আমাদের React ব্যাবহারের সুবিধা আমরা এখনো পাইনি। এবার যদি আমাদের Increment এর কাজটা react দিয়ে করি তাহলে।

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Increment() {
  return (
    <div>
      <h1 id="display">0</h1>
      <button id="increment">Increment +</button>
    </div>
  );
}
root.render(Increment());
```
React এ ফাংশনকে এভাবে লিখা যায়

```
root.render(<Increment />);
```
এবং আমরা আমাদের আগের কোডটিকে React এর এই কোডের নিচে বসাই

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Increment() {
  return (
    <div>
      <h1 id="display">0</h1>
      <button id="increment">Increment +</button>
    </div>
  );
}
root.render(<Increment />);

let number = 0;
const display = document.getElementById("display");
const button = document.getElementById("increment");

button.addEventListener("click", function () {
  number++;
  display.textContent = number;
});
```
কিন্তু লাভ কি হলো? আবার আগের মতই element ধরে ধরে কাজ করতে হচ্ছে। আমরা সুবিধা পাইনি কারণ আমারা ract এর feature এখনো ব্যাবহার করিনি। আমাদের এই ডাটা নিয়ে কাজ করতে হলে আমাদেরকে react এর state ব্যাবহার করতে হবে।
> State হচ্ছে এমন ডাটা যা আমরা আমাদের UI তে ব্যাবহার করি এবং তা পরিবর্তনশীল

যেমন আমাদের এখানে state হচ্ছে number ভ্যারিয়েবলটি,  যেটি আমাদের অ্যাকশনের উপর ভিত্তি করে পরিবর্তন হচ্চে এবং এটার উপর বেস করে আমাদের কনটেন্ট পরিবর্তন হচ্ছে। আমাদের HTML ডকুমেন্ট এ এমন অসংখ্য sate variable থাকতে পারে, react আমাদেরকে এগুলো নিয়ে কাজ করতে সাহাজ্য করে। React বলছে আমারা যদি তার ওয়েতে state management করি তাহলে আমাদেরকে আর DOM নিয়ে কোন চিন্তা করতে হবে না। React নিজেই আমাদের DOM এর কাজ করে দিবে। আমরা শুধু সময়মত state চেঞ্জ করে দিলেই হবে। 
<br/><br/>
এবার আমরা আমাদের আগের কোডের root.render(<Increment />) এর পরের অংশগুলোকে সরিয়ে দেই এবং Increment ফাংশনের ভিতরে React এর built-in একটা ফাংশন এর ভিতরে আমাদের ইনিশিয়াল ডাটার ভ্যালু রাখলাম। এভাবে

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Increment() {
  let number = React.useState(0);
  return (
    <div>
      <h1 id="display">0</h1>
      <button id="increment">Increment +</button>
    </div>
  );
}
root.render(<Increment />);
```
এই useState() টা আমাদের এই Increment() এর State টা ম্যানেজ করে দিবে। এই useState এর একটা ডিফল্ট ভ্যালু দিতে হয়, এই ডিফল্ট ভ্যালুটাকে react আমাদের state এর ইনিশিয়াল ভ্যালু হিসেবে সেট করে দেয়। এখানে আমাদের state হলো number ভ্যারিয়েবলটা। তাই আমরা এই state এর মান by-default 0 দিয়ে রাখলাম।
> let number = React.useState(0);

আমরা চাইলে এই state এর মান যেকোন কিছু (number, string, object, array) দিতে পারি। এখন আমরা যদি এই number state কে কনসোলে প্রিন্ট করি তাহলে আমরা একটি অ্যারে পাব। যার মধ্যে 
1. ১ম element টা হচ্ছে আমাদের state এর ভ্যালুটা
2. ২য় টা হচ্ছে একটা ফাংশন
এই ফাংশনের প্যারামিটারে আমরা যেই ভ্যালু সেট করে দিব, সেই ভ্যালু দিয়ে আমাদের state কে আপডেট করে দিবে। অর্থাৎ, এই ফাংশনের সাহাজ্যে আমরা আমাদের state এর মান পরিবর্তন বা আপডেট করতে পারবো।
<br/><br/>
তাহলে আমরা array destructuring এর মাধ্যমে দুইটা ভ্যারিয়েবলের মধ্যে state ও ফাংশনটাকে নিয়ে নিলাম।  
>  let [number, setNumber] = React.useState(0);

এখানে number ভ্যারিয়েবলের মধ্যে নিয়ে নিলাম state এর ইনিশিয়াল ভ্যালুকে আর setNumber এর ভিতরে নিয়ে নিলাম state কে আপডেট করার ফাংশনটিকে। এবার এই setNumber() টিকে দিয়ে আমরা আমাদের number state এর ভ্যালুকে পরিবর্তন করবো। এখন এই number ভ্যারিয়েবল বা state টাকে আমরা যেখানে আমাদের এই state এর ভ্যালুটা দেখাতে চাই সেখানে এভাবে বসিয়ে দেব বা bind করে দিব।

```
<h1 id="display">{number}</h1>
```
যাতে আমাদের state আপডেট হলে সাথে সাথে এইখানে আমাদের আপডেট টা এখানে শো করে। এভাবে {} এর মধ্যে state বসানোকে **interpolation** বলে। 
<br/>
এবার বাটন element এর মধ্যে আমরা আমাদের setNumber() কে কল করে দিচ্ছি। 

```
<button id="increment" onClick={setNumber(number + 1)}> Increment + </button>
```
কিন্ত এভাবে ফাংশন যুক্ত করলে আমাদের ফাংশনটা নিজে নিজে কল করবে। কিন্তু আমাদের লক্ষ্য হচ্ছে আমরা বাটনে ক্লিক করলেই ফাংশনটা রান হবে, সেক্ষেত্রে আমাদেরকে এভাবে ফাংশন কল করতে হবে। 

```
<button id="increment" onClick={() => setNumber(number + 1)}> Increment + </button>
```
এবার আমাদের কোডটা সুন্দরভাবে কাজ করবে। এখন আমরা যদি এই Increment ফাংশনটাকেই কয়েকবার ব্যাবহার করি, তাহলে আমাদেরকে শুধু এই ফাংশনটাকে কল করতে হবে, আর কিছু করতে হবে না। যা করার React ই করবে। আমরা যখন যেই বাটনে ক্লিক করব শুধু সেই বাটনের জন্যই তার state পরিবর্তন হবে।

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Increment() {
  let [number, setNumber] = React.useState(0);
  return (
    <div>
      <h1 id="display">{number}</h1>
      <button id="increment" onClick={() => setNumber(number + 1)}>
        Increment +
      </button>
    </div>
  );
}
root.render(
  <div>
    <Increment />
    <Increment />
    <Increment />
  </div>
);
```

তাহলে আমরা এখন পর্যন্ত react ব্যাবহারের কি কি সুবিধা পেলাম? 
* আমাদেরকে ম্যানুয়ালি আর DOM এর কোন element ধরতে হলো না।
* state এর ভ্যালু চেঞ্জ হলে সেটাকে আর ম্যানুয়ালি আমাদেরকে সেট করে দিতে হলো না।
* একই রকম কাজের জন্য আমাদেরকে কোড রিপিট করতে হলো না
* আমরা একবার component বানাবো এবং জতবার খুশি তাকে ব্যাবহার করতে পারবো

React আমাদেরকে পুরো ফাংশনালিটির সাথে component দিতে পারে। তাই react কে component library ও বলা হয়। component গুলো একেবারে আলাদা ও স্বাধীন হওয়ায় বড় অ্যাপ্লিকেশনের জন্য ডেভেলপার রা আলাদা আলাদা component নিয়ে কাজ করতে পারে এবং সবগুলো জোড়া লাগিয়ে একটা বিশাল project বানানো যায় proper management করে।
