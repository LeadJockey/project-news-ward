# project-news-ward
유즈케이스로 알아보는 큰틀!
> 회원가입 

> 뉴스를 본다 

> 뉴스를 스크랩 한다

> 포스트를 작성한다

> 포스트에 “스크랩”한 뉴스를 첨가

> 포스트 목록을 본다

> 포스트 중 맘에드는 컨텐츠를 와드한다

> 내 와드 목록에서 내가 와드한 포스트를 확인한다

> 뉴스 보기만 허용 / 포스트에 댓글

##첫 화면 구성

첫화면에 무엇을 노출할 것인가? => 메인페이지 구성
+ 주력 컨텐츠가 무엇인가? === 포스트
+ 뉴스냐 ? 포스트냐?
+ 션 : 포스트가 주요하다
+ 델 : 뉴스의 카테고리별 해드라인이 주요하다
+ 션 : 뉴스가 전부가 아니다. 뉴스를 가진 광장의 역할 더 중요하다고..
+ 델 : 뉴스와 포스팅을 탭으로 구별하여서 노출한다.
쿼리에 대한 반응은 어떻게 할것인가? => 기능적 구성
+ 쿼리를 날린다 : 비트코인
+ 뉴스 api 비트코인 호출 > 디비에 포스트리스트에서 해당 쿼리 검색(해시테그)

주요 노출 아이템 선정 === 포스트

노출 기준 (필터) +좋아요/싫어요/최신순/조회수/댓글수 (기준판별은 날짜로)

카테고리? 헤시테그

@(셀박)감성 #밤 #커피 #야경 #남친자랑

##포스트 작성

에디터가 들어가야 한다 froala editor

최상단 네비 영역만 플맄킹 slick item

포스트 요소

+제목,본문,카테고리,해시테그,작성자,작성일자,(스크랩 넣기)

포스트의 힛팅 요소

+좋아요,싫어요,조회수,댓글,와드
