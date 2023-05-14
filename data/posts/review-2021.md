## 이솝 사이트 레이아웃 클론코딩

이번 과제는 주어진 html, css, js를 활용하여 자신이 원하는 사이트 레이아웃 클론코딩하는 것이었습니다.
저는 그중에서 슬라이드 요소들과 modal창 등 웹사이트에 필요한 대부분의 요소들이 존재하는 이솝 사이트를 클론코딩을 하기로 했습니다.

이번 과제를 하면서 wheel event를 scroll event로 바꾸는 과정에서 애를 먹었는데 그 부분에 대해서 문제점과 해결방법을 정리해 보려고 합니다.

## 원본 사이트 & 클론 사이트

[이솝 홈페이지(원본)](https://www.aesop.com/kr/?gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe6XwyDJ7XKkcsDGNM3a0Vkzv5ektQNtCDlCjHVYZHnww__PTnuH5VkaAri-EALw_wcB)

[이솝 클론 사이트](https://aesop-clone-site.netlify.app/)

### ❗️ 문제 현상

해당 요소의 class 이름을 **`gnbBox`**로 지정했습니다.

**`gnbBox`** 의 높이는 45px이고, position 값은 absolute 입니다.

gnbBox가 스크롤을 내려서 뷰포트에서 사라질 때 gnbBox의 배경색을 변경해 주었고

스크롤을 올릴때는 gnbBox의 position 값을 `fixed`로 설정해주고,
스크롤을 내릴때는 gnbBox의 position 값을 `absolute`로 설정해 주었습니다.

**`wheel 이벤트`** 로 구현했을 때, gnbBox의 닫기버튼을 눌러도 position 값이 그대로 `fixed` 인 것을 확인할 수 있습니다.

하지만 똑같은 조건으로 **`scroll 이벤트`** 로 구현했을때 gnbBox의 닫기버튼을 누르면 position 값이 `absolute` 로 변합니다.

왜 이런 문제가 발생했는지 찾기 위해서 console에 **`window.scrollY`** 값을 출력해보았습니다.

스크롤을 올릴때, `gnbBox` 의 position 값이 **`absolute`** 에서 **`fixed`** 로 변하게되어 window.scrollY 값이 720 → 675 즉, `gnbBox` 의 **높이값인 45px만큼 줄어들고**

닫기버튼을 누르면 position 값이 `absolute` 로 변하게 되면서 window.scrollY 값이 675 → 720 으로 다시 변한것을 확인할 수 있었습니다.

> 💡 닫기 버튼을 누를 때 postion값이 absolute로 변경하라는 조건은 넣지 않았습니다!

### ✏️ 문제현상 이유

`gnbBox`의 각 카테고리를 누르면, overflow-y: hidden이 적용되면서 우측에 스크롤바가 사라집니다.

그러면 화면이 우측으로 살짝 커지면서 퍼센트 너비로 적용된 이미지 크기가 바뀌고, 그러면서 화면 스크롤이 살짝 움직입니다.
이때 **`scroll 이벤트`** 가 **자동으로 발생**해버리고 결국 position 값이 변하게 됩니다.

반대로 **`wheel 이벤트`** 는 화면의 **스크롤과 상관 없이 마우스 휠이 동작할 때만 발생** 하기 때문에, 화면 스크롤이 살짝 움직여도 문제가 없는 것입니다.

### ✅ 해결

간단하게, 버튼을 눌렀을 때 scroll 이벤트가 동작하지 않도록 예외 처리를 추가하면 됩니다.

```js
let preScrollTop = 0;
window.addEventListener(
  'scroll',
  _.throttle(() => {
    let nextScrollTop = window.scrollY;

    if (nextScrollTop < preScrollTop) {
    	// 스크롤 올릴 때 실행
      	gnbBox.style.position = 'fixed';
    } else if (nextScrollTop > preScrollTop) {
      	// 스크롤 내릴 때 실행
      	gnbBox.style.position = 'absolute';
       // // GNB가 켜졌을 때, 스크롤 이벤트 핸들러가 동작하지 않도록 처리!
    	if (isActiveGNB) return
    }

// ...
```

위의 코드 처럼 GNB가 켜졌을때 스크롤 이벤트 핸들러가 동작하지 않도록 처리하면 됩니다.
