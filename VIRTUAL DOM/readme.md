## REACT Virtual DOM কি?

Virtual DOM এর ব্যাপারে জানার আগে আমরা main DOM বিষয়ে একটু জেনে নেই। অনেকে বলেন যে, DOM manipulation বা DOM operation slow. কিন্তু আসলে DOM যথেষ্ট fast। DOM এ কোন element add অথবা remove করা simply কোন একটি object থেকে কোন প্রোপার্টি add অথবা remove করার মতই fast। DOM সেটা efficient ও fast করতে পারে।
<br/>
কিন্তু DOM চেঞ্জ হওয়ার পরে আমাদের চোখের সামনে সেটাকে দেখানোর জন্য Browser কে যে কাজ করতে হয় সেই প্রসেসটা slow.
<br/><br/>
আমরা যখন আমাদের কোন HTML Document কে Browser এ রান করি তখন Browser রেন্ডার ইঞ্জিন সেটাকে parse করে এবং একটা DOM tree বানায়। DOM tree তে সবগুলো HTML element একেকটা node হিসেবে থাকে। আবার আমাদের HTML এর সাথে যে CSS style গুলো এসেছিল সেগুলো আবার CSS Parser এর কাছে যায়, এবং সেটাকে parse করে DOM এর মট একাটা মডেল বানায় যেটাকে CSS Object Model বা CSSOM বলা হয়।
<br/>
এই parsed HTML ও parsed CSS মিলে Render Tree নামে আরেকটা Tree বানায়। এই Render Tree টাকে একটা Layout এর মধ্যে দিয়ে যেতে হয়। এই Layout phase এ মুলত যে কাজটা হয়, এই যে আমাদের CSS node গুলো আছে এবং এই যে DOM node গুলো আছে এখন কোন জায়গায় প্রিন্ট করবে সেই জিনিসটার জন্য তার X ও Y co-ordinate এর দরকার হয়। পুরো ওয়েব পেজটিকে কল্পনা করে একটি X ও Y axis বরাবর। এবং আমরা যেভাবে X ও Y axis এ পয়েন্ট করতে পারি সেভাবে Browser এ ও কোন জায়গায় কি পয়েন্ট করতে হবে সেই co-ordinate গুলো এই সময়টায় বসে যায়। যেহেতু এখন আমাদের কাছে Render Tree আছে, সেগুলোর style আছে এবং কোন জায়গায় প্রিন্ট করতে হবে তার co-ordinate ও আছে তাই এবার লাস্ট phase, paint phase এ ফাইনালি সে paint অথবা print করে দিবে এবং তারপর সেই আউটপুট আমরা আমাদের Browser এ দেখতে পারব।
![Browser Rendering HTML file!](../assets/virtual%20dom/browser%20render%20process.drawio.png)
<br/>
এটা হলো পুরো Browser এ কোন কিছু রেন্ডার হওয়ার প্রসেস। আসলে DOM operation টা slow না এই painting প্রসেসটা slow।
<br/>
যখনই আমরা DOM এ কোন কিছু চেঞ্জ করি, Browser কে এই Render Tree টাকে আবার তৈরি করতে হয়। সমস্ত style infromation, DOM node কোথায় কে বসবে তা আবার recalculate করতে হয়। এবং ফাইনালি আবার তা paint করতে হয় তারপর আমরা চেঞ্জটা আমাদের Browser এ দেখতে পাই।
![Browser Rendering HTML file!](../assets/virtual%20dom/re-render.png)
