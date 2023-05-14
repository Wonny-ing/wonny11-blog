## about Node.js®

Node.js®는 비동기 이벤트 기반의 JavaScript 런타임으로, 확장 가능한 네트워크 애플리케이션을 구축하기 위해 설계되었습니다. 다음의 "Hello World" 예제에서는 많은 연결을 동시에 처리할 수 있습니다. 각 연결마다 콜백이 실행되지만, 작업이 없는 경우 Node.js는 대기 상태에 들어갑니다.

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

이는 현재 보편적으로 사용되는 동시성 모델과 대조적입니다. 해당 모델에서는 운영 체제 스레드가 사용됩니다. 스레드 기반의 네트워킹은 비교적 비효율적이며 사용하기 매우 어렵습니다. 게다가 Node.js 사용자는 프로세스를 데드락 상태에 빠뜨리는 걱정을 할 필요가 없습니다. 왜냐하면 락이 없기 때문입니다. Node.js에서 거의 모든 함수는 직접적으로 I/O를 수행하지 않으므로, Node.js 표준 라이브러리의 동기 메소드를 사용하여 I/O를 수행할 때만 프로세스가 차단됩니다. 아무것도 차단되지 않기 때문에, 확장 가능한 시스템을 Node.js로 개발하는 것은 매우 합리적입니다.

만약 위의 내용 중 일부 용어가 낯설다면, 블로킹 vs. 논블로킹에 대한 전체 문서가 있습니다.
