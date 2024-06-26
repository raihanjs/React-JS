## REACT State কি?

State শব্দের অর্থ হচ্ছে কোন কিছুর অবস্থা। React এর ক্ষেত্রে আমাদের component এর মধ্যে যে ডাটাটা আছে তার অবস্থা বুঝায়। অর্থাৎ component এর মধ্যে যে ডাটাটার মান পরিবর্তন হয় তাকে State বলে। State হচ্ছে component এর ভিতরের ডাটা বা তার নিজস্ব ডাটা। State কে কম্পনেন্ট এর মেমরী বলা হয়।
<br/>
অন্যভাবে বলা যায় যে ডাটাটা পরিবর্তন হয় সেটাই State। State হচ্ছে React এর একটি Hook। Hook হচ্ছে স্পেশাল ফাংশন।

<br/><br/>
আর props হচ্ছে component এর বাহিরের ডাটা। props কে আমরা component এর বাহির থেকে পাঠাই বা বাহির থেকে কন্ট্রোল করতে পারি।
<br/><br/>
React শুধুমাত্র দুইটা সময়ে react kore.

1. যখন তার state চেঞ্জ হয়
2. props চেঞ্জ হলে
   props শুধু তার প্যারেন্ট component চেঞ্জ করতে পারে যেমন

```
const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
  render() {
    return (
      <h1>
        <span>{new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

function App() {
  return (
    <div>
      <Clock locale="bn-BD" />
    </div>
  );
}

root.render(<App />);
```

অর্থাৎ, props চেঞ্জ হলেই clock() টি রি-রেন্ডার হবে।
<br>
তাহলে বুঝা গেল, state হলো component এর ডাটা আর সেই ডাটা টাই হলো component এর অবস্থা যার কারণে এটাকে state বলা হয়। state কে ধরা যাক এটা একটা component এর ডাটাবেস।
<br>
আমাদের এই clock() টা রান করলে একটা সময় দেখাবে। ধরা যাক বর্তমান সময় 8:59:13 এবং আমরা এই সময়ে আমাদের clock() টিকে রান করলাম। তাহলে আমাদের UI তে 8:59:13 দেখাবে। চালু হওয়ার পর আমাদের state কিন্তু আর চেঞ্জ হচ্ছে না UI তে। কিন্তু আমাদের সময় কিন্তু প্রতি সেকেন্ডে চেঞ্জ হচ্ছে, অর্থাৎ আমাদের state প্রতি সেকেন্ডে চেঞ্জ হচ্ছে কিন্ত আমাদের state চেঞ্জ হচ্ছে না, কারন আমরা React কে চেঞ্জ হতে বলিনি এবং আমাদের ডাটা ও চেঞ্জ করিনি। এই state চেঞ্জ করতে হলে আমাদেরকে react এর ওয়েতে তাকে ডাটাটা দিতে হবে। আমরা এই class component এ React.Component কে extends করেছিলাম। আর এই React.Component এর মধ্যে একটা প্রপার্টি বা মেথড আছে state নামে।
<br><br>
আমরা এখন চাচ্ছি সময় চেঞ্জ হওয়ার সাথে সাথে আমাদের UI তে পরিবর্তনটা দেখাতে। অতএব, এই সময়টাকে একটা state ডিফাইন করে তার মধ্যে রাখতে হবে। এবং এই state হচ্ছে simple একটা JS Object যে কিনা আমার এই component এর ডাটাবেস কে নিজের মধ্যে store করে রাখবে।
<br><br>
আমরা জানি, কোন component এ যদি আমি কোন ডাটাবেস বানাতে চাই তাহলে সেই ডাটাবেসকে একটা ইনিশিয়াল ভ্যালু দিতে হবে। তো কোন ক্লাস এ যদি কোন কিছু ইনিশিয়ালাইজ করতে হয় তবে constructor () ব্যাবহার করতে হয়।

```
const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <h1>
        <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

root.render(<Clock locale="en-US" />);
```

এই কোডে আমাদের শুধু সময়টা নিয়মিত পরিবর্তন হবে। তাই নিচের এই ডাটাটাকে আমরা আমাদের state এর মধ্যে রাখলাম এবং এই state টাকে যেখানে আমাদের ডাটা শো করাব সেখানে interpolation এর মাধ্যেমে বসিয়ে দিলাম।

```
 this.state = { date: new Date() };
```

যখনই আমরা কোন ওয়েতে এই state এর মান পরিবর্তন করবো তখনই আমাদের class component এর এই render() টি কল হয়ে যাবে এবং সাথে সাথে আমাদের component টি আপডেটেড state দিয়ে পরিবর্তন হয়ে যাবে। এবার যদি আমরা আমাদের কোডকে রান করি তাহলেও আমাদের UI তে একটা সময় এসে স্থির হয়ে থাকবে। কারণ হচ্ছে আমরা state ঠিকই অ্যাড করেছি কিন্ত state চেঞ্জ করার কোন ফাংশন লিখি নাই। আমরা আমাদের state constructor ফাংশনে ইনিশিয়ালাইজ করেছি এবং আমাদের component এর মধ্যে সেট state কে দিয়ে দিয়েছি। তাই আমাদের কোড রান করলে render() টি একবারই কল হয়ছে।
<br>
এখন আমরা যে আমাদের state বা ডাটাটাকে চেঞ্জ করবো এরজন্য আমাদের একটা ফাংশন লাগবে যার মাধ্যমে আমরা react কে বলতে পারবো আমরা আমাদের ডাটা বা state কে চেঞ্জ করলাম। এজন্য react আমাদেরকে একটা মেথড setState() দিয়ে রেখেছে যেন আমরা চাইলে আমাদের ডাটাকে চেঞ্জ করতে পারি। setState() দিয়ে কল করলে react বুঝতে পারবে যে ডাটা চেঞ্জ হয়েছে। এবং তখন সে render() কে কল করে দিবে। এই setState() টা React.Component এর ই একটা মেথড। তাহলে এবার আমাদের কোডে আমরা এই মেথডটাকে কল করবো।
<br>
কিন্তু এই মেথডটা কল করার আগে আমাদেরকে নিশ্চিত হতে হবে যে আমাদের component টা DOM এ লোড হয়েছে। লোড হওয়ার পরেই পরবর্তী চেঞ্জটা আমাদেরকে ফায়ার করতে হবে। কিন্তু আমরা কীভাবে জানবো যে আমাদের ডাটা বা state টা DOM এ ইন হয়েছে কি না?
<br>
আমরা জেকুয়েরি দিয়ে কাজ করার সময় document.ready দিয়ে কাজ করতাম। এর মানে ছিল আমাদের HTML file থেকে DOM টা তৈরি হলে তারপর আমরা কিছু একটা করবো।
<br>
React এও এমন একটা ফাংশন আছে, আমাদের state এর ডাটা পুরোপুরি DOM এ চলে গেলে অর্থাৎ DOM এ প্রিন্ট হলে react আমাদেরকে একটা কলব্যাক ফাংশন দিয়ে দেয়, যে হ্যা এই state বা ডাটাটা আমার DOM এ পুরোপুরিভাবে লোড হয়েছে। সেই ফাংশনটাকে যদি আমি কল করি তাহলে জানতে পারবো কখন আমাদের DOM এ ডাটাটা ইন হয়েছে। এই ফাংশনটার নাম হচ্ছে componentDidMount()। এই ফাংশনকে react এর class component এর একটা lifecycle event বা hook বলা হয়। এই ফাংশনটাও React.Component এর একটা মেথড।

[!Important]

> আমরা জানি যে আমাদের state চেঞ্জ হলেই React এর component re-render হয়। তাহলে নিচের কোডে আমাদের state আপডেট হলে সাথে সাথেই আমাদের পুরো App component টি re-render হওয়ার কথা এবং re-render হলে আমাদের useState এর মান আবার ০ হয়ে যাওয়ার কথা। অর্থাৎ এমন হওয়ার কথা ছিল const [index,setIndex] = useState(0)। কিন্তু react এখানে প্রথমে এভাবেই আসে তারপর সে যখনই দেখে useState কে কল করা হয়েছে তখনই সে চেক করে তার index state এর কোন ভ্যালু সেট করা আছে নাকি। যেহেতু আমাদের state আপডেট হয়ে 1 হয়েছিল তাই তখন সে আমাদের index এর মান 1 করে দেয়। আবার পরের render এ useState(0) থাকে এবং এবার index এর ভ্যালু 2 পাওয়ায় সে index এর মান 2 করে দেয়।

```
export default function App(){
  const [index,setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index + 1);
  }

  return (
    <div>
      <h1>{index}</h1>
    </div>
    )
}
```

[!Note]

> state is isolated and private. মানে এটা যেকোন একটা কম্পোনেন্ট এর ভিতরেই কাজ করবে। একই নামের দুইটা state দুই জায়গায় ব্যাবহার করলেও তারা আলাদা আলাদাভাবে কাজ করবে। এটা শুধু তাকে যে component এর মধ্যে ডিফাইন করা হয়েছে শুধুমাত্র সেই component এই অ্যাক্সেস করা যাবে।
