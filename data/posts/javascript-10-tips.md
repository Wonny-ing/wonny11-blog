## JavaScript Click Event

자바스크립트에서 클릭이벤트를 발생시킬 때 **onclick**과 **addEventListenr** 두가지 방법을 사용합니다.
두가지 방법엔 차이점이 존재하기 때문에 두가지 방식으로 코드를 작성해 보면서 알게된것을 정리해보았습니다.

### 1. onclick

```html
<!--html-->
<button>click me!</button>
```

```javascript
// javascript
const btn = document.querySelector('button');

btn.onclick = () => {
  console.log('1');
};

btn.onclick = () => {
  console.log('2');
};

btn.onclick = () => {
  console.log('3');
};
```

👉**결과**

버튼을 누르면 콘솔 탭에서 마지막으로 호출한 **3**만 출력되고 전에 호출된 **1,2**는 출력되지 않습니다.
이처럼 `onclick`은 이벤트가 여러개 적용되지 못하고 새로운 이벤트가 추가되면 기존의 이벤트를 덮어씌우며 마지막에 등록된 이벤트만 작동된니다.

### 2. addEventListenr

```html
<!--html-->
<button>click me!</button>
```

```javascript
// javascript
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  console.log('1');
});

btn.addEventListener('click', () => {
  console.log('2');
});

btn.addEventListener('click', () => {
  console.log('3');
});
```

👉 **결과**

호출된 **1,2,3** 전부 출력됩니다.
이처럼 `addEventListenr`를 사용하면 이벤트를 여러번 사용해도 누적되어 모든 이벤트가 작동됩니다.

> 💡 **`onclick`**과 **`addEventListenr`**는 **덮어쓰기** vs **누적**의 차이입니다.

**`onclick`** 은 하나의 요소에 클릭 이벤트를 걸어줄 때마다 기존에 등록되었던 클릭 이벤트가 덮어씌여지지만,
**`addEventListenr`** 는 하나의 요소에 여러개의 핸들러를 등록할 수 있으며 HTML element 뿐만 아니라 모든 DOM element에 대해 동작합니다.

또한 이벤트 캡쳐링과 버블링을 설정할 수도 있기 때문에 좀더 세밀한 이벤트 등록이 가능합니다.
