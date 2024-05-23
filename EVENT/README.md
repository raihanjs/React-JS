# React Events handle and controls re render

আমরা ভ্যানিলা JS দিয়ে DOM এ যেভাবে event handler অ্যাড করতাম যেমন: onclick, onkeypress, onmouseover, onload। ঠিক একইভাবে আমাদের React এও Event আছে। যেমনঃ

```
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>
```

অথবা arrow function ব্যাবহার কর।

```
<button onClick={() => {
  alert('You clicked me!');
}}>
```

আমাদের class component এ যদি আমরা এভাবে event handle এর ফাংশন লিখি তাহলে আমাদেরকে এরর দেখাবে।
