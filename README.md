# Portfolio
Jihyung's Portfolio

## 주요 기능 구현 사항
- document에서 scroll 이벤트가 발생하여 navbar section보다 document가 내려갔을 때 html class를 변경(.navbar--dark)하여 배경색을 transparent하게 함.

- navbar menu div 영역 안에 있는 li 요소에 대한 click 이벤트 발생시, scrollIntoView() 함수가 동작하여 해당 요소의 html data-link에 저장된 각각의 section으로 이동하게 함

- home section의 "contact me" 버튼 클릭 시, scrollIntoView() 함수가 동작하여 해당 요소의 html data-link에 저장된 contact section으로 이동하게 함

- 웹 페이지 우측 하단의 arrow up 버튼 클릭 시, 웹 페이지 최상단으로 이동하는 기능과 home section의 반절 크기에 도달하였을 때만 해당 버튼이 나타나도록 함

- home__container class가 scroll되어 viewport가 home section 하단으로 내려갈수록 opacity 값을 감소시켜 fade-out 효과가 발생하도록 함

- work section의 work category를 클릭하면 animation-out 효과가 적용되면서 project dataset type이 일치하는 project만 나타나도록 filtering 함

- navbar section의 navbar menu를 클릭 시, 해당 li 요소의 html data-filter 활성화(active)시켜 css에 변화를 줌

- work section의 category button 클릭 시, 해당 요소의 html data-filter 활성화(active)시켜 css에 변화를 줌

- media query (under page-width: 768px) 활성화 시, toggle button을 클릭하면 navbar menu를 toggle 활성화시킴

- navbar menu 활성화 상태에서 navbar menu item을 클릭하면, navbar menu의 active를 제거하여 navbar를 초기화시킴

- navbar menu 활성화 상태에서 document에 scroll 이벤트가 발생하면, navbar menu의 active를 제거하여 navbar를 초기화시킴

- 특정 section의 위치에 도달하면, navbar menu 아이템을 활성화시켜서 현재 section을 navbar에서 확인할 수 있게 함 (Intersection Observer API를 이용하여 특정 section의 위치에 viewport가 도달했는지 확인한다.)
