# NestJS Practice Project

NestJS를 활용한 연습 프로젝트입니다.  
MySQL 기반의 **Sakila 오픈소스 데이터베이스**를 사용하여 실습을 진행했습니다.  
REST API 중심의 CRUD 구현 및 DTO, Entity 구조 설계를 연습하기 위해 제작되었습니다.  
추후 REST API를 제거하고 **GraphQL** 및 **MCP** 기반으로 전환할 예정입니다.

아직 개발 진행중 

---

## 주요 기능

- RESTful API
- Swagger를 통한 API 문서화
- JWT 인증/인가 구현
- Winston 기반 Logging
- Paging 처리
- 예외 필터 및 인터셉터 적용
- 환경 변수(.env) 설정 분리
- 서비스 계층 구조화 및 모듈화

---

## 기술 스택

- **Framework:** NestJS (Node.js)
- **Database:** MySQL (Sakila)
- **ORM:** TypeORM
- **Auth:** JWT-based Authentication
- **API Docs:** Swagger (NestJS Swagger Module)
- **Language:** TypeScript


---

## 데이터베이스 구조

Sakila 오픈소스 데이터베이스를 활용했습니다.  
전체 스키마 및 테이블 구조는 아래 문서를 참고하세요:

[MySQL Sakila Structure Documentation](https://dev.mysql.com/doc/sakila/en/sakila-structure.html)

---

## 향후 계획

- REST API → GraphQL 전환
- MCP (Multi-Modal Communication Protocol) 기반 확장
- 실시간 데이터 처리 및 WebSocket 연동
- Docker 기반 배포 환경 구성
- 테스트 코드(Jest) 추가 및 자동화

---

## 실행 방법

의존성 설치
npm install

개발 서버 실행
npm run start

프로덕션 빌드
npm run build
npm run start:prod



---

## License

This project is created for learning and personal practice purposes.
