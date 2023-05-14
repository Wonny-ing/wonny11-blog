프로젝트에 해당 라이브러리를 적용해보기 위해서 공부한걸 적어두었습니다.
사용법과 그로 인해 생겨난 문제상황 등도 같이 기록할 예정입니다.

# React Query란?

---

`React Query`는 네트워크에서 가져온 데이터를 서버 상태(server state) 할 수 있게 도와주는 라이브러리 중 가장 많이 사용되는 라이브러리입니다.
서버 상태란 원격에 위치한 공간에 저장되며 앱이 소유하거나 제어하지 않습니다.

## React Query를 사용하는 이유

---

api를 사용할때 useEffect를 사용해 커스텀 훅을 만들어 재사용하는 방법도 있습니다.
하지만 useState를 통해 어떤 상태로 만들건지 useEffect를 통해 어떤 데이터를 리턴해줄지 결정될 뿐 이 상태를 글로벌적으로 캐싱하거나 재사용하거나 할 수는 없습니다.

만약 재사용하고 싶다면 함수 밖에서 글로벌 변수(전역 변수)를 만들어서 함수를 호출할 때마다 전역변수에 있는 데이터를 업데이트하거나 읽어오면 로직뿐만아니라 값을 재사용할 수 있습니다. 하지만 이렇게 직접적으로 전역 상태를 관리하는것은 좋은 방법은 아닙니다.

따라서 위의 커스텀 훅의 문제점은

1. 캐시 X:
   네트워크에서 받아온 데이터를 별도로 저장하는것이 아니라 훅을 호출할 때마다 계속 새롭게 데이터를 받아옵니다.

2. retry기능 X:
   네트워크 통신에 실패했을때 다시 재시도할 수 있는 기능이 없습니다.

이런 문제점을 `React Query`는 해결해 줍니다.

## 사용방법

---

### QueryClientProvider

- 컴포넌트가 useQuery 훅 안에서 QueryClient 인스턴스에 접근할 수 있도록 QueryClientProvider를 컴포넌트 트리 상위에 추가하여 감싸주어야 합니다.
- 쿼리 인스턴스를 생성 후 client={queryClient} 작성해줍니다.

### useQuery

---

서버에서 데이터를 가져오고 캐싱을 하는데 사용하는 기본이며 가장 많이 사용하게 되는 훅입니다.

useQuery를 사용할때는 위 코드처럼 Key와 가지고 오는 함수를 전달해 주어야 합니다.

**return 데이터**

- data : 쿼리 함수가 리턴한 Promise에서 resolve된 데이터
- isLoading : 저장된 캐시가 없는 상태에서 데이터를 요청중일 때 true

data, isLoading, error 가 주로 사용되는 3가지 return 값이고 그 이외에도 더 많은 return 값들이 존재합니다.

#### Query Key

---

QueryKey 를 기반으로 데이터 캐싱을 관리합니다.

리액트 쿼리별로 Key를 제공해주면 네트워크 통신별로 각각 고유한 Key를 제공해주고 해당 Key 이름 아래에 데이터를 메모리에 보관해둡니다.

이 키는 배열로 설정을 할 수 있습니다. 왜 문자열이 아니고 배열이냐면 우리가 세밀하게 키의 조합을 만들어 나갈 수 있기 때문입니다.

```js
useQuery(['Carts'], ...)
```

그 어떤 컴포넌트에서 useQuery를 Carts라고만 사용하면 동일한 캐시된 데이터를 공유합니다

```js
const userName = 'wonny';

useQuery(['Carts', userName], ...)
```

다른 컴포넌트에서 useQuery를 배열의 첫번째가 Carts이고 두번째가 userName(문자열)을 사용한다면 다른 키이므로 서로 다른 캐시를 사용하게 됩니다.

따라서 userName에 따라서 다른 데이터를 받아올 수 있습니다.
위의 코드에선 userName이 없다면 빈문자열을 전달 하도록 설정했습니다.

#### Query Functions

---

queryFunction에는 서버에서 데이터를 요청하고 Promise를 리턴하는 함수를 전달합니다. 즉 axios.get(...), fetch(...) 등을 리턴하는 함수를 말합니다.

저는 firebase에서 데이터를 불러오는 함수를 따로 만들어 전달해 주었습니다.

#### Query Options

리액트 쿼리 공식 문서에 많은 쿼리 옵션에 대한 소개가 있지만 제가 사용한 옵션에 대한 것만 다뤄보겠습니다.

**enabled (boolean)**
enabled 는 쿼리가 자동으로 실행되지 않게 설정하는 옵션입니다.

따라서 위의 코드는 userName이 존재할 때만 쿼리 요청을 한다는 의미입니다.

**staleTime (number | Infinity)**
staleTime 은 데이터가 fresh 상태로 유지되는 시간을 말합니다.
해당 시간이 지나면 stale 상태가 됩니다.

default staleTime은 0으로 fresh 상태에서는 쿼리가 다시 mount 되어도 fetch가 실행되지 않습니다.

**onSuccess ((data: TDdata) => void)**
onSuccess 는 쿼리 성공 시 실행되는 함수입니다.
매개변수 data는 성공 시 서버에서 넘어오는 response 값입니다.
then의 역할을 한다고 이해하면 될것 같습니다.

[리액트쿼리 공식문서 - useQuery]('https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery')
