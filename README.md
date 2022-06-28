Nest.js_Prac


- nest_prac branch는 nest를 이용한 단순 CRUD, 인증 구현 연습.


- main branch에서 port and adapter 아키텍처로 변환해볼 예정
  - controller와 service는 port를 통해서 주고 받게 변경함. (interface 사용)
  - service와 repository도 port를 통하게 변경하고 싶었는데 Repository가 typeorm에 의존하고 있기 때문에 좀 더 고민 필요.
