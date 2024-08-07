# Reacting to input with state

React declarative way তে UI কে ম্যানিপুলেট করে। এখন এই declarative এর মিনিং কি? প্রোগ্রামিং এ দুই ধরণের প্যারাডাইম আছে। একটি হচ্ছে-

1. Declarative Paradigm
2. Imperative Paradigm

এখন আমাদের বুঝতে হবে কোনটার মানে কী?

### Declarative Paradigm

- Declarative মানে হচ্ছে ঘোষণা দেয়া। ধরুন আপনি নীলক্ষেতে থেকে এয়ারপোর্ট যাবেন। আপনি একটি ট্যাক্সি ভাড়া করে ড্রাইভারকে বললেন এয়ারপোর্ট যেতে তখন ড্রাইভার ড্রাইভ করে আপনাকে এয়ারপোর্ট পৌঁছে দিল।

### Imperative Paradigm

- Imperative মানে হচ্ছে কমান্ড দিয়ে দিয়ে কাজ করানো বা প্রতিটা স্টেপস বলে বলে কাজ করানো। উপড়ের উদাহরণের ক্ষেত্রে এবার আপনি ট্যাক্সি ভাড়া করে ড্রাইভারকে বললেন ডানে যাও, বামে যাও, সোজা যাও এভাবে বলে বলে এয়ারপোর্ট পৌঁছালেন।

যখন আপনি UI interactions এর জন্য কাজ করেন আপনি চিন্তা করতে পারেন ইউজারের কোন অ্যাকশনের কারণে UI এর পরিবর্তন হতে পারে। মনে করুন একটা ফর্ম ইউজারকে উত্তর সাবমিট করতে দেয় তার মধ্যে নিচের অ্যাকশন গুলো থাকবে।

1. যখন ইউজার ফর্ম এর মধ্যে কিছু লিখবে তখন “Submit” বাটন enabled হবে।
2. যখন ইউজার “Submit” বাটন press করবে, ফর্ম ও বাটন উভয়ই disabled হবে এবং একটি স্পিনার অন হবে।
3. যদি নেটওয়ার্ক রিকুয়েস্ট সফল হয় তাহলে ফর্মটি হিডেন হবে এবং “Thank you” মেসেজ দেখাবে
4. আর যদি নেটওয়ার্ক রিকুয়েস্ট বিফল হয় তাহলে এরর মেসেজ দেখাবে এবং ফর্মটি আবার enabled হবে।

<br/>

এখন উপড়ের কাজটি যদি আমরা Imperative অ্যাপ্রচ এ করতে চাই তাহলে আমাদের কোন আকশনের কারণে UI তে কি কি হবে তার জন্য আমাদের ম্যানুয়ালি কোড করতে হবে অর্থাৎ UI কে ম্যানুয়ালি চেঞ্জ করতে হবে।
[উধাহরণ](https://react.dev/learn/reacting-to-input-with-state#:~:text=In%20this%20example%20of%20imperative%20UI%20programming%2C%20the%20form%20is%20built%20without%20React.%20It%20only%20uses%20the%20browser%20DOM%3A)
<br/>

Imperative অ্যাপ্রচ কোন একটা আইসোলেটেড উদাহরণের জন্য ভালভাবেই কাজ করে। কিন্তু এই অ্যাপ্রচ এ কাজ করা কঠিন হয়ে যায় যদি আমাদের আরও বেশি অ্যাকশন থাকে। যেমন আমরা যদি আরও একটি অ্যাকশন এখানে যুক্ত করি তাহলে আমাদের খুব ভাল্ভাবে খেয়াল রাখতে হবে এবং চেক করতে হবে সেই অ্যাকশনের জন্য আমাদের অ্যাপে কোন বাগের তৈরি হয় কি না? উদাহরনস্বরুপ - কোন কিছু হাইড অথবা সো করতে ভুলে যাওয়া।

<br/>
এই সমস্যা সমাধানের জন্যই React কে built করা হয়েছিল।

<br/>
React এর মধ্যে আমাদেরকে সরাসরি UI এর কোন components কে show, hide বা enable, disable করতে হয় না। তার পরিবর্তে আমাদেরকে শুধু বলতে হয় আমরা কোন জিনিসটাকে show, hide বা enable, disable করতে চাই। এবং React নিজে থেকে বুঝে ফেলে কীভাবে UI কে আপডেট করতে হবে।

<br/>
চিন্তা করুন আপনি ট্যাক্সি তে উঠে ড্রাইভারকে ঠিক কোথায় কোথায় টার্ন নিতে হবে তা বলার পরিবর্তে আপনি কোথায় যাবেন তা বলে দিলেন। এটা ড্রাইভারের কাজ ঠিক জায়গায় যাওয়া, এমনকি সে শর্টকাট ও জানতে পারে।
