## REACT Component কি?

Components are individual bits of code. Everything in react is a component. React components are the main feature of React. Components break down a large piece of UI design into small reusable UI components and render them when they are needed.
<br/><br/>
Components are two types and they are –
1. Stateless Component - functional component
2. StateFull Component - class component


**Component কেন আসলো?** <br/>
আমাদের React এর মধ্যে যে element ছিল সেটা আসলে ফাংশনাল কোন কিছু ছিল না। আমাদের ফাংশনাল বৈশিষ্ট্য সহ কিছুর দরকার ছিল যাতে আমরা আমাদের ডাটা ডাইন্যামিক ভাবে আমাদের অ্যাপে দেখাতে পারি। আর এই ফাংশনাল বৈশিষ্ট্যসহ যেই জিনিসটা আমরা আমাদের React অ্যাপে ব্যাবহার করি সেটাই হচ্ছে component। React এর ভিতরে ফাংশন হচ্ছে component আর component React এর element return করে। যেমনঃ

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Clock() {
  return (
    <h1 className="heading">
      <span className="text"></span>
      <span className="time">{new Date().toLocaleTimeString()}</span>
    </h1>
  );
}
root.render(Clock());
```

আমরা চাইলে এই এই ফাংশনটাকে এভাবেও লিখতে পারি

```
root.render(<Clock/>);
```

React component ব্যাবহার করার সুবিধা হলো আমরা একবার component তৈরি করে সেটাকে বারবার ব্যাবহার করতে পারি এবং চাইলে একইরকমের দেখতে কিন্তু ভিন্ন ভিন্ন ডাটা দিয়েও ওই একই component কে বারবার ব্যাবহার করতে পারি এবং দেখাতে পারি ওই component মধ্যে ডাটা পাস করে। যেমনঃ

```
root.render(<Clock locale="bn-BD"/>);
```

আমরা যখন কোন একটা component এ ডাটা বা প্যারামিটার পাস করি তখন ওই ডাটাকে বা ডাটাগুলোকে component এর argument এ একটা object এর মধ্যে রাখে। যেমন এখানে আমাদের পাস করা ডাটা ** locale="bn-BD" ** কে Clock ফাংশনের argument এ এভাবে থাকবে {locale: 'bn-BD'}। আবার আমরা যদি এই component এর মধ্যে আরও প্যারামিটার পাস করতাম যেমনঃ

```
root.render(<Clock locale="bn-BD" name="bangladesh" id="1971" />);
```

তাহলে আমাদের Clock ফাংশনের argument এ পেতাম {locale: 'bn-BD', name: 'bangladesh', id: '1971'}। এভাবে পাস করলে এগুলোকে props বলে। আবার আমরা যদি এই ফাংশনের ভিতরে কিছু লিখতাম তাহলে সেটা আমরা props.children এর মধ্যে পেতাম।

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Clock(props) {
  console.log(props);
  return (
    <h1 className="heading">
      {props.children}
      <span className="text"></span>
      <span className="time">{new Date().toLocaleTimeString()}</span>
    </h1>
  );
}
root.render( <Clock locale="bn-BD" id="1971"> BD Time Now </Clock> );
```

props এর আউটপুট console এ {locale: 'bn-BD', id: '1971', children: 'BD Time Now'} । props এর মান শুধু বাহির থেকেই পাস করতে হবে এবং props এর মান ভিতর থেকে পরিবর্তন করা যাবে না। props পরিবর্তন করার সাথে সাথে component টি re-render হবে। তো ভিতর থেকে props পরিবর্তন করলে আমরা infinite লুপের মধ্যে পড়বো, তাই আমরা কখনোই কোন component এর ভিতরে props এর মান পরিবর্তন করব না।
<br/>
এভাবে ফাংশনের মাধ্যমে component তৈরি করা হলে তাকে React এর ভাষায় functional component বলা হয়। React এ functional component ছাড়াও class component syntax আছে। React এর functional component কে বলা হয় stateless component আর class component কে বলা হয় sateful component।
<br/>
<br/>

**Class Component**

```
const root = ReactDOM.createRoot(document.getElementById("root"));
class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text"></span>
        <span className="time">
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}
root.render(<Clock locale="bn-BD" />);
```
