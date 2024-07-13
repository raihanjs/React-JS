## Mirror State কি?

আমরা যদি প্যারেন্ট এ কোন state তৈরি করি এবং এই স্টেটকে আবার এর চাইল্ড state পাঠাই এবং চাইল্ড স্টেট থেকে আবার ওই ডাটাকে আরেকটা state এর মধ্যে রাখি তখন এটাকে mirroring state বলে।
<br/>
যেমনঃ এখানে আমরা দুটি component তৈরি করেছি। এখানে প্যারেন্ট component থেকে চাইল্ড component এ কালার নামক state পাঠাচ্ছি এবং চাইল্ড component এ আবার একই কাজের জন্য আরেকটা state তৈরি করছি

```
// Parent component
import {useState} from "react";

export function default Parent () {
    const [color,setColor] = useState('red');

    return <Child color={color} />
}

// Child component
import {useState} from "react";

export function default Parent ({color}) {
    const [changeColor,setChangeColor] = useState(color);

    return <div style={{backgroundColor: changeColor}}> ... </div>
}
```

এখন আমরা যদি আমাদের প্যারেন্ট component থেকে color state কে পরিবর্তন করি তাহলে তা আমাদের চাইল্ড component এ কোন ইফেক্ট করবে না। কারণ আমরা আমাদের প্যারেন্ট state এর state চেঞ্জ করলে রি-রেন্ডার করবে এবং চাইল্ড component এ props আকারে যাবে। কিন্তু আমাদের চাইল্ড component এ আমরা আরেকটা state নিয়েছি তাই এখন এই state এর উপর নির্ভর করেই আমাদের এই Child component কাজ করবে। অর্থাৎ প্রথমবার আমাদের এই props টা আমাদের Child component এর ইনিশিয়াল স্টেট হিসেবে বসবে কিন্তু এর পরে Child component এর নিজস্ব state এর কাছে কন্ট্রল চলে যাবে।

<br/>
<br/>
কিন্তু যদি এমন হয় আমরা ইনিশিয়াল ভ্যালু পাঠাচ্ছি প্যারেন্ট component থেকে এবং সেটা Child component এ state এর মধ্যে ইনিশিয়াল ভ্যালু রাখার জন্য তাহলে কোন সমস্যা নাই।

[!Note]

> State mirroring এড়িয়ে যাওয়া উচিত এবং এটি এড়িয়ে যাওয়া React recomended
