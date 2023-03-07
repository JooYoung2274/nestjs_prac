# hexagonal_architecture_example_Nest.js

### hexagonal architecture에 대한 설명 -> [<링크>](https://joorrr.tistory.com/)

### 설명

![](https://velog.velcdn.com/images/joo0/post/3d597ca8-6e3b-44b1-82eb-c96827250561/image.png)

- Nest 환경에서 hexagonal architecture 구현
- 도메인(기능? 여기서는 board) 별로 adapters, domain으로 나눠서 구현
- 비즈니스 로직은 service layer에 있고, 데이터베이스 쿼리들은 repository에 있음.
  (위에 있는 사진이랑 좀 다르게 구현. 사진은 서비스를 포트로 사용하는 것 처럼 보이는데 실제로는 interface 구현해서 포트로 사용하고 서비스 계층은 중간 어플리 케이션에 넣음)
